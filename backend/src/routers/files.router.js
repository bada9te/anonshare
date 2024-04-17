const express = require("express");
const filesController = require("../controllers/files.controller");
const { upload } = require("../middleware/multer");


const filesRouter = new express.Router();

filesRouter.post('/create', upload.single("file"), filesController.createFile);
filesRouter.post('/new-passwd', filesController.updateFilePassword);
filesRouter.post('/delete', filesController.deleteFileById);

filesRouter.get('/id', filesController.getFileById);
filesRouter.get('/owner', filesController.getFilesByOwnerId);

module.exports = filesRouter;