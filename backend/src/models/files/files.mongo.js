const mongoose = require("mongoose");

const filesSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    password: {
        type: String,
    },
    fileName: {
        type: String,
        required: true,
    },
    isSharing: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {timestamps: true});


module.exports = mongoose.model("File", filesSchema);