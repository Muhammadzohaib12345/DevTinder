const express = require("express")
const connectDb = require("./config/database")
const User = require("./models/user")

const app = express()
app.use(express.json())

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

connectDb() 
.then(()=>{
    console.log("connection established successfully")
    app.listen(9999, ()=>{
    console.log("server is running")
})
})
.catch(err =>{
    console.error("connection established to cluster is not")
})
