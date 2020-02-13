// Clase Creando Archivos y escribiendo en ellos
// const fs = require('fs')

// //fs.writeFileSync('notas.txt', 'Mi creador es Diego Rodríguez. ')

// fs.appendFileSync('notas.txt', ' Fui creado en la Capacitación de NodeJS')

// Clase importanto nuestros Propios archivos, desde un archivo diferente.
//Aquí estan todos los archivos exportados.
const getNota = require('./Notas')


const msg = getNota ()
 
console.log(msg)