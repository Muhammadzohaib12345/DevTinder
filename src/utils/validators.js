const validator = require("validator")

const signupDataValidation = (req) => {
    const {firstName, lastName, password, email} = req.body
    if(!firstName || !lastName ){
        throw new Error("Name is not Valid")
    }else if (!validator.isEmail(email)){
        throw new Error("Email is not vaid")
    }else if (!validator.isStrongPassword(password)){
        throw new Error("Password is not strong")
    }}

    module.exports = {
        signupDataValidation
    }