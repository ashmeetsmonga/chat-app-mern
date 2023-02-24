const { StatusCodes } = require("http-status-codes");

const createMessage = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: "Message created" });
};

module.exports = { createMessage };
