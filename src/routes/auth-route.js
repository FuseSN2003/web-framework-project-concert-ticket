const express = require("express");
const controller = require("../controllers/auth-contoller");

const router = express.Router();

router.get("/register", controller.showRegisterPage);
router.post("/register", controller.createUser);

router.get("/login", controller.showLoginPage);
router.post("/login", controller.loginUser);

module.exports = router;