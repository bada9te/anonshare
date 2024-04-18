const express = require("express");
const cors = require("cors");
const passport = require('passport');
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();


// main app
const APP = express();

// json format support
APP.use(express.json());

// cors
APP.use(cors({
    origin: process.env.CLIENT_BASE, //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}));

// session
APP.use(session({
    secret: 'abcdefgh',
    rolling: true,
    resave: true, 
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000, sameSite: true },
    store: new MongoDBStore({ 
      uri: process.env.MONGO_URL,
    }),
}));

// passport init
APP.use(passport.initialize());
APP.use(passport.session());
require("./middleware/passport")(passport);

// endpoints
APP.use("/users", require("./routers/users.router"));
APP.use("/files", require("./routers/files.router"));

module.exports = APP;