const express = require("express");

const router = express.Router();

const { addAvatar } = require("../../../controllers/userActions");

router.post("/avatar/:id", addAvatar);

module.exports = router;
