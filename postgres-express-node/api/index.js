const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
const user = require("./routes/user");
const login = require("./routes/login");
module.exports = () => {
  hello(router);
  user(router);
  login(router);
  return router;
};
