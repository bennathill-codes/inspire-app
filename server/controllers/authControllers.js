const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test is working");
};

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

module.exports = {
  test,
  registerUser,
};
