const filesModel = require("../models/files/files.model");
const fs = require('fs');
const path = require('path');


// create file
const createFile = async(req, res, next) => {
    const file = req.file;
    const { owner } = req.body;

    try {
        if (!file) {
            const error = new Error('No File');
            return next(error);
        }

        const f = await filesModel.createFile({
            owner,
            fileName: file.filename
        });

        return res.status(201).json({
            ok: true,
            file,
            _id: f[0]._id
        })
    } catch (error) {
        return next(error);
    }
}

// download
const downloadFile = async(req, res, next) => {
    const { name } = req.query;

    try {
        const filePath = path.join(__dirname, '..', '..', 'uploads', name);
        res.download(
            filePath, 
            name, // Remember to include file extension
            (err) => {
                if (err) {
                    res.send({
                        error : err,
                        msg   : "Problem downloading the file"
                    })
                }
        });
    } catch (error) {
        return next(error);
    }
}

// update password
const updateFilePassword = async(req, res, next) => {
    const { password, fileId } = req.body;

    try {
        await filesModel.updatePasswordById(fileId, password);
        const file = await filesModel.setIsSharing(fileId, password === "");

        return res.status(200).json({
            ok: true,
            file,
        })
    } catch (error) {
        return next(error);
    }
}


// delete file
const deleteFileById = async(req, res, next) => {
    const { name, fileId } = req.body;

    try {
        await filesModel.deleteFileById(fileId);
        const filePath = path.join(__dirname, '..', '..', 'uploads', name);
        fs.unlinkSync(filePath);
        return res.status(200).json({
            ok: true,
        })
    } catch (error) {
        return next(error);
    }
}


// by owner
const getFilesByOwnerId = async(req, res, next) => {
    const { ownerId } = req.query;

    try {
        const files = await filesModel.getFilesByOwner(ownerId);
        return res.status(200).json({
            files,
            ok: true,
        })
    } catch (error) {
        return next(error);
    }
}

// by id
const getFileById = async(req, res, next) => {
    const { id } = req.query;
    try {
        const file = await filesModel.getFileById(id);
        return res.status(200).json({
            file,
            ok: true,
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    createFile,
    downloadFile,
    updateFilePassword,
    deleteFileById,
    getFilesByOwnerId,
    getFileById,
}
