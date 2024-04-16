const usersModel = require("../models/users/users.model");


// create
const createUser = async(req, res, next) => {
    const { user } = req.body; // user: { nick, password }

    try {
        const createdUser = await usersModel.createUser(user);
        return res.status(201).json({
            ok: true,
            user: createdUser
        });
    } catch (error) {
        return next(error)
    }
}

// get by id
const getUserById = async(req, res) => {
    const { id } = req.query;

    try {
        const user = await usersModel.getUserById(id);
        return res.status(200).json({
            ok: true,
            user,
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createUser, 
    getUserById,
};