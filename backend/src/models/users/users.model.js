const User = require("./users.mongo");

// create
const createUser = async(user) => {
    return await User.insertMany([user]);
};

const getUserById = async(id) => {
    return await User.findOneById(id);
}


module.exports = {
    createUser,
    getUserById,
};