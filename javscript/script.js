console.log("JavaScript is running");
// let x=5;
// console.log(x);
// x=x+3;
// console.log(x);

// let a=10;
// console.log(a);
// a=a*2;
// console.log(a);

let x=5;
x=6;
console.log(x);

const y= 10;
console.log(y);
const z= 3;
z=4;

// due to this error 
// nothing int the code actually runs after this 

let a = 10;
let b=4.5;

let name =" shaswata";
let isloggedin= true ;
let c;
let user = null;
//  typeof returns the type of the data 
let p = 10;//value 
let q = "10";// string
let r = true;// boolean 
let d;//undefui=ined 
let e = null;//null

x = 5
x + 2
if (x > 3) {}
// first 2 expression lasst is statement 

let user1 = null;

if (user) {
  console.log("logged in");
}

for(let i=0;i<3;i++){
  console.log(i);
}

let x1=3;
while(x1>0){
console.log(x);
x--;
}



// ===============================
// STEP 0: Proof of Life
// ===============================
console.log("JavaScript is running");


// ===============================
// STEP 1: Execution Order
// ===============================
console.log("A");
console.log("B");
console.log("C");


// ===============================
// STEP 2: Variables (let / const)
// ===============================
let x = 5;
x = 6;
console.log(x); // 6

const y = 10;
console.log(y); // 10

// const z = 3;
// z = 4; // ❌ TypeError (stops execution)


// ===============================
// STEP 3: Primitive Data Types
// ===============================
let num = 10;          // number
let str = "10";        // string
let flag = true;       // boolean
let undef;             // undefined
let empty = null;      // null

console.log(typeof num);
console.log(typeof str);
console.log(typeof flag);
console.log(typeof undef);
console.log(typeof empty); // "object" (JS quirk)


// ===============================
// STEP 4: Expressions vs Statements
// ===============================
let a = 5;        // statement
a + 2;            // expression

if (a > 3) {      // statement
  console.log("a is greater than 3");
}


// ===============================
// STEP 5: Conditionals (Truthy / Falsy)
// ===============================
let user = null;

if (user) {
  console.log("logged in");
} else {
  console.log("not logged in");
}


// ===============================
// STEP 6: Loops
// ===============================
for (let i = 0; i < 3; i++) {
  console.log("for loop:", i);
}

let n = 2;
while (n < 5) {
  n++;
}
console.log("while result:", n);


// ===============================
// STEP 7: Functions
// ===============================
function greet() {
  console.log("hello");
}

greet();

function add(p, q) {
  return p + q;
}

let sum = add(3, 4);
console.log("sum:", sum);


// ===============================
// STEP 8: Scope
// ===============================
let globalVar = 100;

function testScope() {
  let localVar = 50;
  console.log("inside:", globalVar);
  console.log("inside:", localVar);
}

testScope();
// console.log(localVar); // ❌ ReferenceError

let shadow = 10;

function shadowTest() {
  let shadow = 5;
  console.log("inner shadow:", shadow);
}

shadowTest();
console.log("outer shadow:", shadow);


// ===============================
// STEP 9: Closures
// ===============================
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(3)); // 8


function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let c = counter();
c(); // 1
c(); // 2

// mostly a compilation -ai generated- of what i am currently studying 
