exports.userController = (req, res, next) => {
  const userId = "req.userId";
  res.status(200).json({ data: userId });
};

exports.ordersController = (req, res, next) => {
  const userId = req.params.userId;
  const orderState = req.params.state;
  if (!userId && !orderState) {
    return res.status(200).json({ data: `all order of the user` });
  }
  res.status(200).json({ data: `${orderState} order of user ${userId}` });
};

exports.marketsController = (req, res, next) => {
  const crypto = req.params.cryptoId;
  if (!crypto) {
    return res.status(200).json({ data: "all crypto datas" });
  }
  res.status(200).json({ data: crypto });
};

exports.walletsController = (req, res, next) => {
  const walletId = req.params.walletId;
  if (!walletId) {
    return res.status(200).json({ data: "all user wallet datas" });
  }
  res.status(200).json({ data: walletId });
};

exports.referralController = (req, res, next) => {
  res.status(200).json({ data: "referral data" });
};

exports.get404 = (req, res, next) => {
  res.status(404).json({
    data: "Page Not Found",
  });
};
