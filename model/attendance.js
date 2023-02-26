const mongoose = require("mongoose");

const attendanceShema = new mongoose.Schema({
  attendance: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Attendance", attendanceShema);
