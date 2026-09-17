const express = require("express")
const connectDb = require("./config/database")
const User = require("./models/user")

const app = express()
app.use(express.json())


// Signup api
app.post("/signup", async(req, res)=>{

    // Creating a new instance of the User model
const user = new User(req.body)
try{
    await user.save()
    res.send("user saved successfully")
}catch(err){
    res.status(400).send("Error to saving the data" + err.message)
}
})

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
        const user = await User.findByIdAndUpdate({_id: id}, data, {strict: false})
        console.log(user)
        res.send("User data updated successfully")
    }catch(error){
        res.status(500).send("Something went wrong")
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
