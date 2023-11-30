const mongoose = require('mongoose');


//Create a person with this prototype:


const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
      },
      
})

module.exports = mongoose.model('User', UserSchema);