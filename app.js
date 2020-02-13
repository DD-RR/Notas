// Clase Creando Archivos y escribiendo en ellos
// const fs = require('fs')

// //fs.writeFileSync('notas.txt', 'Mi creador es Diego Rodríguez. ')

// fs.appendFileSync('notas.txt', ' Fui creado en la Capacitación de NodeJS')

// Clase importanto nuestros Propios archivos, desde un archivo diferente.
//Aquí estan todos los archivos exportados.

const validator = require('validator')
const getNota = require('./Notas')


const msg = getNota ()
 
console.log(msg)
console.log(validator.isEmail('algo@algo.com'))
console.log(validator.isEmail('algo.com'))
console.log(validator.isEmail('algo@'))
console.log(validator.isURL('https://meat.io'))
console.log(validator.isURL('https/meat.io'))