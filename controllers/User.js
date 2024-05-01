const express = require('express');
const {
    RegisterValidation,
    Validation,
    LoginValidation,
  } = require("../middlewares/Register");
const { isAuth } = require('../middlewares/isAuth');
const { SignUp, SignIn } = require('../services/User');
const AuthRoute = express.Router();

AuthRoute.post("/signUp", RegisterValidation, Validation, SignUp);
AuthRoute.post("/signIn", LoginValidation, Validation, SignIn);
AuthRoute.get("/current", isAuth, (req, res) => res.send(req.user));

module.exports = AuthRoute;
 