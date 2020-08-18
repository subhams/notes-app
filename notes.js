const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.blue.inverse('Your Notes'))
     const notes = loadNotes()
     notes.forEach((note) => {
            console.log(note.title)
     })
    }

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',dataJSON)
}

const addNote = (title,body) => {
    const notes= loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)
    
    if(!duplicateNote){
           notes.push({
                title : title,
                body : body
            })
            console.log(chalk.green.inverse("New note added..!!"))
            saveNotes(notes)
    }
            else {
                console.log(chalk.red.inverse("Note title already exists..!!"))
        }
        
    }

const removeNote = (title) => {
    const notes = loadNotes()
    console.log(chalk.green.bold.bgRed("Note to be removed : " + title))
    const notesToKeep = notes.filter((note) => note.title !== title)
    notes.length !== notesToKeep.length? console.log(chalk.bgGreen('Note Removed')):  console.log(chalk.bgRed('No Note Removed'))
    saveNotes(notesToKeep)
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.grey.inverse('Title: '+note.title))
        console.log(chalk.magenta.inverse('Body: '+note.body))
    }
    else{
        console.log(chalk.red.inverse('Note not found..!!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}