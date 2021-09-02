exports.userController = (req, res, next) => {
  const userId = "req.userId";
  res.status(200).json({ data: userId });
};

exports.ordersController = (req, res, next) => {
  const cryptoId = req.params.cryptoId;
  const orderState = req.params.state;
  console.log(cryptoId, orderState);
  if (!cryptoId && !orderState) {
    return res.status(200).json({ data: `all order of the user` });
  }
  if (cryptoId && !orderState) {
    return res
      .status(200)
      .json({ data: `all order of the user from ${cryptoId}` });
  }
  res
    .status(200)
    .json({ data: `${orderState} order of ${cryptoId} cryptocorency` });
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

//routes not found 404 error
exports.get404 = (req, res, next) => {
  res.status(404).json({
    data: "Page Not Found . header must be included",
  });
};
