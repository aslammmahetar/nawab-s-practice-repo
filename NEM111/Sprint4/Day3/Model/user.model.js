const mongoose = require("mongoose")

const userShcema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userShcema)

module.exports = { UserModel }