const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const userScheme = new Schema({
    firstName: {
        type : String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    Gender:{
        type: String
    }
})

const User = mongoose.model("User", userScheme)
module.exports = User