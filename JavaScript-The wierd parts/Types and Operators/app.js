let a = 0;
let b = false;

if (a === b) {
  console.log("equal");
} else {
  console.log("not equal");
}

let c = 0;
if (c || c === 0) {
  console.log("something is there");
} else {
  console.log("nothing is there");
}

function greet(name) {
  name = name || "<Your Name Here>";
  console.log("Hello " + name);
}

greet("Cory");
greet();
