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
        new: true
    });
}

// delete
const deleteFileById = async(id) => {
    return await MFile.deleteById(id);
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
    deleteFileById,
    getFilesByOwner,
    getFileById,
}