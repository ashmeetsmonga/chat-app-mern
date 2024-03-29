const { StatusCodes } = require("http-status-codes");
const Chat = require("../db/models/Chat");
const User = require("../db/models/User");
const BadRequestError = require("../errors/BadRequestError");

const getChat = async (req, res) => {
	const { userOneId, userTwoId } = req.params;

	const chat = await Chat.findOne({ members: { $all: [userOneId, userTwoId] } });
	if (!chat) throw new BadRequestError("No chat found");
	res.status(StatusCodes.OK).json(chat);
};

const createChat = async (req, res) => {
	const userOneId = req.user.userId;
	const { email } = req.body;

	const user = await User.findOne({ email });
	if (!user) throw new BadRequestError("Email not found");
	const userTwoId = user._id.toString();
	const newChat = await Chat.create({ members: [userOneId, userTwoId] });
	res.status(StatusCodes.OK).json(newChat);
};

const getAllChats = async (req, res) => {
	const { userId } = req.user;
	const chats = await Chat.find({ members: { $in: [userId] } });
	const data = [];

	for (let chat of chats) {
		for (let memberId of chat.members) {
			if (memberId !== userId) {
				const otherUser = await User.findOne({ _id: memberId });
				const chatObj = {};
				chatObj.name = otherUser.name;
				chatObj._id = chat._id;
				chatObj.updatedAt = chat.updatedAt;
				chatObj.latestMessage = chat.latestMessage || "Test";
				data.push(chatObj);
			}
		}
	}
	res.status(StatusCodes.OK).json(data);
};

module.exports = { createChat, getChat, getAllChats };
