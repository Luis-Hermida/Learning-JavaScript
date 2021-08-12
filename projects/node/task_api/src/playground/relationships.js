require("../db/mongoose");
const Task = require("../models/task");
const User = require("../models/user");

const main = async () => {
  const task = await Task.findById("610778207ad876331c9987a1");
  await task.populate("owner").execPopulate();
  console.log("Get User from Task", task.owner);

  const user = await User.findById("6107777d9745fd4768b0d8c8");
  await user.populate("tasks").execPopulate();
  console.log("Get Tasks by User (virtually)", user.tasks);
};

main();
