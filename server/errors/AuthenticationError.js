const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class AuthenticationError extends CustomError {
	constructor(msg) {
		super(msg);
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}

module.exports = AuthenticationError;
