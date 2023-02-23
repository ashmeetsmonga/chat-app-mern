const { StatusCodes } = require("http-status-codes");
const User = require("../db/models/User");

const login = async (req, res) => {
	res.status(200).json({ msg: "Login successful" });
};

const register = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const newUser = await User.create({ name, email, password });
		res.status(StatusCodes.OK).json(newUser);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { login, register };
