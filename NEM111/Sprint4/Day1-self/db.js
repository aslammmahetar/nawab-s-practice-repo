const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://nawabpvt:aslam@cluster0.3n09h5y.mongodb.net/my_notes_app?retryWrites=true&w=majority")

module.exports = { connection }