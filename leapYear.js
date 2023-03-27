//4. Write a function which accepts a number as input and then tells if the number is a leap year or not.
//In case the number is not leap year then it finds the closest leap year to given number. Example, if
//input is 2015 then it should print, "2015 is not a leap year. After 2015 2016 is next leap year."

const prompt=require("prompt-sync")();
function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }
}
function nextLeapYear(year){
    let nextYear=year+1;
    while(!isLeapYear(nextYear)){
     nextYear++;
    }
    console.log(year+" is not a leap year. After "+year+ nextYear+" is next leap year");
    //nsole.log(nextYear + " is next leap year after "+ year);
    
}
const year=parseInt(prompt("Enter Year: "));
if(isLeapYear(year)==true){
  console.log("Leap Year");
}
else{
    nextLeapYear(year);
}
