const MFile = require("./files.mongo");


// create
const createFile = async(file) => {
    return await MFile.insertMany([file]);
};

// updatePassword
const updatePasswordById = async(id, newPassword) => {
    return await MFile.findOneAndUpdate({
        _id: id
    }, {
        password: newPassword,
    }, {
        new: true,
    });
}

// set is sahring
const setIsSharing = async(id, enable) => {
    return await MFile.findOneAndUpdate({
        _id: id,
    }, {
        isSharing: enable,
    }, {
        new: true,
    });
}

// delete
const deleteFileById = async(id) => {
    return await MFile.findByIdAndDelete(id);
}

// get files by owner
const getFilesByOwner = async(ownerId) => {
    return await MFile.find({ owner: ownerId });
}

const getFileById = async(id) => {
    return await MFile.findOneById(id);
}


module.exports = {
    createFile,
    updatePasswordById,
    setIsSharing,
    deleteFileById,
    getFilesByOwner,
    getFileById,
}