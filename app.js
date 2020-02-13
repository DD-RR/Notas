/*
    
    NOTA IMPORTANTE: Cada que se inicia un nuevo proyecto se tiene que exportar el const variable = require ('variable') para 
    poder usar los nuevo s modulos de NodeJS
*/


// Clase Creando Archivos y escribiendo en ellos
// const fs = require('fs')

// //fs.writeFileSync('notas.txt', 'Mi creador es Diego Rodríguez. ')

// fs.appendFileSync('notas.txt', ' Fui creado en la Capacitación de NodeJS')

//Aquí estan todos los archivos exportados.
// const getNota = require('./Notas')

// Clase importanto nuestros Propios archivos, desde un archivo diferente.
//     const msg = getNota ()
    
//     console.log(msg)

// Clase de validaciones
    // const validator = require('validator')

    // console.log(validator.isEmail('algo@algo.com'))
    // console.log(validator.isEmail('algo.com'))
    // console.log(validator.isEmail('algo@'))
    // console.log(validator.isURL('https://meat.io'))
    // console.log(validator.isURL('https/meat.io'))

// Clase de colores en el texto 
    // const chalk = require('chalk')

    // console.log(chalk.green('Exito'))

// Modulos Globales de npm
// Intsalación de nodemon 

// Inicio de la Aplicación de notas

const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./Notas')

// Configurando Manualmente la versión
yargs.version('1.1.0')

//Notas Agregar, Eliminar, leer, enumerar 

// Creando el comando aggregar

yargs.command({
    command: 'add',
    describe: 'Agregando una nueva Nota',
    builder: {
        title: {
            describe: 'Titulo Nota',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: 'Cuerpo de la Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
         console.log('Titulo: ', argv.title);
         console.log('Cuerpo de la nota: ', argv.body);
    }
})


// Creando el Comando remover

yargs.command({
    command: 'remove',
    describe: 'Eliminando Notas',
    handler: function () {
        console.log('Eliminando Notas');
    }
})

// Creando leer las notas

yargs.command({
    command: 'read',
    describe: 'Leyendo las notas',
    handler: function () {
        console.log('Leyendo notas')
    }
})

// Listando Notas

yargs.command({
    command: 'list',
    describe: 'Listando las notas',
    handler: function () {
        console.log('Listando todas las notas')
    }
})

yargs.parse()

// console.log(yargs.argv)