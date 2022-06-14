const http = require('http')
const server = http.createServer((req,res)=>{
    //req is the incomming request
    //res is the response of the server
    res.write('welcome to our home page')
    res.end()

})


server.listen(5000)