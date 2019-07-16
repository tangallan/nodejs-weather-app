const request = require('request');

const geocode = (address, callback) => {
    const mapBoxUrl =
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`; //Los%20Angeles
    request(
        {
            url: mapBoxUrl,
            qs: {
                access_token:
                    'pk.eyJ1IjoiYWxsYW50YW5nIiwiYSI6ImNqdnBzMWF0NjBjYmQ0OW84eXNnNmd1ZnMifQ.E7XhKktEaA746OOq14h_sw',
                limit: 1
            },
            json: true
        },
        (error, response) => {
            if (error) {
                callback('Unable to connect to MapBox services!', undefined);
            } else if (response.body.features.length === 0) {
                callback('No coordinates found.', undefined);
            } else {
                const { features } = response.body;
                const { center, place_name } = features[0];
                const latitude = center[1];
                const longitude = center[0];
                callback(undefined, {
                    latitude : latitude,
                    longitude : longitude,
                    location: place_name
                })
            }
        }
    );
};

module.exports = geocode;