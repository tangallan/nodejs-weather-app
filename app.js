const request = require('request');

const url =
    'https://api.darksky.net/forecast/eebd05aec1e93c5fdf248837c04ef0a1/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    // const respStr = response.body;
    // const data = JSON.parse(respStr);
    // console.log(data);

    // with json:true
    // console.log(response.body.currently);

    if (error) {
    } else {
        const currentWeather = response.body.currently;
        const dailyWeather = response.body.daily;

        // console.log(`It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precipProbability * 100}% chance of rain.`)
        console.log(
            `${dailyWeather.data[0].summary} It is currently ${
                currentWeather.temperature
            } degrees out. There is a ${currentWeather.precipProbability * 100}% chance of rain.`
        );
    }
});

// geocoding
// address -> lat / long -> weather

// const mapBoxUrl =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json';
// request(
//     {
//         url: mapBoxUrl,
//         qs: {
//             access_token:
//                 'pk.eyJ1IjoiYWxsYW50YW5nIiwiYSI6ImNqdnBzMWF0NjBjYmQ0OW84eXNnNmd1ZnMifQ.E7XhKktEaA746OOq14h_sw',
//             limit: 1
//         },
//         json: true
//     },
//     (error, response) => {
//         const { features } = response.body;
//         const { center } = features[0];
//         const latitude = center[1];
//         const longitude = center[0];
//         console.log(`latitude: ${latitude}, longitude: ${longitude}`);
//     }
// );
