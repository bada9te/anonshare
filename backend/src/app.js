const express = require("express");

const APP = express();

APP.use(express.json());

APP.use("/users", require("./routers/users.router"));

module.exports = APP;