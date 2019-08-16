const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  journal: {
    type: Schema.Types.ObjectId,
    ref: "journal"
  },
  title: {
    type: String,
    required: true
  },
  entry: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Entry = mongoose.model("entry", EntrySchema);