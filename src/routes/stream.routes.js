const express = require("express");
const toonstreamController = require("../controllers/stream.controllers.js");

const router = express.Router();

router.get("/", toonstreamController);

module.exports = router;