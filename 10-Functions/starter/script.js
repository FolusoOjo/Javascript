'use strict';
/*
//DEFAULT PARAMETERS.
//creating a default function just incase
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //default values can contain any expression.
  //putting the values inside the function iterable is the ES6 advancement such as numPassengers = 1, price = 199
     
  //ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
    
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
//we can use the values of other parameters set before it. for example we have numPassengers before price and we set price to price= 199* numPassengers
createBooking('LH123', 2);
createBooking('LH123', 5);
//we cannot skip values/parameters. the best option is to set the parameter to undefined.
createBooking('LH123', 1000); //cannot skip parameters.
createBooking('LH123', undefined, 1000); // this is a good way to skip a defult parameter that we want to leave at its default.
*/
/*
//HOW PASSING ARGUMENTS WORKS; VALUE VS. REFERENCE
//PRIMITIVE TYPES AND REFERENCE TYPES.
const flight = 'LH234'; //primitive type, just a string
const jonas = {
  name: 'Jonas Schmedtann',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //changing the flight number, a copy of the flight variable
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//same thing as
const flightNum = flight; //passing a rimitive type to a function is the same as creating a copy outside the function.
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
*/
/*
//FIRST CLASS AND HIGHER ORDER FUNCTIONS
//js has first class functions that enables us to write higher order functions.
//FIRST CLASS FUNCTIONS; 1. functions as first class citizens(functions are treated as values). funcions = objects = values.
//we can store functions in variables or properties
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};
//2. functions are simply values
//pass functions as arguments to other functions
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet);
//3. functions are just another type of object.
//return functions from functions
//functions are objects. we have array methods and we also have function methods i.e methods we can call on functions.
counter.inc.bind(someOtherObject);
//HIGH ORDER FUNCTIONS: 1. A function that receives another function as an argument and retuns a new function or both.
//functions that receives another function
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet); //the addEventListener is the higher-order function because it receives another function as an input i.e the greet function which can also be called the callback function.
//fuctions that returns another function
function count() {
  //higher-order function
  let counter = 0;
  return function () {
    //returned function
    counter++;
  };
}
//2. is only possible because of first-class functions.
//first class function is a feature that a proframming language either has or does not hae which means that all functions are values. they arent in practice.
//higher order function are in practice and possible becase the language supports first class functions.
*/

/*
//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS.
//generic function that deals with string transformation.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher- Order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str} `);
  console.log(`Transformer string: ${fn(str)}`); //fn is the callback function in the transformer

  console.log(`Transformed by : ${fn.name}`); //name is the property name.
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord); //the callback function is the oneWord and the upperFirstWord.

//JS uses callback functions all the time.
const high5 = function () {
  console.log('Holla');
};
document.body.addEventListener('click', high5); //the addEventListener is the high order function while the high5 is the callback function.
//why are callback functions so much used in JS and why are they so helpful?
//1. it makes it easy to split up codes into more resuable and intraconnected part.
//2. allows us create abstraction: hide details of code implimentation bcus we dont really care about the detail.
*/

/*
//FUNCTION RETURNING FUNCTIONS.
//more like opposite of the last lecture.
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//greet('Hey'); function(greeting)
const greeterHey = greet('Hey');
greeterHey('Jonas'); //function(name)
greeterHey('Alice');

//instead of creating a const, we can do it directly
greet('Hello')('Jonas'); //function(greeting)(name)

//using arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Steven');
*/

//THE CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){  }
  //we can use enchanced object literal method instead of the old long method.
  book(flightNum, name) {
    console.log(
      `${name}  booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    //to allow the book object to add objects inside the bookings[].
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Steve');
lufthansa.book(600, 'John Smith');
console.log(lufthansa);
console.log(lufthansa.bookings);

//for the case of another airline using the same book() function we can store the book in an external function.
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//after calling book as a variable, eurowings.book(232, 'Foluso Ojo'); cant work because of the this keyword in lufthansa.book
//we need to be able to pass a message through JS telling it that the this keyword should point to a particular variable(either eurowings or lufthansa), we have 3 ways to do that which is the call, bind and apply.

//using the call method.
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Copper');
console.log(lufthansa);
//the first argument is what we want the this keyword to point to. the other ones are the value we are adding to it. the arguments after the first one are the arguments of the original function. (23, 'Sarah Williams')

const airpeace = {
  airline: 'Airpeace',
  iataCode: 'AP',
  bookings: [],
};
book.call(airpeace, 50, 'Blessing Aina');
//console.log(airpeace);

//using the apply method.
//it does basically the same thing the only difference is that it does not receive arguments after the this keyword. instead it takes an array of the argument.
const flightData = [583, 'George Cooper'];
book.apply(airpeace, flightData);
console.log(airpeace); //just t o check the bookings tab i the console that it has updated.
//the .apply method is not really used in JS again
//which means we can write book.apply(airpeace, flightData as)
book.call(airpeace, ...flightData);
//using the spread operator to fetch the data from the flightData

/////BIND METHOD
// Bind () allows us to explicitely define the this keyword in any function. Just like the call() the bind() allows us to manually set the this keyword for any function call.
//the difference between the call() and the bind() is that the bind does not call the function immediately instead it returns a new function where the this keyword is bound.
//we can use the bind to create a new function??

const bookEW = book.bind(eurowings);
const bookAP = book.bind(airpeace);
const bookLF = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

//we can book a function for a specific airline.
const bookEW23 = book.bind(eurowings, 23); //remember that in the function we have book(flightNum, name) but in this equation looks like we have only fight num set, so we say:
bookEW23('Bolu Ojo');
//15:19