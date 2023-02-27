const { StatusCodes } = require("http-status-codes");
const Chat = require("../db/models/Chat");
const BadRequestError = require("../errors/BadRequestError");

const getChat = async (req, res) => {
	const { userOneId, userTwoId } = req.params;

	const chat = await Chat.findOne({ members: { $all: [userOneId, userTwoId] } });
	if (!chat) throw new BadRequestError("No chat found");
	res.status(StatusCodes.OK).json(chat);
};

const createChat = async (req, res) => {
	const { userOneId, userTwoId } = req.params;

	const newChat = await Chat.create({ members: [userOneId, userTwoId] });
	res.status(StatusCodes.OK).json(newChat);
};

const getAllChats = async (req, res) => {
	const { userId } = req.user;
	const chats = await Chat.find({ members: { $in: [userId] } });
	res.status(StatusCodes.OK).json(chats);
};

module.exports = { createChat, getChat, getAllChats };
