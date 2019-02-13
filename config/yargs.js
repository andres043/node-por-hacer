/**
 * 
 */

let descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

let completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actuaiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}