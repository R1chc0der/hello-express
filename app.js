const express = require("express");

const appExpress = express()

const PORT = 5000;

const helloController = require("./controller/hello.controller");

appExpress.listen(PORT, () => {
    console.log(`I'm listening what will you have me do.... ${PORT}`)

})

const myPages = {
    home: "<h1>Hello, <b>Index Page</b>!</h1>",
    about: "<h1>Hello, <b>About Page</b>!</h1>",
    store: "<h1>Hello, <b>Store Page</b>!</h1>"
}

appExpress.get("/", (request, response) =>{
    response.send("Hello, Home");

})

 // first GET route
/* appExpress.get("/home", (request, response) =>{
    response.send("<h1>Hello, <b>Index Page</b>!</h1>");
    
})

// set up further GET routes
appExpress.get("/about", (request, response) =>{
    response.send("<h1>Hello, <b>About Page</b>!</h1>");

})
appExpress.get("/store", (request, response) =>{
    response.send("<h1>Hello, <b>Store Page</b>!</h1>");

}) */

/*  appExpress.get('/:key/:door', (request,response)=>{
    console.log(request.params)
  })
  */

  // Going further
appExpress.get("/:page", (request, response) =>{
    const { page } = request.params
    if (myPages[page]){
        response.send(myPages[page])
    } else{
        response.send(`<h1>Hello, <b>${page}</b></h1>`)
    }
}) 


//server.method('route', handlerFunction);
