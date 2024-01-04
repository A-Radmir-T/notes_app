const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const UserScheme = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
      validate: {
         validator: validator.isEmail,
         message: 'Invalid email'
      }
   },
   password: {
      type: String,
      required: true
   }
})

const User = mongoose.model('User', UserScheme)

module.exports = User
