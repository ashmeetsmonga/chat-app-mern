const { StatusCodes } = require("http-status-codes");
const User = require("../db/models/User");
const BadRequestError = require("../errors/BadRequestError");

const login = async (req, res) => {
	res.status(200).json({ msg: "Login successful" });
};

const register = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		throw new BadRequestError("Name, email and password are required");

	const newUser = await User.create({ name, email, password });
	res.status(StatusCodes.OK).json(newUser);
};

module.exports = { login, register };
