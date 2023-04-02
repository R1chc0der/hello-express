const router = require("express").Router();



router.get("/", (request, response) =>{
    response.send("<h1>Hello, <b>Index Page</b>!</h2>");
    
})











module.exports = router;