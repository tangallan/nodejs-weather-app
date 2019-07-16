const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// geocoding
// address -> lat / long -> weather

geocode('Los Angeles', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        forecast(data.latitude, data.longitude, (e, d) => {
            if(e) {
                console.log(e);
            } else {
                console.log(
                    `${d.summary} It is currently ${
                        d.temperature
                    } degrees out. There is a ${d.precipProbability *
                        100}% chance of rain.`
                );
    
            }
        });
    }
});