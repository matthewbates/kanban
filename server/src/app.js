const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/users.router");
const tasksRouter = require("./routes/tasks.router");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use(morgan("dev"));
app.use(cors());

module.exports = app;
