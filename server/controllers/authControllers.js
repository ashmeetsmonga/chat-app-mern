const login = async (req, res) => {
	res.status(200).json({ msg: "Login successful" });
};

const register = async (req, res) => {
	res.status(200).json({ msg: "Register Successful" });
};

module.exports = { login, register };
