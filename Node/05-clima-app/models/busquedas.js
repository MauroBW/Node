const axios = require('axios');

class Busquedas {

    historial = ['Montevideo', 'Madrid'];

    constructor() {
        // TODO: leer base de datos
    }

    get paramsMapBox() {
        return {
            'access_token': `${process.env.MAPBOX_KEY}`,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = "") {

        // peticion http

        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });

            const res = await instance.get();

            return res.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
        } catch (error) {
            return [];
        }
    }

    async climaLugar(lat, lon) {

        try {
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {
                    'lat'
                }
            })


        } catch (error) {
            console.log(error);
        }

        // instance de axios

        // respuesta.data

        // retornar {desc, min, max, temp}

    }

}

module.exports = Busquedas;