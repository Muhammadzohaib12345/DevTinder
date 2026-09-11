const express = require("express")

// Creating a new express JS application
const app = express()

// request handler /hello
app.use("/hello", (req, res)=>{
    res.send("hello, choot leylo")
})


// request handler /test
app.use("/test",(req, res)=>{
    res.send(
        "hello from zohiab backend developer"
    )
})

app.listen(9999, ()=>{
    console.log("server is running")
})