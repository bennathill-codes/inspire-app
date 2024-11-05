const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  return res.json("test is working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // check if name was entered
    if (!username) {
      return res.json({
        error: "Username is required",
      });
    }
    // check if password was entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // check email is unique
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "An account already exists with this email",
      });
    }

    // hash password
    const hashedPasword = await hashPassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPasword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login endpoint
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // check if password matches
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Password is incorrect",
      });
    }
    jwt.sign(
      { email: user.email, id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Token generation failed" });
        }

        // Set the token as an HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Send only over HTTPS in production
          sameSite: "strict",
        });

        // Return user information and token in response
        res.json({
          message: "Login successful",
          token,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
          },
        });
      }
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while logging in. Please try again." });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
