require "./models";

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
