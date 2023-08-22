const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  task: { type: String, required: true },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Task", taskSchema);
