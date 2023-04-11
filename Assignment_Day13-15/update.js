const {Client}=require('pg')
const client=new Client({
    user: "postgres",
    password: "1308",
    host: "localhost",
    port: 5432,
    database: "studentrecord"
})
const updateUser = async (name, age, gender) => {
    const query = `UPDATE "student" 
                   SET "name" = $1, "age" = $2 
                   WHERE "gender" = $3`;
    try {
        await client.connect();
        await client.query(query, [name, age, gender]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();
    }
};

updateUser('shakti', '21', 'male').then(result => {
    if (result) {
        console.log('User updated');
    }
});
