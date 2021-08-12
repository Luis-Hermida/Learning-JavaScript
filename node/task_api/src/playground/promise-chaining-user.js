require("../db/mongoose");
const User = require("../models/user");

User.findByIdAndUpdate("60b1bc06d6d0273b6438fa71", { age: 1 })
  .then((response) => {
    console.log(response);
    return User.countDocuments({ age: 1 });
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
