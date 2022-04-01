const empleados = [
    {
        id: 1,
        nombre: 'Mauro',
        profesion: 'Desarrollador'
    },
    {
        id: 2,
        nombre: 'Erika',
        profesion: 'Ingeniera Civil'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = ( id ) => {
    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e  => e.id === id )?.nombre;
    
        if(empleado) {
            resolve( empleado ); 
        } else {
            reject( `Empleado con id: ${id} no existe` );
        }       
    });
}


const getSalario = ( id ) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( s => s.id === id)?.salario;

        // if ( salario ) {
        //     resolve( salario )
        // } else {
        //     reject(`No existe un salario asociado a la id: ${id}`)
        // }

        ( salario )
            ? resolve( salario )
            : reject( `No existe un salario asociado a la id: ${id}` );
    })
}

const id = 3;
// getEmpleado(id)
// .then(empleado => console.log( empleado )) // Trabaja con el resolve
// .catch(err => console.log( err )); // Trabaja con el reject


// getSalario(id)
//     .then(salario => console.log( salario ))
//     .catch(err => console.log( err ));


let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => {
        console.log(`El empleado: ${nombre} tiene un salario de: $${salario}`);
    })
    .catch( err => console.log(err))