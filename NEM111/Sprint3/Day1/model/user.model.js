const mongoose = require("mongoose")
//schema
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    isMarried: Boolean,
    followers: Number
}, {
    versionKey: false
})

//model                      //collection_name  
const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel }