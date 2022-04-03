/**
 *  _listado : 
 *          { uuid: {id, desc, completadoEn}}
 */

const Tarea = require('./tarea');


class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado) // Devuelve un arreglo de todas las llaves del objeto
            .forEach( (key) => {
                const tarea = this._listado[key]
                listado.push(tarea);
            })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( array ) {
        array.forEach( (element) => {
            let nuevaTarea = new Tarea(element.desc)
            nuevaTarea.setId = element.id;
            nuevaTarea.setCompletadoEn = element.completadoEn;
            this._listado[element.id] = nuevaTarea;
            // console.log(nuevaTarea);
        } )
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


}

module.exports = Tareas;