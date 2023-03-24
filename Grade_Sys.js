/*3. Write a program which print grades for a student. It will accept student name and marks. Exampl, for input chandu and 90, it should print "Chandu has scored A+". Here is the grading scale for reference 
Grade        Marks
A+ 97-100
A   93-96
A-  90-92
B+ 87-89
B   83-86
B-  80-82
C+ 77-79
C   73-76
C-  70-72
D+ 67-69
D   65-66
E   65 and less
*/
// Program:-
const prompt=require("prompt-sync")();
function grade_sys(){
var correct_s = /^[A_Za-z]+$/;
var correct_n = /^[0-9]+$/;
let Name = prompt("Enter Your Name ");

if (Name.match(correct_s)) {
let marks = prompt("Enter the Marks");
  
  if (marks.match(correct_n)) {
     if (marks >= 97 && marks <= 100) {
      console.log(Name + " has scored A+")
    }
    else if (marks >= 93 && marks <= 96) {
      console.log(Name + " has scored A")
    }
    else if (marks >= 90 && marks <= 92) {
      console.log(Name + " has scored A-")
    }
    else if (marks >= 87 && marks <= 89) {
      console.log(Name + " has scored B+")
    }
    else if (marks >= 83 && marks <= 86) {
      console.log(Name + " has scored B")
    }
    else if (marks >= 80 && marks <= 82) {
      console.log(Name + " has scored B-")
    }
    else if (marks >= 77 && marks <= 79) {
      console.log(Name + " has scored C+")
    }
    else if (marks >= 73 && marks <= 76) {
      console.log(Name + " has scored C")
    }
    else if (marks >= 70 && marks <= 72) {
      console.log(Name + " has scored C-")
    }
    else if (marks >= 67 && marks <= 69) {
      console.log(Name + " has scored D+")
    }
    else if (marks >= 65 && marks <= 66) {
      console.log(Name + " has scored D")
    }
    else if (marks <= 65) {
      console.log(Name + " has scored E")
    }
  }
    else{
      console.log("Enter Positive Number only..");
    }
  } else {
  console.log("Enter Name only..")
}
}
grade_sys();
