const CustomError = require("../errors/CustomError");

const errorHandlerMiddleware = async (err, req, res, next) => {
	if (err instanceof CustomError) {
		res.status(err.statusCode).json({ msg: err.message });
	}
};

module.exports = errorHandlerMiddleware;
