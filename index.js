const yargs = require('yargs');
const notes = require('./notes')
yargs.command({
    command: 'add',
    describe: 'Добавить заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Name title',
        },
        text: {
            type: 'string',
            demandOption: true,
            describe: 'Content',
        },
    },
    handler({title, text}){
        notes.addNote(title, text)
    }
})

yargs.command({
    command: 'list',
    describe: 'Показать список заметок',
    
    handler(){
       notes.listNote()
    }
})
yargs.parse();