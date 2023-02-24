const { StatusCodes } = require("http-status-codes");
const Chat = require("../db/models/Chat");

const getChat = async (req, res) => {
	const { userOneId, userTwoId } = req.params;
	res.status(StatusCodes.OK).json({ userOneId, userTwoId });
};

const createChat = async (req, res) => {
	const { userOneId, userTwoId } = req.params;

	const newChat = await Chat.create({ members: [userOneId, userTwoId] });
	res.status(StatusCodes.OK).json(newChat);
};

module.exports = { createChat, getChat };
