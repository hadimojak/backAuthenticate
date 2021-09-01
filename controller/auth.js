const jwt = require("jsonwebtoken");

exports.authenticate = async (req, res, next) => {
  const token = jwt.sign(
    {
      email: "some email",
      userId: "some id",
    },
    "somesupersecretsecret",
    { expiresIn: "1h" }
  );
  res.status(200).json({ token: token, userId: "some id", state: "authentiaced" });
};

exports.fake = (req, res, next) => {
  res.json({ message: "hey" });
};
