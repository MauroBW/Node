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
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar Tarea`
            },{
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
            name: `${ idx }. ${ tarea.desc }`
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

    console.log(choices);

    const { id } = await inquirer.prompt(preguntas);
    return id;


    // const { opcion } = await inquirer.prompt(preguntas);
    // return opcion

    // {
    //     value: '1',
    //     name: `${'1.'.green} Crear tarea`
    // },

} 


module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoOpcionesBorrar
}