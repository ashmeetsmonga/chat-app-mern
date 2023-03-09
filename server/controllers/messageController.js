const { StatusCodes } = require("http-status-codes");
const Chat = require("../db/models/Chat");
const Message = require("../db/models/Message");
const BadRequestError = require("../errors/BadRequestError");

const getMessages = async (req, res) => {
	const { chatId } = req.params;
	const messages = await Message.find({ chatId });
	res.status(StatusCodes.OK).json(messages);
};

const createMessage = async (req, res) => {
	const { senderId, chatId, text } = req.body;
	console.log(senderId, chatId, text);
	if (!senderId || !chatId || !text) throw new BadRequestError("Fields are missing");
	const newMessage = await Message.create({ chatId, senderId, text });

	const chat = await Chat.findOneAndUpdate(
		{ _id: chatId },
		{ latestMessage: text },
		{ replace: true }
	);
	console.log(chat);
	Chat.res.status(StatusCodes.OK).json(newMessage);
};

module.exports = { getMessages, createMessage };
