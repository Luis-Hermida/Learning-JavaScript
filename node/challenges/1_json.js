const fs = require("fs");

// Write
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const booksJSON = JSON.stringify(book);
// fs.writeFileSync("1_json.json", booksJSON);

// Read
// const dataBuffer = fs.readFileSync("1_json.json");
// const data = JSON.parse(dataBuffer.toString());
// console.log(data);

// Challenge read and replace data
const dataBuffer = fs.readFileSync("1_json.json");
const data = JSON.parse(dataBuffer.toString());
data.name = "Luis";
data.age = 26;
fs.writeFileSync("1_json.json", JSON.stringify(data));
