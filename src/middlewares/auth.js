const adminAuth = (req, res, next)=>{
    console.log("admin auth is getting checked")
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if(!isAdminAuthorized){
        res.status(401).send("Unthorized Access")
    }else{
        next()
    }
}

const userAuth = (req, res, next)=>{
    console.log("userAuth is getting checked")
    const token = "abc"
    const isUserAuthorized = token === "abc"
    if(!isUserAuthorized){
        res.status(401).send("User is not authenticated")
    }else{
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth,
}