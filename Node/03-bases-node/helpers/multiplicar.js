
const fs = require('fs');
const { normalize } = require('path');


const crearArchivo = async( base, listar ) => {
    let nombreArchivo = `tabla-${ base }.txt`
    
    try {
        console.log('==============');
        console.log(`Tabla del: ${base}`);
        console.log('==============');

        let salida = '';
        for(let i = 1; i <= 10; i ++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        
        if (listar) {
            console.log( salida );
        }
        
        fs.writeFile( nombreArchivo, salida, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } catch (error) {
        throw error
    }

    // ( nombreArchivo )
    //     ? resolve( nombreArchivo )
    //     : reject(`ATENCION: No se pudo escribir el archivo.`)

    return ( nombreArchivo )
    
}

module.exports = {
    crearArchivo
}
