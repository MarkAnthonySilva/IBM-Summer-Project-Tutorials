//To see output open index.html as a live server
// This is my First JavaSCript Code
console.log('Hello World');

//Variables
let name1 = 'Mark';
console.log(name1);
// Cannot be a reserved key word like let, if, var
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
let firstName1 = 'Mark';
let lastName1 = 'Hamedani';

//Constants
const interestRate = 0.3;
//interestRate = 1;     //Causes an error on the console in the html site
                        //Since interest rate is a constant
console.log(interestRate);

//Primitive/Value Types
let name2 = 'Mosh'; //String literal
let age2 = 30; //Number Literal
let isApproved2 = true; //Boolean Literal
let firstName2; //undefined
let lastName2 = null; //null

//Dynamic Typing
let name = 'Mosh'; //String literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName; //undefined
let lastName = null; //null
//Dynamic in the sense that the type of the variable can change during runtime
//Additionally numbers are not seperated into integers and floating points

//Reference Types (Objects)
let myName = 'Mosh';
let myAge = 30;
let person = {
    myName: 'Mosh',
    myAge: 30
}                       // Curly braces represent an object literal
//The top two variables are no longer necessary since they are stored in the object person
//Dot Notation
person.name = 'John';
//Bracket Notation (Allows for dynamic selection of variable stored in objects)
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

//Arrays
let selectedColors = ['red', 'blue']; //Array Literal
selectedColors[2] = 1; //Length is Dynamic and so is type
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//Functions
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
//Call function
greet('John', 'Smith');
greet('Mary'); //Second argument would be undefined

//Types of Functions
//Performing a Task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
//Calculating a value
function square(number){
    return number * number;
}
let number = square(2);
console.log(number);
console.log(square(3));

