const mongoose = require('mongoose')
const { string } = require('yargs')

const Schema = mongoose.Schema

const NoteScheme = new Schema({
   title: {
      type: String,
      required: true
   },
   owner: {
      type: String,
      required: true
   }
})

const Note = mongoose.model('Note', NoteScheme)

module.exports = Note
