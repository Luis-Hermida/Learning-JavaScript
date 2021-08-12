require("../db/mongoose");
const Task = require("../models/task");

Task.create({ description: "Work", finished: false })
  .then((response) => {
    console.log(response);
    return Task.countDocuments({ finished: false });
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
