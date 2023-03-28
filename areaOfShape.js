//2. Create a function which calculates area of given shape. The only shape it should support is circle, triangle, square and rectangle
const prompt=require("prompt-sync")();

function areashape(shape){
    let triangle;
    let circle;
    let rectangle;
    let square;
    if(shape=="triangle"){
        let base=prompt("Enter base: ");
        let height=prompt("Enter height: ");
        let area=1/2*base*height;
        console.log("The area of triangle: "+area);}
 else if(shape=="circle"){
        let radius=prompt("Enter Radius:  ");
        const area=3.14*radius*radius;
        console.log("The area of the circle: "+area);}

    else if(shape=="square"){
        let side=prompt("Enter side of square: ");
        const area=side*side;
        console.log("The area of square: "+area);}

    else if(shape=="rectangle"){
        let length=prompt("Enter Length: ");
        let breadth=prompt("Enter breadth: ");
        let area=length*breadth;
        console.log("The area of rectangle: "+area);

    }else{
        console.log("Choose one of the given shape which are as follow circle,triangle,square,rectangle to find their area.");
    }

}
let shape=prompt("Enter shape: ");
areashape(shape);
