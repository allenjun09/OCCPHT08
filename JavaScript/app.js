console.log("Hello PHT08!");
// Single line comment
/* 
  Multi Line
  Comment  
*/
//Ways on declaring variables
let UPPERCASE = "THIS IS AN UPPERCASE";
const lowercase = "lowercase";
var name = "Tristan";
console.log(UPPERCASE);
console.log(lowercase);
UPPERCASE = "Change";
console.log(UPPERCASE);
console.log(name);

//Basic Syntax
let name = "Emmanuel";
const age = 21;
let isStudent = true;
console.log("My name is", name);
console.log("Age:" + age);
console.log("Is", name, "a student?", isStudent);
let addA = 5;
let addB = 10;
const sum = addA + addB;
console.log("The sum of", addA, "+", addB, "=", sum);
let diffA = 20;
let diffB = 10;
const difference = diffA - diffB;
console.log("The difference of", diffA, "-", diffB, "=", difference);
let productA = 15;
let productB = 10;
const product = productA * productB;
console.log("The product of", productA, "*", productB, "=", product);
let quotientA = 15;
let quotientB = 3;
console.log("The Quotient of", quotientA, "/", quotientB, "=", quotientA/quotientB);

// ==== Javascript Expression ====
// Arithmetic Expression
// String Expressions
// Logical Expressions
// Assignment Expression
// Function Call Expression
let sunny = true;
let cold = false;
console.log("Sunny && Cold", sunny && cold);
console.log("Sunny && Cold", sunny || cold)
console.log("!cold", !cold)
let aNumber = 20;
let b = 10;
aNumber += b;
console.log("aNumber:", aNumber);
aNumber -= b;
console.log("aNumber:", aNumber);
aNumber *= b;
console.log("aNumber:", aNumber);
aNumber /= b;
console.log("aNumber:", aNumber);

function myFunction(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3);
}
myFunction(25, 15, 40);

//Object Literals
const person = {
    firstName: 'Tristan',
    lastName: 'Pogi',
    age: 21,
    hobbies: ['reading', 'playing', 'jumping'],
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    },
};
console.log(person.firstName);
console.log(person.age);
person.greet();
person.nationality = "Filipino";
console.log(person.nationality);
person.introduce = function () {
    console.log(`My hobbies are ${this.hobbies.join(", ")}.`)
}
person.introduce();
const address = {
    street: "123 Street",
    city: "456 city",
    country: "Philippines"
};
person.address = address;
console.log(person.address.country);
console.log(person);s