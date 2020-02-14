// Declaraciones de Node
const fs = require('fs')
const chalk = require('chalk')

// Inicio de Programa

const addNotas = (title, body ) => {
    const notas = loadNotas();
    const notaDuplicada = notas.find((nota) => nota.title === title)
    // debugger
    if (!notaDuplicada) {
        notas.push({
            title: title,
            body: body
        })
        // Comentario para que se suba todo a producción
        saveNotas(notas)
         console.log(chalk.bgGreen.inverse('Nota Agregada con éxito!!!'));
    } else {
        console.log(chalk.red.inverse('Nota ingresada con Anterioridad'));
    }
}

const removeNotas = (title) => {
    const notas = loadNotas()
    const notas1 = notas.filter((notas) => notas.title !== title)
    if (notas.length > notas1.length) {
        console.log(chalk.greenBright.inverse('¡Nota Eliminada con éxito!'));
        saveNotas(notas1)
    } else {
        console.log(chalk.bgRedBright.inverse('Nota no encontrada!'));
    }
}

const listNotas = () => {
    const notes = loadNotas()
    console.log(chalk.inverse('Sus notas son: '));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNota = (title) => {
    const notas = loadNotas()
    const note = notas.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Nota no encontrada!!!'));
    }
}

const saveNotas = (notas) => {
    const dataJson = JSON.stringify(notas)
    fs.writeFileSync('notas.json', dataJson)
}

const loadNotas = function () {
    try {
        const dataBuffer = fs.readFileSync('notas.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson) 
    } catch (error) {
        return []   
    }
}



module.exports = {
    addNotas: addNotas,
    removeNotas: removeNotas,
    listNotas: listNotas,
    readNota: readNota
}