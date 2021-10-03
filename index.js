let express = require('express')
let app = express()

//Middleware
//http://localhost:8089/index.html
//http://localhost:8089/hello.html
//app.use(express.static('public'))
//app.use("/", express.static('public'))

//Virtual Path
//http://localhost:8089/static/index.html
//http://localhost:8089/static/hello.html
app.use("/static", express.static('public'))


//http://localhost:8089/
app.get("/", (req, res) => {
    res.send("<h1>Hello Express Server<h1>")
})


//http://localhost:8089/hello
app.get("/hello", (req, res) =>{
    res.send("<h1>Hello, Pritesh<h1>")
})

//Use Postman tool
//http://localhost:8089/hello
app.post("/hello", (req, res) =>{
    res.send("<h1>Hello, POST<h1>")
})

//Use Postman tool
//http://localhost:8089/hello
app.delete("/hello", (req, res) =>{
    res.send("<h1>Hello, DELETE<h1>")
})

//Use Postman tool
//http://localhost:8089/hello
app.patch("/hello", (req, res) =>{
    res.send("<h1>Hello, PATCH<h1>")
})
//Query String Parameter
//http://localhost:8089/name?fnm=Pritesh&lnm=Patel&city=Toronto
//app.get("/name", (req,res) =>{
    //res.send(req.query)
//})

app.get("/name", (req,res) =>{
    let fnm = req.query.fnm
    let last_name = req.query["lnm"]
    let full_name = '${fnm}, ${last_name}'
    let city = req.query.city

    //Create JS object
    response = {
        status : "success",
        fnm,
        last_name,
        full_name,
        city
    }
    res.send(response)
})

//Route Path Parameter
//http://localhost:8089/name/Pritesh/Patel
app.get("/name/:fnm/:lnm/:city", (req,res) => {
    let fnm = req.params.fnm
    let last_name = req.params["lnm"]
    let full_name = '${fnm}, ${last_name}'
    let city = req.params.city
    //Create JS object
    response = {
        status : "success",
        fnm,
        last_name,
        full_name,
        city
    }
    res.send(response)
})


let server = app.listen(8089, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})


