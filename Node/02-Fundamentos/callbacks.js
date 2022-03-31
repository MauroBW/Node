const getUserById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario);
    },1500)
}

getUserById(1702 , (usuario) => {
    console.log(`Id: ${usuario.id}`);
    console.log(usuario.nombre.toUpperCase())
})
