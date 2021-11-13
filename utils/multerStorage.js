const multer = require("multer");

let storage = multer.diskStorage({
  // destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

let upload = multer({ storage: storage });

module.exports = {upload};