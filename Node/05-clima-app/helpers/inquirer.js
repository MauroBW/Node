const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: '2',
                name: `${'2.'.green} Historial`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }

        ]
    }
]


const inquireMenu = async() => {

    console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una opcion'.white);
    console.log('================================\n'.green);


    const { opcion } = await inquirer.prompt(preguntas);
    return opcion

}

const pausa = async () => {

    const question = [{
        type: 'input',
        name: 'confirmacion',
        message: `Presione ${'ENTER'.green} para continuar`
    }];

    console.log('\n');
    await inquirer.prompt(question);
}


const leerInput = async ( message ) => {

    const question = [{
        type:'input',
        name: 'desc',
        message,
        validate( value ){
            if( value.length === 0 ){
                return 'Por favor ingrese una descripcion.'
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc
}

const listadoOpcionesBorrar = async ( tareas  = []) => {

    const choices = tareas.map( (tarea, i) => {
        const idx =  `${i + 1}.`.green;
        return {
                value: tarea.id,
                name: `${ idx } ${ tarea.desc }`
            }
    });
    
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    
    // console.log(choices);

    const { id } = await inquirer.prompt(preguntas);
    return id;
} 

const confirmarBorrado = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async ( tareas  = []) => {

    const choices = tareas.map( (tarea, i) => {
        const idx =  `${i + 1}.`.green;
        return {
                value: tarea.id,
                name: `${ idx } ${ tarea.desc }`,
                checked: ( tarea.completadoEn ) ? true : false
            }
    });
    
    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    
    // console.log(choices);

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}

const listarLugares = async ( lugares  = []) => {

    const choices = lugares.map( (lugar, i) => {
        const idx =  `${i + 1}.`.green;
        return {
                value: lugar.id,
                name: `${ idx } ${ lugar.nombre }`
            }
    });
    
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccionar ciudad',
            choices
        }
    ]
    
    // console.log(choices);

    const { id } = await inquirer.prompt(preguntas);
    return id;
} 



module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoOpcionesBorrar,
    confirmarBorrado,
    mostrarListadoChecklist,
    listarLugares
}