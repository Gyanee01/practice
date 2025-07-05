require('dotenv').config()

console.log("learning with chai aur code backedend app.js");

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Gyandotcom')
})

app.get('/instagram', (req, res) => {
  res.send('<h1>please login at gyan dot com</h1>')
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})