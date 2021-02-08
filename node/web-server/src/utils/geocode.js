const request = require("postman-request");

const getCoordinates = (address, callback) => {
  const limit = "1";
  const key = `pk.eyJ1IjoibHVpc2hlcm1pZGEiLCJhIjoiY2tqdnk0ajdiN2pkNTJ5cDlldnJ0bjJ0aCJ9.K3_WsIr-yGsjKYUnB9mcwA`;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/
    ${encodeURIComponent(address)}.json?access_token=${key}&limit=${limit}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geocoding services.", undefined);
    } else if (!body.features.length) {
      callback("Unable to find location.", undefined);
    } else {
      const location = body.features[0];
      callback(undefined, {
        latitude: location.center[1],
        longtitude: location.center[0],
        location: location.place_name,
      });
    }
  });
};

module.exports = { getCoordinates };
