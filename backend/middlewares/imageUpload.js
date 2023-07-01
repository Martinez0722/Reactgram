const multer = require("multer");
const path = require("path");

// Destination to store image
const imageStorage = multer.diskStorage({
    destination:(req, file, cb) => {
        let folder = ""

        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}/`)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, filse, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {

            // upload only png or jpeg formats
            return cb(new Error("Por favor, envie apenas png ou jpeg"))
        }
        cb(undefined, true)
    },
});

module.exports = { imageUpload };