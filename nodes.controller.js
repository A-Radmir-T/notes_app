const chalk = require('chalk')
const Note = require('./models/Notes')

async function addNote(title, owner) {
   await Note.create({ title, owner })

   console.log(chalk.bgGreen('Note was added!'))
}

async function removeNote(id, owner) {
   const result = await Note.deleteOne({ _id: id, owner })

   if (result.matchedCount === 0) {
      throw new Error('No note to deleted')
   }

   console.log(chalk.bgRed('The note has been deleted!'))
}

async function editNote(editedNote, owner) {
   const result = await Note.updateOne(
      { _id: editedNote.id, owner },
      { title: editedNote.title }
   )

   if (result.matchedCount === 0) {
      throw new Error('No note to edit')
   }
   console.log(chalk.bgBlue('The note has been edited!'))
}

async function getNotes() {
   const notes = await Note.find()

   return notes
}

module.exports = {
   addNote,
   removeNote,
   getNotes,
   editNote
}
