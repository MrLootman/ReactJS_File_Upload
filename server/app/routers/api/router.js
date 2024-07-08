const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const uploadRouter = require("./uploads/router");

router.use("/upload", uploadRouter);

const userRouter = require("./users/router");

router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
