const multer = require("multer");
const path = require("path");


// storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let destPath = 'uploads/';
        cb(null, destPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});


// filter
const fileFilter = (req, file, cb) => {
    if (file.size > 8388608) {
        return cb(new Error('File size exceeds 8 MB'));
    }
    cb(null, true);
};

// multi upload
const multi_upload = multer({
    storage,
    fileFilter,
}).array('uploadedFiles');

// single upload
const upload = multer({ storage, fileFilter });


module.exports = { multi_upload, upload };
