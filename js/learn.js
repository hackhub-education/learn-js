// VARIABLES

// Define a integer variable
var a = 1;

// Define a string variable
var a = "This is a string";
var a = "1";

// Define a float variable
var a = 1.5;
var a = .5;

// Define a boolean variable
var a = true;
var a = false;

// Define a array
var arr = [1, 2, 3, 5, 8];
var arr = ["Hello", "World"];
var arr = [1, 3, "Hey", false];

// Define a object
var obj = {
  color: "#FF0000",
  length: 15,
  width: 5.5,
  name: "A Nice Cube",
  display: true
};

// Three empty datatype
var n = null; // It is nothing inside
var u = undefined; // It is no defined
var na = NaN; // It is a irregular number

// Nested arrary and object
var arr = [1, 2, { width: 10, height: 20}];
var arr = [1, 2, ["hello", "world"]];
var obj = {
  name: "team",
  members: ["yan", "neo", "anthony"]
};

// Get element from array by index
var b = arr[2];

// Get length of a array
var l = arr.length;

// Insert one element into array
arr.push("New Variable");

// Change one of the element
arr[1] = "change";

// Get object value by key
var y = obj.members[0];

// Change object value
obj.members = ["Han", "Calvin", "Iven"];

// Add new key value pair
obj.project = "Taiji";

// BASIC CALCULATIONS

// basic +, -, *, /, and % on numbers (integer and float)
a = 1;
var b = 2.5;
var c = a + b;

// Increment and Decrement
a += 2; // equals a = a + 2;
a -= 1; // equals a = a - 1;
a--; // equals a -= 1;
a++; // equals a += 1;

// basic operations on string
var s = "I like";
var p = ".";
var r = s + " JavaScript" + p;

// operiations on boolean
var b = true;
var t = !b;
var s = !!"";

// compare, ==, !=, ===, !== output is a boolean type
var c = 1 == 1; // is true
var c = 1 != 1; // is false
var c = 1 === "1"; // is true
var c = 1 !== "1"; // is false
var c = 1 > 2; // is false;
var c = 1 < 2; // is true;
var c = 1 >= 2; // is false;
var c = 1 <= 2; // is true;

// CONDITION

// condition statements
a = 1;
if (a != 1) {
  console.log(a);
} else if (a == 1) {
  console.log("A is one");
} else {
  console.log("A is undefined");
}

// switch statement
a = 10;
switch (a) {
  case 1:
    console.log("first case");
    break;
  case 2:
    console.log("second case");
    break;
  default:
    console.log("default case");
}