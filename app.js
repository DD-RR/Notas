// Clase Creando Archivos y escribiendo en ellos
// const fs = require('fs')

// //fs.writeFileSync('notas.txt', 'Mi creador es Diego Rodríguez. ')

// fs.appendFileSync('notas.txt', ' Fui creado en la Capacitación de NodeJS')

//Aquí estan todos los archivos exportados.
const getNota = require('./Notas')

// Clase importanto nuestros Propios archivos, desde un archivo diferente.
    const msg = getNota ()
    
    console.log(msg)

// Clase de validaciones
    // const validator = require('validator')

    // console.log(validator.isEmail('algo@algo.com'))
    // console.log(validator.isEmail('algo.com'))
    // console.log(validator.isEmail('algo@'))
    // console.log(validator.isURL('https://meat.io'))
    // console.log(validator.isURL('https/meat.io'))

// Clase de colores en el texto 
    const chalk = require('chalk')

    console.log(chalk.green('Exito'))