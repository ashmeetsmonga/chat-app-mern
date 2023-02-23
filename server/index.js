require("dotenv").config();
require("./db/connectDb");
const express = require("express");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(5000, () => console.log("Listening on port 5000"));
