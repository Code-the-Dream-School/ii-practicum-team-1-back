const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

const mainRouter = require("./routes/mainRouter.js");
const errorHandler = require("./middleware/errorHandler");
const testRouter = require("./routes/testRouter");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// routes
app.use("/api/v1", mainRouter);
app.use(errorHandler);
app.use("/api/v1/test", testRouter);

module.exports = app;
