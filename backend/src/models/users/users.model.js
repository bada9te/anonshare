const User = require("./users.mongo");

// create
const createUser = async(user) => {
    return await User.insertMany([user]);
};

const getUserById = async(id) => {
    return await User.findOneById(id);
}

const getUserByNickname = async(nick) => {
    return await User.findOne({ nick });
}

const setRefreshTokenById = async(id, refTok) => {
    return await User.findOneAndUpdate(
        { _id: id },
        { refreshToken: refTok },
        { new: true }
    );
}

const getByRefreshToken = async(refTok) => {
    return await User.findOne({ refreshToken: refTok });
}


module.exports = {
    createUser,
    getUserById,
    getUserByNickname,
    setRefreshTokenById,
    getByRefreshToken,
};