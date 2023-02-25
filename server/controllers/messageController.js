const { StatusCodes } = require("http-status-codes");
const Message = require("../db/models/Message");

const createMessage = async (req, res) => {
	const { senderId, chatId, text } = req.body;
	const newMessage = await Message.create({ chatId, senderId, text });
	res.status(StatusCodes.OK).json(newMessage);
};

module.exports = { createMessage };
