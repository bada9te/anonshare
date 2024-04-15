const express = require("express");

const APP = express();

APP.use(express.json());

module.exports = APP;