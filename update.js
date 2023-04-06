// Write a program that handles a student table. 
// - accept student name or roll numbder and update date for that student
  // update
  async function updateStudent(roll_number, age, gender) {
    const query = 'UPDATE students SET age = $1, gender = $2 WHERE roll_number = $3';
    const values = [age, gender, roll_number];
  
    try {
      const result = await client.query(query, values);
      console.log(`${result.rowCount} student record(s) updated`);
    } catch (error) {
      console.error('Error updating:', error);
    }
  }
