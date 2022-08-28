const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  timeCreated: {
    type: String,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
