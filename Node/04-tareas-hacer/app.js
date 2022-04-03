require('colors');

const { guardarDB, leerDB } = require('./helpers/interaccionDB');
const { inquireMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquireMenu();
        
        switch ( opt ) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

        }

        guardarDB( tareas.listadoArr );

        await pausa()

    } while ( opt !== '0');

}

main();