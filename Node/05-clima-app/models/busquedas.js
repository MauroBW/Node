const axios = require('axios');

class Busquedas {

    historial  = ['Montevideo', 'Madrid'];

    constructor () {
        // TODO: leer base de datos
    }

    async ciudad( lugar = "" ){

        // peticion http

        const res = await axios.get('https://reqres.in/api/users?page=2')
        console.log(res.data);

        return []; // retornar las ciudades
    }

}

module.exports = Busquedas;
