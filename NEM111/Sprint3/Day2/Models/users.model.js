const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    location: String,
    hobbies: Array,
    is_adult: Boolean
}, {
    versionKey: false
})

const UserModel = mongoose.model("prac_userDb", userSchema)

module.exports = { UserModel }