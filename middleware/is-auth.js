const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //this header is build by jwt.sign()
  const authHeader = req.get("Authorization");
  console.log(authHeader);
  //check for header Existence
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    //verify token by jwt pakage
    decodedToken = jwt.verify(token, "give from back");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  //double chekc for decoded token exictence
  if (!decodedToken) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  //save decoded token to req for authentication
  req.userId = decodedToken.userId;
  next();
};
