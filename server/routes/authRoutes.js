const express = require("express");
const router = express.Router();
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authControllers");
const { registerUserHandler } = require("../handlers/users");

router.get("/", test);
router.post("/register", registerUser, registerUserHandler);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
