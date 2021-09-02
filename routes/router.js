const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const mainController = require("../controllers/controller");

router.get("/v1/user", mainController.userController);

router.get("/v1/orders", mainController.ordersController);
router.get("/v1/orders/:userId/:state", mainController.ordersController);

router.get("/v1/markets", mainController.marketsController);
router.get("/v1/markets/:cryptoId", mainController.marketsController);

router.get("/v1/wallets", mainController.walletsController);
router.get("/v1/wallets/:walletId", mainController.walletsController);

router.get("/v1/referral", mainController.referralController);

module.exports = router;
