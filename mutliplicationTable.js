/* Write a program that takes a number as an input and create a file with multiplacation table. For example, if the input is 5, it creates a file named table-5.txt with following content
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
...
5 x 10 = 50 */
const fs = require('fs');

const number = process.argv[2];

if (!number || isNaN(number)) {
  console.error('Please enter a valid number as input');
  process.exit(1);
}

const filename = `table-${number}.txt`;

let table = '';

for (let i = 1; i <= 10; i++) {
  table += `${number} x ${i} = ${number * i}\n`;
}

fs.writeFile(filename, table, (err) => {
  if (err) {
    console.error(`Error creating file: ${err}`);
    process.exit(1);
  }
  console.log(`File ${filename} created successfully`);
});
