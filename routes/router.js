const express = require("express");
const router = express.Router();
//use when token is generated 
const isAuth = require("../middleware/is-auth");
const mainController = require("../controllers/controller");

//user profile
router.get("/v1/user", mainController.userController);

//all orders of logged in user
router.get("/v1/orders", mainController.ordersController);
//all orders of logged in user from specific crypto
router.get("/v1/orders/:cryptoId", mainController.ordersController);
//all orders of logged in user from specific crypto and order satate
router.get("/v1/orders/:cryptoId/:state", mainController.ordersController);

//all markets information
router.get("/v1/markets", mainController.marketsController);
//specific crypto market information
router.get("/v1/markets/:cryptoId", mainController.marketsController);

//all user wallets
router.get("/v1/wallets", mainController.walletsController);
//user specific crypto wallet
router.get("/v1/wallets/:walletId", mainController.walletsController);

//referral from user
router.get("/v1/referral", mainController.referralController);

module.exports = router;
