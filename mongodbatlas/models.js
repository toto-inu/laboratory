require("dotenv").config();
const mongoose = require("mongoose");

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

//mongodbのポートの読み込みと、mongoDBのコレクション名(task-manager-api)をつける
mongoose.connect(`mongodb+srv://${username}:${password}@${host}/todoist`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// ToDoアプリを想定
const Task = mongoose.model("Task", {
  id: {
    type: Number,
  },
  content: {
    type: String,
  },
  layer: {
    type: Number,
  },
  doneFlag: {
    type: Boolean,
    default: false,
  },
  childIds: {
    type: [Number],
  },
});

exports.Task = Task;
