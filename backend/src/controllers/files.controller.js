const filesModel = require("../models/files/files.model");


// create file
const createFile = async(req, res, next) => {
    const file = req.file;
    const { owner } = req.body;

    try {
        if (!file) {
            const error = new Error('No File');
            return next(error);
        }

        await filesModel.createFile({
            owner,
            fileName: file.filename
        });

        return res.status(201).json({
            ok: true,
            file,
        })
    } catch (error) {
        return next(error);
    }
}

// update password
const updateFilePassword = async(req, res, next) => {
    const { password, fileId } = req.body;

    try {
        const file = await filesModel.updatePasswordById(fileId, password);
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
    const { fileId } = req.body;

    try {
        await filesModel.deleteFileById(fileId);
        return res.status(200).json({
            ok: true,
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    createFile,
    updateFilePassword,
    deleteFileById,
}