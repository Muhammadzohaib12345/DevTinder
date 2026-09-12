EP 17: Routing and Request handlera

                              (Advanced Routing techniques) 
 use of grouping optional (se)?
 app.get(/u(se)?r/, (req, res)=>{
     res.send("In this case the se is optional you can write the ur, user")
 })

 use of (se)+
 app.get(/u(se)+r/, (req, res)=>{
     res.send("In this case you can add the se as much as you can, useseseseseser, but you can write the s and e sinlgely")
 })

 TO read the user id
 app.get(/user/, (req, res)=>{
     console.log(req.query)
     res.send("This can get the user id")
 })

 dynamic routing
app.get("/user/:userid/:username", (req, res)=>{
    console.log(req.params)
    res.send("user data is recevied")
})
 use of ?
 app.get(/use?r/, (req, res)=>{
     res.send("In this route the e is optional. So this can be used for user and also usr")
 })

 use of * 
 app.get(/us.*er/, (req, res)=>{
     res.send("In this case you can add what you want between the us and er. In this case, the request URL should start from us and end with er")
 })

 use of +
 app.get(/use+r/, (req, res)=>{
     res.send("In this case you can add the e as much as you want")
 })


 This will handle the GET request to the /user route and send a JSON response with user information.
 app.get("/user", (req, res)=>{
     res.send({
        "firstName": "zohaib",
      "lastName": "khan",
     })
 })

 This will handle the only post http api call to /user route
 app.post("/user", (req, res)=>{
     res.send("Data is saved successfully to db")
 })


 app.delete("/user", (req, res)=>{
     res.send("Deleted successfully")
 })

 This will only handle the patch HTTP API call to /user route
 app.patch("/user", (req, res)=>{
     res.send("This is the patch api")
 })
 request handler /test
 If we use the app.use() method, it will be used for all the HTTP methods (GET, POST, PUT, DELETE, etc.) and for test  the routes.



 app.use("/test",(req, res)=>{
     res.send("hello from test route" )
 })



                            EP 18: Middleware & Error Handlers
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