const express = require("express");
const passport = require('passport');

// main app
const APP = express();

// json format support
APP.use(express.json());

// passport init
APP.use(passport.initialize());
APP.use(passport.session());
require("./middleware/passport")(passport);

// endpoints
APP.use("/users", require("./routers/users.router"));
APP.use("/files", require("./routers/files.router"));

module.exports = APP;