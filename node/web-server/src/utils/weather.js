const request = require("postman-request");

const getWeather = (latitude, longtitude, callback) => {
  const key = `0be6e32f114854603ec3f4243a3334ce`;
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longtitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const current = body.current;
      callback(undefined, {
        description: current.weather_descriptions[0],
        temperature: current.temperature,
        feelslike: current.feelslike,
      });
    }
  });
};

module.exports = { getWeather };
