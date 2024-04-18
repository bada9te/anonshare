const express = require("express");
const usersController = require("../controllers/users.controller");


const usersRouter = new express.Router();

usersRouter.post("/create", usersController.createUser);
usersRouter.get ("/id", usersController.getUserById);

usersRouter.post('/login', usersController.loginUser);
usersRouter.post('/refresh', usersController.getNewToken);
usersRouter.post('/logout', usersController.logoutUser);

module.exports = usersRouter;