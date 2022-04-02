const argv = require('yargs')
    .option('b' , {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a calcular'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Opcion para listar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla a calcular'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    } )
    .check ( ( argv, options) => {
        if ( isNaN(argv.h) ){
            throw 'El limite de la tabla debe ser un numero';
        }
        return true;
    } )
    .argv;

module.exports = argv;