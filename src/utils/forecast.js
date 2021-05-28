const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4bbca8c3a155424a743eac5310feaf6f&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees Celsius out. The apparent temperature is ${body.current.feelslike} degrees Celsius.`
      );
    }
  });
};

module.exports = forecast;
