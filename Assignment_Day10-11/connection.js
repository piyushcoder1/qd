const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'student',
  password: '1308',
  port: 5432,
})

module.exports = {
  displayNew,
  insertNew,
  updateNew,
}
