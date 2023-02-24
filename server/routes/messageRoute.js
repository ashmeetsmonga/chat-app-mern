const express = require("express");
const { createMessage } = require("../controllers/messageController");
const router = express.Router();

router.route("/").post(createMessage);

module.exports = router;
