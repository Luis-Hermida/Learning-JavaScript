const http = require("http");
const key = `0be6e32f114854603ec3f4243a3334ce`;
const url = `http://api.weatherstack.com/current?access_key=${key}&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
