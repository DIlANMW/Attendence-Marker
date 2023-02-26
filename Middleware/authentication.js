const jwt = require("jsonwebtoken");

const varifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Acess denied ");
  }
  try {
    const decode = jwt.verify(token, "1234dilanW");
    req.user = decode;
  } catch (error) {
    return res.status(403).send("Invalid Token");
  }
  return next();
};

module.exports = varifyToken;
