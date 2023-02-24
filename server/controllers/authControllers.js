const { StatusCodes } = require("http-status-codes");
const User = require("../db/models/User");
const BadRequestError = require("../errors/BadRequestError");

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) throw new BadRequestError("Email and password are required");

	const user = await User.findOne({ email });

	if (!user) throw new BadRequestError("Invalid Credentials 0");
	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) throw new BadRequestError("Invalid Credentials 1");

	res.status(StatusCodes.OK).json(user);
};

const register = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		throw new BadRequestError("Name, email and password are required");

	const newUser = await User.create({ name, email, password });
	res.status(StatusCodes.OK).json(newUser);
};

module.exports = { login, register };
