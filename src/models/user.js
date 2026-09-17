const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const userScheme = new Schema({
    firstName: {
        type : String,
        required: true, 
        minLength: 4, 
        maxLength: 20, 
        trim: true
    },
    lastName: {
        type: String, 
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value){
if(!value>=18){
    throw new Error("You're under age")
}
        },
        max: 70
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    gender:{
        type: String, 
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    skills: {
        type: [String,],
        trim: true
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userScheme)
module.exports = User