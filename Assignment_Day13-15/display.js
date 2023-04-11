const {Client}=require('pg')
const client=new Client({
    user: "postgres",
    password: "1308",
    host: "localhost",
    port: 5432,
    database: "studentrecord"
})

const fetchUniqueUsers = async () => {
    try {
        await client.connect(); 
        const { rows } = await client.query('SELECT * from student');
        console.table(rows);
    } catch (error) {
        console.error(error.stack);
    } finally {
        await client.end();      
    }
};

fetchUniqueUsers();
