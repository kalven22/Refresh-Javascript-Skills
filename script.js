console.log("Hello Javascript with Rajesh!");

//var vs const vs let

//Notes:
//let vs var. It's all about scope. var variables are global and can be accessed basically everywhere, while let variables are not global and only exist until a closing parenthesis kills them.

var testVariable = 'Cool, I am a variable!, I can be changed unlike "const"'
console.log(testVariable)

const constant = "Cool. I am a constant!. I cannot be reassigned to another value"
console.log(constant)

//Try variable vs cont below
try {
    testVariable = 'Variable is re-assigned'
    console.log(testVariable)
    constant = 'Constant is re-assigned'
    console.log(constant)
} catch (error) {
    console.log(error)
}

//3 ways to pick varibale names
let $var = 'hello'
let _name = 'joker'
let first = 'Earth'

//string formatting - use backticks to evaluate any expression or to substitute varibales
const backticks = `I am ${first}. My name is ${10*2}`;
console.log(backticks)
console.log(typeof(backticks))

//null
let age = null
console.log(age)

function log(input){
    console.log(input)
}

//Create Objects // Doing the same thing in python will create a dictionary
const countryName = 'Canada'
const countryCapital = 'Toronto'

const country = {
    name: countryName,
    city: countryCapital
}
log(country)
log(country.city)  // dot notation to retrieve the property on objects
log(typeof(country))

//Arrays are also objects -- there are lists in python
let numbers = [1, 2, 3, 5]
log(numbers)
log(typeof numbers)


//Date
let date = new Date()
log(date)
log(typeof date)

//both javascript and python are dynamically typed languages
let count = 20
log(typeof count)
count ='twenty'
log(count)
log(typeof count)

//compare strings or compare operators
const a = 10
const b = 10
log(a == b)
log(a != b)

//Strict Equality vs Loose Equality
//=== is strict, == is loose
//=== compares both values and datatypes
//== compares only values and ignores datatypes

//AVOID USING == because it produces un-predictable outputs
//ALWAYS USE ===

//Strict Equality
log(a===b)
//Strict Equality
log(a !== b)

//Strict vs loose equality
log(5==5) 
log('Hello' == 'Hello') 
log(5===5) 
log('Hello' === 'Hello') 

//strict vs loose
log('strict vs loose equality')
log( 5==='5' ) //strict //compares both values and data types
log( 5=='5' ) //loose //compares only values

//if statement
if (10===11){
    log(true)
}
else if (10 === 2){
    log(true)
}
else{
    log(false)
}

//while condition
let i = 1
while(i<10){
    log(true);
    i++;
}

//for loop
for(let i = 10; i>1; i--){
    log(true)
}


// ------FUNCTIONS-------
//The only difference advantage between the below three kinds is:
//The 1st kind gives you access to "this" keyword.
function square(number){
    return number * number;
}
log(square(5))

//Different ways to write a function

// 1. Function declaration
//Example - using function keyword like above function square(num)
//Added advantage: Gives you access to "this" keyword.

//2. Function Expression
//set anonymous funcation to a variable
const multiply = function(num){
    return num * 2;
}
log(multiply(2))

//3. Arrow Function  //Most modern way to use
const isEven = (num) => {
    return num%2 === 0;
}
log(isEven(10))

//short hand form of above arrow function
const isOdd = (num) => num%2 !== 0
log(isOdd(3))
//u can also remove () around num since its only one parameter

//The only difference advantage between the above three kinds is:
//The 1st kind gives you access to "this" keyword.

//Every function is js return 'undefined' by default unless otherwise specified

