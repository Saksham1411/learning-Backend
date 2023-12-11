const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    content:{
        type:String,
        required:true,
        minLength:4,
    }
})

module.exports = mongoose.model("Note",NoteSchema);