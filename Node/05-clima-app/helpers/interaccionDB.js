const fs =  require('fs');

const archivo = './db/data.json'

const guardarDB = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if( !fs.existsSync(archivo) ){
        return null;
    }

    const data = JSON.parse(fs.readFileSync(archivo, 'utf8'));
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}