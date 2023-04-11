const {Client}=require('pg')
const client=new Client({
    user: "postgres",
    password: "1308",
    host: "localhost",
    port: 5432,
    database: "studentrecord"
})
const insertUser = async (name,age,gender) => {
  try {
      await client.connect();
      await client.query(
          `INSERT INTO "student" ("name", "age", "gender")  
           VALUES ($1, $2, $3)`, [name, age, gender]);
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  } finally {
      await client.end();
  }
};

insertUser('piyush',20,'male').then(result => {
  if (result) {
      console.log('User inserted');
  }
});
