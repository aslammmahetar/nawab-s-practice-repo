const mongoose = require("mongoose")

const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_1stClass")
        console.log("Connected")
        // await UserModel.insertMany([{ name: "asad", city: "AHmedabad", age: 13 }, { name: "shagruf", city: "dhasa", age: 32 }])
        const newuser = new UserModel({
            name: "cartoon2",
            city: "Dhasa",
            age: 12
        })
        await newuser.save()
        const users = await UserModel.find()
        console.log(users)
        console.log("Users added")
        // console.log("Disconnected")
        // connection.disconnect()
    } catch (error) {
        console.log(error)
    }
}
main()

//schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true }
}, {
    versionKey: false
})

//model
const UserModel = mongoose.model("user", userSchema)

//

function Person(name, age) {
    this.name = name
    this.age = age
}

const person1 = new Person("Aslam", "20")
const person2 = new Person("Nawab", "unlimited")
// console.log(person2)