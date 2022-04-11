const fs = require('fs')
const axios = require('axios');
class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor() {
        this.leerDB();
    }

    get paramsMapBox() {
        return {
            'access_token': `${process.env.MAPBOX_KEY}`,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    get historialCapitalizado() {
        // this.historial.forEach( elem => { // montevideo, uruguay
        //     const info = elem.split(" ");
        //     info.forEach( item => {
        //         item.charAt(0).toUpperCase() + item.slice(1)
        //     })
        //     console.log(info);
        // })
        // return this.historial;

        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.slice(1) )

            return palabras.join(' ')
        } )

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
                params: { ...this.paramsWeather, lat, lon }
            })

            const res = await instance.get();
            const data = res.data

            return {
                desc: data.weather[0].description,
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                feels_like: data.main.feels_like
            }


        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar = '') {

        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        }

        this.historial.unshift(lugar.toLocaleLowerCase());

        this.guardarDB();
    }

    guardarDB() {

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync( this.dbPath, JSON.stringify(payload) );

    }

    leerDB() {

        if( fs.existsSync( this.dbPath ) ){
            const info = fs.readFileSync( this.dbPath, 'utf-8');
            const data = JSON.parse(info);
            this.historial = data['historial']
        }

    }

}

module.exports = Busquedas;