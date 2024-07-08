const express = require("express");

const router = express.Router();

const upload = require("../../../services/upload");

// const path = require("path");
// const multer = require("multer");

// const uploadsFolderPath = path.join(__dirname, "../../../../public/uploads");

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, uploadsFolderPath);
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${path.parse(file.originalname).name }-${  Date.now()  }${path.extname(file.originalname)}`
//     );
//   }
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg" ||
//       file.mimetype === "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(new Error("Invalid mime type"));
//     }
//     return null;
//   },
// });

router.post("/", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.file;

    return res.json({ message: "File uploaded !", filename });
  } catch (err) {
    console.error(err);
    return null;
  }
});

module.exports = router;
