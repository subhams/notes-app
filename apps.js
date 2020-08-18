const notes = require('./notes.js')
const yargs = require ('yargs')
const chalk = require ('chalk')
const { demandOption } = require('yargs')

//  const command = process.argv[2]
yargs.version('1.0.1')

//add, remove. readOut, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            descride: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
        // console.log('Title : '+  argv.title)
        // console.log('Body : '+ argv.body)
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder:{
        title: {
            describe: 'New title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List of Notes',
    handler: () => console.log(notes.listNotes())
})

// Reading notes
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv)=> notes.readNote(argv.title)
})

yargs.parse()
//console.log(yargs.argv)




 