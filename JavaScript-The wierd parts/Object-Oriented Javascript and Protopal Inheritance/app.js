let person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

let john = {
  firstname: "John",
  lastname: "Doe",
};

// dont ever do this only for demo purposes

john.__proto__ = person;

console.log(john.getFullName());
console.log(john.firstname);
console.log(person.firstname);

let jane = {
  firstname: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName());
// do not call or use the __proto__ method ever only for demo purpose

// Everything is an Object or a primative

let a = {};
let b = function () {};
let c = [];

// Reflection and extend

for (let prop in john) {
  if (john.hasOwnProperty("firstname")) {
    console.log(prop + ": " + john[prop]);
  }
}

let jane1 = {
  address: "111 Main",
  getFormalFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};
