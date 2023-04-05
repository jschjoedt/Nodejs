const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi there, the action happens in the redirection url from AAD ;)')
})

app.get('/redirect', (req, res) => {
 // when redirected from AAD write request query code to screen 
 res.send(req.query.code)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * run: node index.js to test
 */