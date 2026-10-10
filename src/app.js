const express = require("express")
const connectDb = require("./config/database")
const User = require("./models/user")
const {signupDataValidation} = require("./utils/validators")
const bcrypt = require("bcrypt")

const app = express()
app.use(express.json())


// Signup api
app.post("/signup", async(req, res)=>{



try{
        // Validating the Data from incoming request
signupDataValidation(req)
    //  Encrypting a password
const {firstName, lastName, email, password} = req.body
const passwordHash =  await bcrypt.hash(password, 10)
// console.log(passwordHash)
        // Creating a new instance of the User model
const user = new User({
    firstName,
    lastName,
    email,
    password: passwordHash
})
    await user.save()
    res.send("user saved successfully")
}catch(err){
    res.status(400).send("Error:" + err.message)
}
})

// login api
app.post("/login", async(req, res)=>{
    try{
const { email, password } = req.body
if(!email || !password){
    return res.status(400).send("Email and password are required")
}
const user = await User.findOne({email})
if(!user){
    throw new Error("Invalid email or password")
}   
const isPasswordValid = await bcrypt.compare(password, user.password)
if(isPasswordValid){
    res.send("login Successfull")
}else{
    throw new Error("Invalid email or password")
}
     }catch(err){
    res.status(400).send("Error:" + err.message)
    }})

// Getting users by email
app.get("/user", async(req, res)=>{
try{
    const email = req.body.email
    const user = await User.find({email})
    if(user.length === 0){
res.status(404).send("User not found")
    }else{
        res.send(user)
    }
}catch(error){
res.send(400).send("Something went wrong")
}
})

// Delete user api
app.delete("/user", async(req, res)=>{
    try{
        const id = req.body.id
        const user = await User.findByIdAndDelete(id)
if(!user){
    res.status(404).send("User doesn't found by this id")
}else{
  res.send(
            "User deleted successfully"
        )
}  
    }catch(error){
if(error.name==="CastError"){
    res.status(404).send("User not found")
}else{
   res.status(500).send("something went wrong") 
}
    }
})

// Update User with id
app.patch("/user", async(req, res)=>{
    try{
        const id = req.body.id
        const data = req.body
        const Allowed_Updates = [
            "photoUrl", "firstName", "lastName"
        ]
        const isAllowedUpdates = Object.keys(data).every((k)=>Allowed_Updates.includes(k))
        if(!isAllowedUpdates){
            throw new Error("update is not allowed")
        }
        const user = await User.findByIdAndUpdate({_id: id}, data, {runValidators: true})
        console.log(user)
        res.send("User data updated successfully")
    }catch(error){
        res.status(400).send("Update failed " + error.message)
    }
})

// Getting the feed
app.get("/feed", async(req, res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }
    catch(error){
        res.status(400).send("something went wrong")
    }
})
connectDb() 
.then(()=>{
    console.log("connection established successfully")
    app.listen(9999, ()=>{
    console.log("server is running")
})
})
.catch(err =>{
    console.error("Can't connect to cluster")
})
