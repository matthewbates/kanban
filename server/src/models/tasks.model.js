const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String },
});

module.exports = mongoose.model("Task", taskSchema);
