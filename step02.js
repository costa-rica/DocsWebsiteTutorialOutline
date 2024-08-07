const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("We up!")
})
app.listen(5001)

