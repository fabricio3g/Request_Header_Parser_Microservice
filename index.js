const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}))
app.enable('trust proxy', true)

app.get('/api/whoami', (req, res)=>{    
    
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/View/index.html')
})



app.listen(process.env.PORT || 3000)