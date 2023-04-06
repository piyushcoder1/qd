const insertNew = (req, res) => {
  const { name, age, gender } = req.body

  pool.query('INSERT INTO students (name, age, gender) VALUES ($1, $2, $3)', [name, age, gender], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`New Student Added`)
  })
}
