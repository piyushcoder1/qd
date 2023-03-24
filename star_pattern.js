/* 2. Write a program which prints * sign in increasing number in each line. For example if the input is 5 then it should print following
    *
   **
  ***
 ****
*****  */
//Program:-
let n = 5;
    let string = "";
    for (let i = 1; i <=n; i++) {
      for (let j = i; j <=n; j++) {
        string += " ";
      }
      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
