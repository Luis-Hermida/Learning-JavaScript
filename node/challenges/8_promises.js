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
    resolve("Success!");
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

// Promise Chaining
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 2)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });

// Bad approach
// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//     // Nested promise
//     add(sum, 2)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     ////
//   })
//   .catch((error) => {
//     console.log(error);
//   });
