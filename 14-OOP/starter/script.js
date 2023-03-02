'use strict';
class House {
  constructor(color) {
    this.color = color;
  }

  getFurniture() {
    return 'sofa';
  }
}
const houseObject = new House('Red');
console.log(houseObject.color);
console.log(houseObject.getFurniture());
console.log(houseObject);

const Trail = function (color) {
  this.color = color;
};

const tryColor = new Trail('Yellow');
console.log(tryColor);
console.log(tryColor instanceof Trail);
console.log(House instanceof Trail);
console.log(houseObject instanceof Trail);

class Human {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  };
}
// const human = new Human();
// human.printGender;

// class Person extends Human {
//   name = 'Max';
//   gender = 'Female';
// }
// printMyName = () => {
//   console.log(this.name);
// };
// const person = new Person();
// person.printGender;
// person.printMyName;

const number = [1, 2, 3];
const newNumber = [...number, 4,];
console.log(newNumber);
