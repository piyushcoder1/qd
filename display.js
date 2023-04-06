// Write a program that handles a student table.
 //- display all the records  
// display
  async function displayAllStudents() {
    const query = 'SELECT * FROM students';
  
    try {
      const result = await client.query(query);
      console.log(result.rows);
    } catch (error) {
      console.error('Error displaying:', error);
    }
  }
  
  addStudent('ujjawal', 23, 'male');
  updateStudent(43, 21, 'male');
  displayAllStudents();
