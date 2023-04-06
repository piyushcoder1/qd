const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'student',
  password: '1308',
  port: 5432,
})
const displayNew = (req, res) => {
  pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}


const insertNew = (req, res) => {
  const { name, age, gender } = req.body

  pool.query('INSERT INTO students (name, age, gender) VALUES ($1, $2, $3)', [name, age, gender], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`New Student Added: ${results.insertId}`)
  })
}

const updateNew = (req, res) => {
  const id = parseInt(req.params.id)
  const { date ,name} = req.body

  pool.query(
    'UPDATE students SET date = $6, WHERE id=$1 name = $2',
    [date, name,id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Student Data Updated: ${id}`)
    }
  )
}

module.exports = {
  displayNew,
  insertNew,
  updateNew,
}
