// Write a program that handles a student table. 
 // - accept student name, age and gender as input and save it in database 

async function addStudent(name, age, gender) {
    const query = 'INSERT INTO students (name, age, gender) VALUES ($1, $2, $3)';
    const values = [name, age, gender];
  
    try {
      await client.query(query, values);
      console.log('New student inserted');
    } catch (error) {
      console.error('Error inserting:', error);
    }
  }
