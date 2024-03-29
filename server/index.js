require("dotenv").config();
require("./db/connectDb");
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const authRouter = require("./routes/authRoutes");
const chatRouter = require("./routes/chatRoute");
const messageRouter = require("./routes/messageRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/chat", authMiddleware, chatRouter);
app.use("/message", authMiddleware, messageRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(5000, () => console.log("Listening on port 5000"));
