let person = new Object();

person["FirstName"] = "Tony";
person["LastName"] = "Alicea";

console.log(person);
console.log(person.FirstName);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person);
console.log(person.address);
console.log(person.address.street);

let person1 = {
  firstname: "Tony",
  lastname: "Alicea",
  address: {
    street: "111 Main",
    state: "UT",
    city: "Tooele",
  },
};

function greet(person) {
  console.log("Hi " + person.FirstName);
}

greet(person);

console.log(person1);

// JSON and Object Literals

var objectLiteral = {
  firstname: "Mary",
  isAProgrammer: true,
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);

//functions and Objects

function greet1() {
  console.log("hi");
}
greet1.language = "english";
console.log(greet1.language);
greet1();

//Function statments and function expressions

greet2();

function greet2() {
  console.log("hi");
}

let anonymousGreet = function () {
  console.log("hello");
};

anonymousGreet();

function log(a) {
  a();
}
log(function () {
  console.log("World Hi");
});

// Objects, Functions, and 'this'

function b() {
  console.log(this);
  this.newvarible = "hello";
}

let c = function () {
  console.log(this);
};

b();
c();

console.log(newvarible);

let d = {
  name: "the d object",
  log: function () {
    var self = this;
    console.log(self);

    var setname = function (newname) {
      self.name = newname;
    };
    setname("update again!");
    console.log(self);
  },
};

d.log();

// Consptual aside "arrays"

let arr = [
  1,
  false,
  {
    name: "cory",
    address: "Tooele",
  },
  function (name) {
    let greeting = "Helloo ";
    console.log(greeting + name);
  },
];

console.log(arr);
arr[3](arr[2].name);

// Argument and spread

function greetings(firstname1, lastname1, language1) {
  language1 = language1 || "english";

  if (arguments.length === 0) {
    console.log("Missing Parameters");
    console.log("-------");
    return;
  }

  console.log(firstname1);
  console.log(lastname1);
  console.log(language1);
  console.log("-------------");
}

greetings();
greetings("john", "doe", "spanish");

// immediately invoked function expressions

let hi = (function (name) {
  console.log("Hello " + name);
})("John");

// understanding closures part 1 and 2

function hello(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

let sayHi = hello("Hi");
sayHi("Tony");

function buildFunctions() {
  let arr1 = [];

  for (let i = 0; i < 3; i++) {
    arr1.push(function () {
      console.log(i);
    });
  }
  return arr1;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2](); // difference between let and var, var logs 3, 3, 3 while let logs 0, 1, 2!!

function buildFunctions1() {
  var arr1 = [];

  for (var i = 0; i < 3; i++) {
    arr1.push(function () {
      console.log(i);
    });
  }
  return arr1;
}

var fs1 = buildFunctions1();

fs1[0]();
fs1[1]();
fs1[2]();

// closures and callbacks

function sayHiLater() {
  let greetme = "Hi after three seconds";
  setTimeout(function () {
    console.log(greetme);
  }, 3000);
}

sayHiLater();

function tellMeWhenDone(callback) {
  let a = 1000;
  let b = 2000;
  callback();
}
tellMeWhenDone(function () {
  console.log("I am Done");
});
tellMeWhenDone(function () {
  //alert("I am Fin!");
});

// call(), apply(), bind()

let person2 = {
  firstname2: "john",
  lastname2: "Doe",
  getFullName: function () {
    let fullName = this.firstname2 + " " + this.lastname2;
    return fullName;
  },
};

let logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------");
};

let logPersonName = logName.bind(person2);

logPersonName.call("en", "es"); // apply wants an array, call does not
// .bind creates a copy of the function and creates a permanent copy of parameters passed in

// functional programming
function mapForEach(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr3.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

let arr3 = [1, 2, 3];
console.log(arr3);

let arr4 = mapForEach(arr3, function (arr3) {
  return arr3 * 2;
});

console.log(arr4);

let checkPastLimit = function (limiter, item) {
  return item > limiter;
};
let arr5 = mapForEach(arr3, checkPastLimit.bind(this, 1));
console.log(arr5);

let checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

let anotherArr = mapForEach(arr3, checkPastLimitSimplified(2));
console.log(anotherArr);
