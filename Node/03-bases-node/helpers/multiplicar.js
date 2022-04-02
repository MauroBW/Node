
const fs = require( 'fs' );
const colors = require( 'colors') 


const crearArchivo = async( base, listar, limite ) => {
    let nombreArchivo = `tabla-${ base }-hasta-${ limite }.txt`
    
    try {
        console.log(('============================').green);
        console.log('   Tabla del:' + ` ${base}`.cyan.italic + ` hasta: ${ limite }`);
        console.log('============================'.green);

        let salida = '';
        let consola = '';

        for(let i = 1; i <= limite; i ++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.red} ${ i } = ${ base * i }\n`;
        }

        if (listar) {
            console.log( consola );
        }
        
        fs.writeFile( `./salida/${ nombreArchivo }`, salida, (err) => {
            if (err) throw err;
            console.log('The file has been saved!'.yellow);
        });
    } catch (error) {
        throw error
    }

    return ( nombreArchivo )
    
}

module.exports = {
    crearArchivo
}
