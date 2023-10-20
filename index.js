const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Добавить заметку',
    handler(){
        console.log('Add command')
    }
})
yargs.parse();