const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
	{
		chatId: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: "Chat",
		},
		senderId: {
			type: mongoose.Types.ObjectId,
			required: true,
			ref: "User",
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
