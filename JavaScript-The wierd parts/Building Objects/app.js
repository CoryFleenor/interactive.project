// Function constructor: 'new'
function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
  console.log("This function is invoked");
}

let john = new Person("John", "Doe"); // new is an operator and creates a empty object
console.log(john);
let jane = new Person("Jane", "Doe");
console.log(jane);

// Function Constructors and .prototype

Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

console.log(john.getFullName);

// conceptual aside: built in function constructors

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("john".isLengthGreaterThan(3));

// Object.create and Pure Prototypal Inheritance

let person1 = {
  firstname1: "Default",
  lastname1: "Default",
  greet: function () {
    return "Hi " + this.firstname1 + this.lastname1;
  },
};

let jim = Object.create(person1);
console.log(jim);
