const persona = {
    nombre: 'Miguel',
    apellido: 'Romano',
    edad: 23,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
}

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;

const { nombre, apellido, edad } = persona; // Desestructuración de objetos