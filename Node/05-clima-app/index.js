require('dotenv').config();
const { leerInput, inquireMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

console.log();


const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt  = await inquireMenu();

        

        switch (opt) {
            case '1':
                // Mostrar mensjae
                const lugar = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(lugar);
                const id = await listarLugares(lugares);
                const selectedPlace = lugares.find( l => l.id === id );
                busquedas.agregarHistorial(selectedPlace.nombre);

                const clima = await busquedas.climaLugar(selectedPlace.lat, selectedPlace.lng);


                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', selectedPlace.nombre.green);
                console.log('Lat:', selectedPlace.lat);
                console.log('Lng:', selectedPlace.lng);
                console.log('Temperatura:',clima.temp);
                console.log('Mínima:', clima.temp_min);
                console.log('Máxima:', clima.temp_max);
                console.log('Pronóstico:', clima.desc.green);
                console.log('Sensasión térmica:', clima.feels_like);
                break;
                
            case '2':
                busquedas.historialCapitalizado.forEach( ( lugar, i ) => {
                    const idx = `${i + 1}.`.green;
                    console.log(idx, lugar);
                } )
                break;
        }
        if(opt !== '0') await pausa();


    } while ( opt !== '0');
}

main();