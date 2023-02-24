require("dotenv").config();
require("./db/connectDb");
require("express-async-errors");
const express = require("express");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const authRouter = require("./routes/authRoutes");
const chatRouter = require("./routes/chatRoute");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(5000, () => console.log("Listening on port 5000"));
