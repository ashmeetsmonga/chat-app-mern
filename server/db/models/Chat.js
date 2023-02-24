const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({
	members: {
		type: Array,
		required: true,
	},
});

module.exports = mongoose.model("Chat", ChatSchema);
