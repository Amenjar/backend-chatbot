const jwt = require("jsonwebtoken");
const UserSchema = require("../models/User");

exports.isAuth = async (req, res, next) => {
  const token = req.header("authorization");
  try {
    if (!token) {
      res.status(400).send({ msg: "you are not authorized" });
    }
    var decoded = jwt.verify(token, "Secret");
    const user = await UserSchema.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(500).send({ msg: "could not get user auth", error });
  }
};
