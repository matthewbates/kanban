const mongoose = require("mongoose");

const Task = require("../models/tasks.model");

const postNewTask = (req, res, next) => {
  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  task
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Task created successfully",
        task: [
          {
            taskId: task._id,
            name: task.name,
          },
        ],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const getTasks = (req, res, next) => {
  const taskId = req.params.taskId;

  Task.find({ task: taskId })
    .exec()
    .then((docs) => {
      const response = {
        tasks: docs.map((task) => {
          return {
            id: task._id,
            name: task.name,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { postNewTask, getTasks };
