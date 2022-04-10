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


                // Clima

                // Mostrar resultados

                const selectedPlace = lugares.find( l => l.id === id );
                // console.log(selectedPlace);

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', selectedPlace.nombre);
                console.log('Lat:', selectedPlace.lat);
                console.log('Lng:', selectedPlace.lng);
                console.log('Temperatura:');
                console.log('Mínima:');
                console.log('Máxima:');
                break;
                
            case '2':
                
                break;
        }
        if(opt !== '0') await pausa();


    } while ( opt !== '0');
}

main();