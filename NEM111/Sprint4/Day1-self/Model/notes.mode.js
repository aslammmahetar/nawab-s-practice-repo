const mongoose = require("mongoose")
const notesSchema = mongoose.Schema({
    title: String,
    body: String,
    category: String,
    userID: String,
    userName: String
}, {
    versionKey: false
})

const NotesModel = mongoose.model("my_note", notesSchema)

module.exports = { NotesModel }
