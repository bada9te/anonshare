const mongoose = require("mongoose");


const usersSchema = mongoose.Schema({
    nick: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: false,
    },
    files: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "File",
        }],
    },
}, {timestamps: true})

module.exports = mongoose.model("User", usersSchema);
