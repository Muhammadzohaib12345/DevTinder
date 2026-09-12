const express = require("express")

const { adminAuth, userAuth } = require("./middlewares/auth")

// Creating a new express JS application
const app = express()
// Middleware for all the HTTP methods POST, GET, PATCH .... request
app.use("/admin", adminAuth)
app.use("/user", userAuth)

app.get("/user/get", (req, res)=>{
    res.send("this is get call after the userAuth")
})
app.get("/admin/getAllData", (req, res)=>{
    res.send("All data is sent")
})
app.post("/admin/post", (req, res)=>{
        res.send("This is the post request for the admin")
})
app.delete("/admin/deleteData", (req, res)=>{
    res.send("you can delete the user's data")
})



app.listen(9999, ()=>{
    console.log("server is running")
})