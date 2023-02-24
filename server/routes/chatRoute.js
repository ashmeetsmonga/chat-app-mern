const express = require("express");
const { getChat, createChat } = require("../controllers/chatController");
const router = express.Router();

router.route("/:userOneId/:userTwoId").get(getChat).post(createChat);

module.exports = router;
