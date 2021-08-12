require("../db/mongoose");
const Task = require("../models/task");

const deleteTaskAndCount = async (task_id) => {
  const task = await Task.findByIdAndDelete(task_id);
  const count = await Task.countDocuments({ finished: false });
  return count;
};

deleteTaskAndCount("60b1eb02d960e52414046be2")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
