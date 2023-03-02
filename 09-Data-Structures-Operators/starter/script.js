'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//third method of writing object literals, we can compute property names, instead of writing it manually and literally,
// for instance, theres an array that contains the weekdays.
const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

//using Object literal
const openingHours = {
  thurs: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //using the ES6 advacement for the first method of writing object literals
  openingHours,
  // second method of writing object literals. Using the ES6 advancement you can now write a property without setting it to a function.
  //order : function(starterIndex, mainIndex){},
  //as long as the () is present, VS code would recognize it as a function.
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, time, address, mainIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Order received! Here is your pasta with ${ing1}, ${ing2}. and ${ing3}.`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//CHALLENGE 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n'); //to seperate the texts into an array
  console.log(text);
  //console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
/*
//PART 3
//split() and join()
//.split() allows us split strings into multiple parts based on a divider string.
console.log('a+very+nice+string'.split('+')); //using + as the divider string
console.log('Foluso Ojo'.split(' ')); // using space as the divider string.
//using destructuring
const [firstName, lastName] = 'Foluso Alice'.split(' ');
//console.log([firstName, lastName])

//adding Miss to the beginning and changing the last letter toUpperCase
const newName = ['Miss.', firstName, lastName.toUpperCase()].join(' '); //.join() helps to add variables together.
console.log(newName);

//capitalize the first letter of the word
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    //another method to use.
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('foluso alice ojo');

//padding a string: to add a number of characters to a string until the string has a certain desired lenght.
//padStart (the first character is the total lenght of the string you are trying to acheieve, second is what you want to add) helps add characters to the beginning of the string.
const message = 'Go to gate 21';
console.log(message.padStart(23, '+').padEnd(35, '-'));
//console.log(message.padEnd(23, '-')); //adds characters to the end of the string

//example.
//converting a number into string, pls refer back to the fundamentals of JS. or you can convert a number to string by adding number to an empty string.
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4); //to get the last 4 digits of the code.
  return last.padStart(str.length, '*');
};
//console.log(maskCreditCard);
console.log(maskCreditCard(24567822));
console.log(maskCreditCard(46789876543246));
console.log(maskCreditCard(12345678909876543212));

//Repeat method: allows us repeat same strings multiple times.
//using repeat() all we just ave to pass in is the number of times we want to repeat the message.
const message2 = 'Bad weather...  All Departures Delayed... \n';
console.log(message2.repeat(7));
*/

/*
//PART 2
//WORKING WITH STRINGS
const airline = 'TAP Air Portugal';
//changing the case of strings
console.log(airline.toLowerCase()); // dosesnt require passing anything inside. wouldautomatically change to lower case
console.log(airline.toUpperCase()); //would change to upper case
console.log('jonas'.toUpperCase());

//fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails.
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
//to get rid of the spaces in front and the\n,
const trimmedEmail = lowerEmail.trim(); //since ES2019, theres also trimStart() and trimEnd()
//const correctEmail = lowerEmail.slice(2);
console.log(lowerEmail);
console.log(trimmedEmail);
//short method
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
//comparing both emails.
console.log(email === normalizedEmail);

//Replacing Parts of Strings
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
// you pass in 2 arguments in the replace() the 1st argument would be the one you are about to change, the second argument would be the one you are changing into.
console.log(priceUS);

//replacing entire words
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
//using regular expression
console.log(announcement.replace(/door/g, 'gate')); //the /g is for global/general which will effect the changes all over.
// the replace method is case sensitive.

// Booleans. there are 3 methods that returns booleans. 1. includes, 2. startWith, 3. endsWith
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A3'));
console.log(plane.endsWith('neo'));
//checking if the plane starts with airbus and if it ends with neo
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

//practice
//always change your strings to lowercase using toLowerCase()
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and gun for protection');
*/

/*
//PART 1
//we can get the character of a string at a certain position
console.log(plane[0]); //would give us A
console.log(plane[1]); //3s
console.log(plane[2]); //2
//we can determine the character directly on a string without a varible.
console.log('B737'[0]); //B
console.log('B737'[1]);
//we can read the lenght property of strings just like in arrays.
console.log(airline.length);
console.log('B737'.length);

//methods
//indexOf() helps to get the position of a certain letter
console.log(airline.indexOf('r')); //indexOf() would only give you the first occurence
console.log(airline.lastIndexOf('r')); //lastIndexOf would give you the last occurence.
console.log(airline.indexOf('Portugal')); //you can search for whole words.

//uses of indexOf; extract parts of a string using the slice method.
console.log(airline.slice(4)); // called the sub string.
console.log(airline.slice(4, 9)); //we can specify an end character. the end value is not included in the string. so its basically more like end value -1.

//trying to extract the first word.
console.log(airline.slice(0, airline.indexOf(' ')));

//extracting the last word.
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //not putting the end parameter since we are trying to extract everything towards the end. the +1 is to eliminate the space.

//we can specify a -ve end parameter
console.log(airline.slice(-2)); //starts counting from the last part
console.log(airline.slice(1, -1)); // the -1 cuts off the last value.

//using the knowledge of .slice() to answer questions.
const checkMiddleSeat = function (seat) {
  // B and E are middle seats.
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seats.');
  else console.log('You got lucky.');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/*
//CODING CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1 CREATE AN ARRAY with no duplicates
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. remove event (yellow card of 64 minutes)
gameEvents.delete(64);
console.log(gameEvents);

//3. 9 minutes
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//but because we have 92 minutes lets try to probe further
const time = [...gameEvents.keys()].pop(); // the pop would give us only the last number.
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4. loop through
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
/*
//MAPS
//maps are more useful than sets.
//maps are data structure used to map values to keys.
//Difference between map and object: In maps, keys can have any type of value i.e they could range from strings to objects to arrays and lots more. In objects, keys are basically 'strings'.

//creating a new map;
//easiet way to vreating a map is to create an emoty map without passing in any iterable.
const rest = new Map();
//to fill up the iterable, we can use set
rest.set('name', 'Classico Italiano'); //passing in the key, value name
rest.set(1, 'Canada, Montreal');
console.log(rest.set(2, 'Canada, Toronto'));
//console.log(rest);

//use of map can allow us to join sets of different sets together instead of calling them one by one.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

//to get a data
//to read data from maps, we use the get method  to pull the exact data we want by passing in the name of the key. i.e variableName.get(key)
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//linking variables
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//check if a map contains a certain key
//i.e passing in the key name
console.log(rest.has('categories'));
console.log(rest.has('open'));

//to delete elements from map
rest.delete(2);
//to confirm
console.log(rest);

//to check the size of a map
console.log(rest.size);

//to clear a map
//rest.clear();
console.log(rest);

//using arrays or objects as map keys
//arrays
const arr = [1, 2];
//in the case of arrays, just because it wont be able to give an output when we use [1,2] as the key, we create a variable for it and use the variable name as the key.
rest.set(arr, 'Test');
//object
rest.set(document.querySelector('h1'), 'Heading');
//console.log(rest.get('h1'));
//h1 is the key of the map.
console.log(rest.get(arr));
*/

/*
//MAP ITERATION
//Another way of populating a new map instead of using the .set() method. More like an Array of Arrays
//when creating a new map from scratch directly in the code, its better using the array and when adding more elements using code, you use the set() method.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'You are correct'],
  [false, 'Try again!'],
]);
console.log(question);

//convert objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration; possible on map because its iterable
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
//console.log(answer);
const answer = 3;
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//it can access the keys and value iterator once youve converted the map to an array.
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
//SETS
//collection of unique values. Cant have duplicates, makes it useful in certain conditions.
// to create a new set, we write new Set(pass in an iterable, the most common iterable passed is always an array) after decleraing a variable. Sets can hold mixed data types.
//Differnce between an array and sets is that sets values are always unique, and the order of elements in set doesnt actually matter.
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Pizza', 'Pasta', 'Risotto'));
//to get the size of a set
console.log(ordersSet.size); //for array, we use .length
// to check if an element is present in a set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Yam')); //for arrays, we use .include()
//to add new elemets to a set
ordersSet.add('Garlic Bread'); //for arrys, we use .push(add to the end of the array) or .unshift(adds to the beginning of the array)
//to delete from a set
ordersSet.delete('Pizza'); // for arrays, we use .pop(removes from the last element) or .shift(removes from the first element)
console.log(ordersSet);
//Theres no way to get data out of sets.
//to delete all elements in a set
//ordersSet.clear();
console.log(ordersSet);

//sets are iterables which allows us to loop over them.
for (const order of ordersSet) console.log(order);

//main use of set is to remove duplicate values or arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//converting an array to a set
const staffUni = new Set(staff);
console.log(staffUni);
//converting a set to an array
//spread operator works on all iterables, sets inclusive
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUni.size);

//counting the differnt numbers are in a string
console.log(new Set('FolusoOjoAlice').size);
//sets are not nearly as important as array.
*/

/*
//LOOPING OBJECTS: OBJECT KEYS, VALUES & ENTRIES.
//OBJECT KEYS
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days.`);

//OR

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//VALUES
const values = Object.values(openingHours);
console.log(values);

console.log(`We are open on ${values.length} days.`);

//Entries
//entries is the keys(name) and values combined.
const entries = Object.entries(openingHours);
console.log(entries);
//How its supposed to be normally but we need to apply destructuring for it to work out the way we want to.
for (const x of entries) {
  console.log(x);
}
//with destructuring
//for (const [key, value] of enteries)
//but value is an object that contains open and close.
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/

/*
//OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.sat)
  console.log(restaurant.openingHours.sat.open);

//using optional chaining
console.log(restaurant.openingHours.mon?.open);
//if the property before the ? exists, the property after would be read. but if the property before the ? doesnt not exist, the property after the? would not be read.
//we can have more than 1 optional chaining statement in a sentence. it helps to prevents errors/ bugs.
console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'pls check back again';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
//we can check if a method exists before calling it.

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//array
//Optional chaining can be used to check if an array is empty.

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User not found');

if (users.length > 0) console.log(users[0].name);
else console.log('User not found  ');
*/

/*
//LOOPING ARRAY: THE 'FOR-OF' LOOP.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(`${item [0] +1}: ${item[1]}`)
}
//using destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}, ${el}`);
}
*/
// restaurant.orderDelivery({
//   time: '11:30',
//   address: '3A, Ade Ajayi',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//Spread operator expands an array into individual elements
//Rest pattern condenses multiple elements into an array.
//to identify spread from rest because they use the same syntax, spread is always on the right side after the assignment operator(=) while rest is always on the left side before the operator.

//NULLISH COALESCING OPERATOR

//restaurant.numGuests = 0;

//const guests2 = restaurant.numGuests || 15;
//console.log(guests2);

//nullish- null and undefined (not 0 or "")
//const guestCorrect = restaurant.numGuests ?? 10;
//console.log(guestCorrect);

/*
//short circuiting
console.log('--- OR OPERATOR ---');
//OR operator returns the first truthy value of all operands or last value if all are falsy.
//Can be used to set default values.
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello is the first truth value in this line of code.
restaurant.numGuests = 20;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 6;
console.log(guests1);

const guests2 = restaurant.numGuests || 15;
console.log(guests2);

console.log('--- AND OPERATOR ---');
//AND operator would return the first falsy value of all operands or last value if all are truth.
//C an be used to execute codes in second operands if the first one is true.
console.log(0 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas'); //null is a falsy value so evaluation stops at null.

//using AND operator to avoid IF statement
//using if statement
if (restaurant.orderPasta) {
  restaurant.orderPasta('mushrooms', 'spinach');
}

//using AND statement
restaurant.orderPasta && restaurant.orderPasta('mushrooms', 'spinach');

//SPREAD ... on the right side after the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(...arr);
//04:19

//REST ...on the left side before the assignment operator.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(3, 5, 7, 2);
add(9, 2, 3, 1, 6, 5);

const x = [20, 15, 16, 3];
add(...x);
restaurant.orderPasta('mushrooms', 'onions', 'chicken', 'olives');
*/
/*
//SPREAD OPERATOR
const arr = [6, 8, 4];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

//using spread operator
const spread = [4, 3, ...arr];
console.log(spread);
console.log(...spread);

//creating a new array.
const newMenu = [...restaurant.mainMenu, 'Eba'];
console.log(newMenu);

//creating a shallow copy of an array. i.e copy array.
const mainMenuCopy = [...restaurant.mainMenu];

//joining arrays together
const join = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...join);

//... spread operator works on all so called type of iterables. Iterables are arrays, sets, maps, strings but NOT  objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//multiple values seperated by a comma are usually only expected when we pass values into a function or when theres a new array.

const ingredients = [
  // prompt("Let's make Pasta! Ingredient1?"),
  // prompt('Ingredient2?'),
  // prompt('Ingredient3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//spread operator sometimes work on objects even tho objects arent iterables.
//OBJECT
const newResturant = {
  foundedIn: 1990,
  founder: 'Ajibade Ayomide',
  ...restaurant,
};
console.log(newResturant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ajibade's resturant";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
//DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(openingHours, categories, name);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj =  { a: 23, b: 7, c: 14 };
({ a, b } = obj); //its important to wrap the variables into () else we would get an error msg.
console.log(a, b);

//Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/

/*
//DESTRUCTURING ARRAY
const arr = [2, 4, 6];
const [x, y, z] = arr;
console.log(x, y, z);

//const [first, second] = restaurant.categories;
//console.log(first, second);
//to skip a list just leave an empty space.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array: an array inside an array
//nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
//to have individual values, you have to do destructuring inside destructuring.
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [4, 5];
console.log(p, q, r);
*/

/*
//coding chalenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. using destructuring
const [players1, players2] = game.players;
console.log(players1, players2);
//2. variable goalkeeper and 1 with other players using rest syntax ... comes before the assignment operator.
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);
//3.   all players . using spread operator
const allplayers = [...players1, ...players2];
console.log(allplayers);
//4. new array, players 1 and 3 other players using spread operator
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);
//5. create 3 variables based on odds.. using nested destructing.

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7.  using and because it continues operation when the first value is true..
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

//Coding challenge 2
//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player} scored.`);
}

//2. Calculate average
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, value] of Object.entries(game.odds)) {
  //using itenary operator
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr}:  ${value}`);
}
*/
