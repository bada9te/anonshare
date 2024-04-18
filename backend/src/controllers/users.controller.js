const usersModel = require("../models/users/users.model");
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
require("dotenv").config();



// create
const createUser = async(req, res, next) => {
    const { user } = req.body; // user: { nick, password }

    try {
        const userDT = await usersModel.getUserByNickname(user.nick)
        if (userDT) {
            return res.status(400).json({
                ok: false,
                error: "User already exists."
            });
        }
        const createdUser = await usersModel.createUser(user);
        return res.status(201).json({
            ok: true,
            user: createdUser
        });
    } catch (error) {
        return next(error)
    }
}

// login
const loginUser = async(req, res, next) => {
    const { user } = req.body; // user: { nick, password }

    try {
        const userDT = await usersModel.getUserByNickname(user.nick);
    
        if (!userDT || (userDT.password != user.password)) {
            return res.status(400).json({
                ok: false,
                error: "Invalid credentials",
            });
        }
    
        const refreshToken = crypto.randomBytes(64).toString('hex');
        await usersModel.setRefreshTokenById(userDT._id, refreshToken);
    
        const token = jwt.sign(
            { _id: userDT._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
    
        return res.status(200).json({
            ok: true,
            token,
            refreshToken,
        });
    } catch (error) {
        return next(error);
    }
}

// token
const getNewToken = async(req, res, next) => {
    const { refreshToken } = req.body;

    try {
        const user = await usersModel.getByRefreshToken(refreshToken);

        if (!user) {
            return res.status(403).json({ ok: false, error: "Invalid refresh token" });
        }

        const newToken = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            ok: true,
            token: newToken,
        });
    } catch (error) {
        return next(error);
    }
}

// logout
const logoutUser = async(req, res, next) => {
    const { refreshToken } = req.body;
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
    loginUser,
    getNewToken,
    logoutUser
};