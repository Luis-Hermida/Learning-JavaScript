const { ObjectID } = require("mongodb");

// Insert One
db.collection("users").insertOne(
  {
    name: "Pepe",
    age: 26,
  },
  (error, result) => {
    if (error) return console.log(error, "Unable to insert to database!");
    console.log("Inserted -", result.ops);
  }
);

// Insert Many
db.collection("tasks").insertMany(
  [
    { description: "Run", completed: true },
    { description: "Jump", completed: true },
    { description: "Push", completed: true },
  ],
  (error, result) => {
    if (error) return console.log(error, "Unable to insert to database!");
    console.log("Inserted -", result.ops);
  }
);

// Find One
db.collection("users").findOne({ name: "Jen" }, (error, user) => {
  if (error) console.log(error);
  console.log(user);
});

// Find
db.collection("users")
  .find({ age: 26 })
  .toArray((error, users) => {
    if (error) console.log(error);
    console.log(users);
  });

// Count
db.collection("users")
  .find({ age: 26 })
  .count((error, users) => {
    if (error) console.log(error);
    console.log(users);
  });

// Update one
const updatePromise = db
  .collection("users")
  .updateOne(
    { _id: new ObjectID("6039af7c67a6446d40e229bd") },
    {
      $inc: {
        age: 1,
      },
      $set: {
        name: "Peru",
      },
    }
  )
  .then((result) => {
    console.log("Updated -", result.modifiedCount);
  })
  .catch((error) => {
    console.log(error, "Unable to update!");
  });

// Update many
db.collection("tasks")
  .updateMany(
    { completed: true },
    {
      $set: {
        completed: false,
      },
    }
  )
  .then((result) => {
    console.log("Updated -", result.modifiedCount);
  })
  .catch((error) => {
    console.log(error, "Unable to update!");
  });

// Delete one
db.collection("users")
  .deleteOne({
    _id: new ObjectID("6039b71b01df937a089deca1"),
  })
  .then((result) => {
    console.log("Deleted -", result.deletedCount);
  })
  .catch((error) => {
    console.log(error, "Unable to delete!");
  });

// Delete many
db.collection("users")
  .deleteMany({
    age: 27,
  })
  .then((result) => {
    console.log("Deleted -", result.deletedCount);
  })
  .catch((error) => {
    console.log(error, "Unable to delete!");
  });
