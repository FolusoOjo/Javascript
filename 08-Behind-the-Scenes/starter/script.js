'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //console.log(add(2, 8)); correct
      output = 'New Output';
    }
    console.log(millenial);
    //  console.log(add(2, 5)); wrong
    console.log(output);
  }

  printAge();

  return age;
}
//console.log(calcAge(2000));

const firstName = 'Jonas';
calcAge(1991);

/*const myName = 'Jonas';
if (myName === 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher';
  console.log(x);
}

//hoisting with variables
console.log(me); // var is hoisted to undefined
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1990;

//hoisting with functions
//function decleration
console.log(addD(2, 2));
//console.log(addA);
//console.log(addE);
function addD(a, b) {
  return a * b;
}
//cant be consoled before being called because of the let and const variable ish with block scope.
//function expression
const addE = function (a, b) {
  return a * b;
};

console.log(addA);
//arrow function
var addA = (a, b) => a * b;

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //variables declared with var would create a property on the global window object.
console.log(y === window.x);
console.log(z === window.x);


//console.log(this);

const CalcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
CalcAge(1984);

const calcAge = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this);
};
calcAge(1960);

const obj = {
  year: 1990,
  gender: 'female',
  calcAge: function () {
    console.log(this);
    //to calculate the age
    console.log(2022 - this.year);
  },
};
obj.calcAge();

const matias = {
  year: 2000,
};
matias.calcAge = obj.calcAge; // it would be console.log(2022-this.year);
matias.calcAge();

const f = obj.calcAge;
console.log(f);


const obj = {
  year: 1990,
  firstName: 'Alice',
  calcAge: function () {
    //console.log(this);
    //to calculate the age
    console.log(2022 - this.year);

    //Solution 1 using self or that
    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    //Solution 2 using arrow function.
    //arrow function used the this keyword from its parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // using arrow function wont give the desired answer because function decleration cant access the this keyword.
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
  // using function decleartion would give you your answer because function decl can access the this keyword.
  //great: function () {
  //  console.log(`Hey ${this.firstName}`);
  //},
};
obj.greet();
//obj.great();
obj.calcAge();

//argument Keywords, only avaliable in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
//could be used to add more arguments without having a parameter.
addExpr(2, 6, 7, 12);

var addArrow = (a, b) => {
  return a + b;
};
addArrow(2, 5, 8 );
*/

//Primitive and Objects
//Primitive consists of numbers, booleans, strings, undefined, null, symbol, BigInt.
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//Objects consists of Object Literal, Arrays, Functions.
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me); // why is it taking the age property of the friend?
//All variables declered using const is unchangebale only in primitive values, but can be changed when using object value.

//more examples
//primitive type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('After marriage;', marriedJessica, 'Before marriage;', jessica);

//copying objects
//using objects.assign= it copies two objects and returns a new one. it can be used to merge two objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2); //the result would be a new object
jessicaCopy.age = 30;
jessicaCopy.lastName = 'Davis';

//the Object.assign made it possible to change a relative type and allowing us to reassign.
//object assign only works on a first level. i.e if we have an object emedded inside another object, the inner object would still remain the same.objects.assign only creates a shallow copy not a deep clone as assigned.
//shallow copy; only copies properties in the first level
//deep copy copies everything.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John ');
console.log('After marriage;', jessicaCopy, 'Before marriage;', jessica2);

