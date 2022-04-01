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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e  => e.id === id );
    
    if(empleado) {
        /* 
        El null significa que no hay ningún error en la ejecución, es para 
        mandarselo al callback y que no ejecute el err como si fura un objeto empleado.
        */ 
        callback(null, empleado); 
    } else {
        callback(`Empleado con id: ${id} no existe`);
    }

}

getEmpleado(2 , (err, empleado) => {
    if ( err ){
        console.log('Error!!\n');
        return console.log( err );
    }
    
    console.log('Empleado existe!')
    console.log(empleado)
})

const getSalario = ( id, callback ) => {
    const salario = salarios.find( s => s.id === id)

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id -> ${id} no existe!`)
    }

}

getSalario(2, (err, salario) => {
    if(err) {
        console.log('Error!!\n')
        return console.log(err)
    }

    console.log('Salario Existe!')
    console.log(salario)
})


