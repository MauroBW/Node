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
            console.log(res.data);


            return []; // retornar las ciudades
        }

        catch(error) {
            return [];
        }
    }

}

module.exports = Busquedas;
