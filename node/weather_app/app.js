const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const address = process.argv[2];

if (!address) {
  console.log("Please select a valid address as an argument.");
} else {
  geocode.getCoordinates(
    address,
    (error, { location, latitude, longtitude } = {}) => {
      if (error) {
        return console.log(error);
      }
      weather.getWeather(
        latitude,
        longtitude,
        (error, { description, temperature, feelslike } = {}) => {
          if (error) {
            return console.log(error);
          }
          console.log(location);
          console.log(
            `Weather is ${description} with a temprature of ${temperature} c° that feels like ${feelslike} c°`
          );
        }
      );
    }
  );
}
