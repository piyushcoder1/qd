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
      res.status(200).send(`Student Data Updated`)
    }
  )
