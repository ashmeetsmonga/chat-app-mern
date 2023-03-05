const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
	{
		members: {
			type: Array,
			required: true,
		},
		latestMessage: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
