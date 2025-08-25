const bcrypt = require("bcrypt");
const User = require("../models/user-model");

function showRegisterPage(req, res) {
  res.render("register-page");
}

async function createUser(req, res) {
  try {
    const { email, firstName, lastName, password, phone, gender } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern && error.keyPattern.email) {
        return res.status(409).json({ error: "Email already exists" });
      }
    }

    return res.status(400).json({ error: error.message });
  }
}

function showLoginPage(req, res) {
  res.render("login-page");
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: "email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "email or password is incorrect" });
    }

    req.session.user = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  showRegisterPage,
  createUser,
  showLoginPage,
  loginUser,
};