const express = require("express");
const { getChat, createChat, getAllChats } = require("../controllers/chatController");
const router = express.Router();

router.route("/").get(getAllChats);
router.route("/").post(createChat);
router.route("/:userOneId/:userTwoId").get(getChat).post(createChat);

module.exports = router;
