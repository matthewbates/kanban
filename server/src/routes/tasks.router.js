const express = require("express");

const tasksController = require("../controllers/tasks.controller");

const tasksRouter = express.Router();

tasksRouter.post("/newTask", tasksController.postNewTask);
tasksRouter.get("/", tasksController.getAllTasks);

module.exports = tasksRouter;
