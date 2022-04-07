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

    borrarTarea( id = "" ) {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( array ) {
        array.forEach( ( elem ) => {
            this._listado[elem.id] = elem;
        } )
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log('');

        let numTarea = 1;
        Object.keys(this._listado).forEach( idTarea => {
            let currentTarea = this._listado[idTarea];
            let estado;
            if (currentTarea.completadoEn !== null){
                estado = 'COMPLETADA'.green;
            }else{
                estado = 'PENDIENTE'.red;
            }
            console.log(`${numTarea}.`.green, `${currentTarea.desc} :: ${estado}`);
            numTarea++;
        });
        
    }

    imprimir(array) {
        console.log('');

        array.forEach( (tarea, index) => {
            const completado = ( tarea.completadoEn )
            ? 'Completada'.green
            : 'Pendiente'.red
            
            console.log(`${index + 1}.`.green + ` ${tarea.desc} :: ${completado}`);
        });
    }

    listarPendientesCompletadas( expectedStatus ){
        const resultante = [];
        
        this.listadoArr.forEach( ( tarea )  => { 
            switch (expectedStatus) {
                case true:
                    if(tarea.completadoEn) resultante.push(tarea)
                    break;
            
                case false:
                    if(!tarea.completadoEn) resultante.push(tarea)
                    break;
            }
        });
        this.imprimir(resultante);
    }

    cambiarEstadoTareas( ids = [] ) {
        ids.forEach( id => {
            if(! this._listado[id].completadoEn ){
                console.log(this._listado[id]);
                this._listado[id].completadoEn = 'Completado';
            }
        } )
    }


}

module.exports = Tareas;