//first NodeJS app

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello Virtual Machine!')
})

app.listen(port, () => {
    console.log('Express Application listening at port 3000')
})