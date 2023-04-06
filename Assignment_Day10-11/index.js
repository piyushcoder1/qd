const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Postgres API' })
})

app.get('/users', db.displayNew)
app.post('/users', db.insertNew)
app.put('/users/:id', db.updateNew)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
