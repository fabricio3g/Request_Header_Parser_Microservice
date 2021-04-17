const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors({
    optionsSuccessStatus:200
}))


app.get('/api/whoiam', (req, res)=>{    
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/View/index.html')
})



app.listen(3000)