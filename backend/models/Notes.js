const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    tag: {
        type: String,
        default: 'General'
    },

    date: {
        type: Date,
        default: Date.now
    }
})

const Notes = mongoose.model('notes', NotesSchema)
module.exports = Notes
