const fs = require('fs');
const path = require('path');

const notePath = path.join(__dirname, 'note.json'); // получаем доступ до файла

const addNote = (title, text) => {
    //console.log((`${title} `) + (` ${text}`));
    getNote((note)=>{
        console.log('addNote', note)
        const dublicateNote = note.find(noteEtem =>noteEtem.title === title) // проверка на дубликат
        if (dublicateNote) {
            console.log('Заметка существует')
        } else {
            note.push({title, text})
            saveNote(note);
            console.log('Заметка добавлена')
        }
    })
}

const getNote = (callback) => {
    fs.readFile(notePath, 'utf-8', (error, content)=>{
        if (error) {
            throw new Error(error)
        }
        try {
            callback(JSON.parse(content)) 
        } catch (error) {
            callback([]) 
        }
        //console.log(content)
    })
}

const saveNote = (content) => {
    fs.writeFile(notePath, JSON.stringify(content), err => {
        if (err) {
            throw new Error(err)
        }
    } )
}

module.exports = {
    addNote
}