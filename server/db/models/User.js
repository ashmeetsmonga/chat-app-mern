const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.checkPassword = async function (inputPassword) {
	const isPasswordCorrect = await bcrypt.compare(inputPassword, this.password);
	return isPasswordCorrect;
};

UserSchema.methods.createJWT = function () {
	const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
	return token;
};

module.exports = mongoose.model("User", UserSchema);
