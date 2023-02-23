const mongoose = require("mongoose");

const connectDb = async (URI) => {
	try {
		await mongoose.connect(URI);
		console.log("Connected to DB");
	} catch (err) {
		console.log(err);
	}
};
connectDb(process.env.MONGO_URI);
