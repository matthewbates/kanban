const express = require("express");
const cors = require("cors");

const tasksController = require("../controllers/tasks.controller");

const tasksRouter = express.Router();
tasksRouter.use(cors());

tasksRouter.post("/", tasksController.postNewTask);

tasksRouter.get("/", tasksController.getTasks);

module.exports = tasksRouter;
