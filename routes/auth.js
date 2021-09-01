const express = require("express");
const router = express.Router;
const authController = require("../controller/auth");

router.get("/", authController.authenticate);
