const express = require("express")

// Creating a new express JS application
const app = express()

// This will handle the GET request to the /user route and send a JSON response with user information.
app.get("/user", (req, res)=>{
    res.send({
        "firstName": "zohaib",
        "lastName": "khan",
    })
})


// This will handle the only post http api call to /user route
app.post("/user", (req, res)=>{
    res.send("Data is saved successfully to db")
})


app.delete("/user", (req, res)=>{
    res.send("Deleted successfully")
})

// This will only handle the patch HTTP API call to /user route
app.patch("/user", (req, res)=>{
    res.send("This is the patch api")
})
// request handler /test
// If we use the app.use() method, it will be used for all the HTTP methods (GET, POST, PUT, DELETE, etc.) and for test  the routes.
app.use("/test",(req, res)=>{
    res.send("hello from test route" )
})

app.listen(9999, ()=>{
    console.log("server is running")
})