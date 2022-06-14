const os = require('os')
//info abour current user 

console.log(os.userInfo())

//return the system uptime in second 


console.log(`the system uptime is ${os.uptime()}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()
}

console.log(currentOS)