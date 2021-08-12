require("../db/mongoose");
const User = require("../models/user");

const updateAgeAndCount = async (user_id, age) => {
  const user = await User.findByIdAndUpdate(user_id, { age });
  const count = await User.countDocuments({ age: 1 });
  return count;
};

updateAgeAndCount("60b1bc06d6d0273b6438fa71", 26)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
