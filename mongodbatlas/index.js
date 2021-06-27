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

// データのモデル定義
const tasks = new Task({
  id: 1,
  content: "",
  layer: 2,
  doneFlag: false,
  childIds: [2, 3],
});

// console.log(tasks);
// tasks.countChildTasks();

// [パターン1: taskの追加]tasksドキュメントをデータベースに保存
tasks.save().then(() => console.log("here comes datas!!!"));

// [パターン2: 全件一致]
Task.find({ layer: 2 }).exec((err, task) => {
  console.log(task);
});

// [パターン3: キー指定]
Task.find({ layer: 2 }).exec((err, task) => {
  console.log(task);
});
// https://mongoosejs.com/docs/guide.html#statics
