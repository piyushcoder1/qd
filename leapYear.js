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
    console.log(nextYear + " is next leap year after "+ year);
    
}
const year=parseInt(prompt("Enter Year: "));
if(isLeapYear(year)==true){
  console.log("Leap Year");
}
else{
    nextLeapYear(year);
}
