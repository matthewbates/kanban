const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
