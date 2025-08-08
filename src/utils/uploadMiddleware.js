const multer = require("multer");
const path = require("path");
const fs = require("fs");

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const coverStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/users/cover";
    ensureDir(dir); 
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, name);
  },
});

const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/users/profile";
    ensureDir(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, name);
  },
});

const uploadProfile = multer({ storage: profileStorage });
const uploadCover = multer({ storage: coverStorage });

module.exports = { uploadCover, uploadProfile };
