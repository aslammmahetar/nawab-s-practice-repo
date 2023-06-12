const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String
}, {
    versionKey: false
})

const UserModel = mongoose.model("my_user", userSchema)

module.exports = { UserModel }