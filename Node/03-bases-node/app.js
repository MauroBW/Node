const { array, boolean } = require('yargs');
const { crearArchivo } =  require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b' , {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    } )
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false
    })
    .argv;


console.clear();

console.log(argv);


console.log('base: yargs', argv.base); 







crearArchivo( argv.b , argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado.') )
    .catch( err => console.log(err));



//     // console.log(process.argv)

// // const [, , arg3 = 'base=5'] = process.argv;
// // const [, base = 5] = arg3.split('=');

// // const base = 5;