const express = require("express");
const usersController = require("../controllers/users.controller");


const usersRouter = new express.Router();

usersRouter.post("/create", usersController.createUser);
usersRouter.get ("/id", usersController.getUserById);


module.exports = usersRouter;