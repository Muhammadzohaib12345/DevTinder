const express = require("express")

// Creating a new express JS application
const app = express()


app.use("/user", [
    // If there is no response is present in Route 1
// (req, res, next)=>{
//     console.log("handling the route user!!")
//     next()  
// }, 
// (req, res)=>{
// console.log("handling the route user 2!!")
// res.send("2nd reponse")
// },

// If there is both response is present
// (req, res, next)=>{
//     console.log("handling the route user!!")
//     // if we call the next first
//     next()
//     res.send("1st response")
//     // next()  
// }, 
// (req, res)=>{
// console.log("handling the route user 2!!")
// res.send("2nd reponse")
// },


// if there are multiple route handler
(req, res, next)=>{
    console.log("handling the route user 1!!")
    // No response
    next()
},
(req, res, next)=>{
    console.log("handling the route user 2!!")
    // No response
    next()
},
(res, req, next)=>{
    console.log("handling route user 3!!")
    // No response
    next()
}, 
(req, res, next)=>{
    console.log("handling route user 4!!")
    // No response
    next()
},
(req, res, next)=>{
    console.log("handling route user 5!!")
    res.send("response 5!!")
    next()
}]
)


app.listen(9999, ()=>{
    console.log("server is running")
})