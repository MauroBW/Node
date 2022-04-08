const { leerInput, inquireMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");




console.log('Hola mundo'.green);


const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt  = await inquireMenu();

        

        switch (opt) {
            case '1':
                // Mostrar mensjae
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
                // Buscar lugar

                // Seleccionar lugar

                // Clima

                // Mostrar resultados

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:');
                console.log('Lat:' );
                console.log('Lng:');
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