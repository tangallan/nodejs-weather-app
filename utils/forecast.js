const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/eebd05aec1e93c5fdf248837c04ef0a1/${lat},${long}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body && response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            const currentWeather = response.body.currently;
            const dailyWeather = response.body.daily;
            // console.log(`It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precipProbability * 100}% chance of rain.`)
            // console.log(
            //     `${dailyWeather.data[0].summary} It is currently ${
            //         currentWeather.temperature
            //     } degrees out. There is a ${currentWeather.precipProbability *
            //         100}% chance of rain.`
            // );

            callback(undefined, {
                temperature : currentWeather.temperature,
                summary: dailyWeather.data[0].summary,
                precipProbability : currentWeather.precipProbability
            });
        }
    });
};

module.exports = forecast;