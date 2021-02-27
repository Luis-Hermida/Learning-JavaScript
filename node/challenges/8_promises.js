// Callback Example
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("Error!", undefined);
    // callback(undefined, "Success!");
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) return console.log(error);
  console.log(result);
});

// Promises Example
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Sucess!");
    reject("Error!");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
