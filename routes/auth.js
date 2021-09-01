const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

router.get("/auth", authController.authenticate);

router.get("/", authController.fake);

module.exports = router;
