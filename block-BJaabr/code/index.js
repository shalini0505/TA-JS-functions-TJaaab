// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(num) {
      return num + 1;
    }

// - Write a Function Expression

const addOne = function add (num){
  return num + 1 ;
};

// - Write an Arrow Function without curly brackets(if possible)

const addOne = (num) => num + 1;

// - Write an Arrow Function with curly brackets

const addOne = (num) => {
  return num+1
}
// - Execute the function

addOne();

// - Execute the function and store the return value in a variable.

let num = addOne();
// - What is the typeof returnValue

typeof= Number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(numA, numB) {
  return numA - numB;
}
// - Write a Function Expression

const substractOne = function Subtract(numA, numB) {
  return numA - numB;
}

// - Write an Arrow Function without curly brackets(if possible)

const substractOne = (numA, numB) => numA - numB;

// - Write an Arrow Function with curly brackets

const substractOne = (numA, numB) => {
  return numA - numB;
}
// - Execute the function

substractOne();

// - Execute the function and store the return value in a variable.


function substractOne(numA , numB){
  return numA - numB;
}
substractOne();


// - What is the typeof returnValue

Number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(num1, num2) {
  return num1 + num2;
}
sum(10, 21);
// - Write a Function Expression

const sum = function (num1, num2) {
  return num1 + num2;
}
sum(10, 21);
// - Write an Arrow Function without curly brackets(if possible)

const sum = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets

const sum = (num1, num2) =>{
  return num1 + num2;
}
sum(10, 21);

// - Execute the function

sum(10, 21);

// - Execute the function and store the return value in a variable


function sum(numA , numB){
  return numA + numB;
}
sum();


// - What is the typeof returnValue

String

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration


function square(num1, num2) {
  return num1 * num2;
}

// - Write a Function Expression

const square = function (num1, num2) {
  return num1 * num2;
}

// - Write an Arrow Function without curly brackets(if possible)

const square = (num1, num2) => num1 * num2;

// - Write an Arrow Function with curly brackets

const square = (num1, num2) =>{
  return num1 * num2;
}


// - Execute the function

square(20);
square(12);

// - Execute the function and store the return value in a variable


function square(num1, num2) {
  return num1 * num2;
}
square(20);
square(12);

// - What is the typeof returnValue

Number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration


function isGreater(x,y){
  return x>y;
}

// - Write a Function Expression

const isGreater = function  (x,y){
  return x>y;
};

// - Write an Arrow Function without curly brackets(if possible)

const isGreater = num => x > y;

// - Write an Arrow Function with curly brackets

const isGreater = (x,y)=> {
    return x>y;
  };

// - Execute the function

isGreater()

// - Execute the function and store the return value in a variable

function isGreater(x,y){
  return x>y;
}
let no = isGreater();

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(num){
  if(num % 2 == 0){
    return  `${num} Number is even`;
  } else{
    return `${num} Number is odd`;
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function (num){
  if(num % 2 == 0){
    return  `${num} Number is even`
  } else{
    return `${num} Number is odd`
  }
}

// - Write an named Function Expression

function oddOrEven(num){
  if(num % 2 == 0){
    return  `${num}  Number is even`
  } else{
    return `${num}  Number is odd`
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

       
const oddOrEven = num => 
num % 2===0 ?`Number is even`:`Number is odd`

// - Write an Arrow Function with curly brackets


function oddOrEven(num){
  if(num % 2 === 0){
    return  `${num} Number is even `
  } else{
    return `${num}  Number is odd`
  }
}

// - Execute the function


oddOrEven()

// - Execute the function and store the return value in a variable


let oddNum = oddNumber();
    
// - What is the typeof returnValue
