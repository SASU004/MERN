// Write a function that takes a user as an input 
// and greets them with their name and age

function greet(user){
  console.log(" heelo "+user.name+" your age is"+user.age);
}

let user={
  name:"hdfuifgsdiufg",
  age:20
};


greet(user);


// Write a function that takes a new object as input 
// which has name , age  and gender and greets the user with
// their gender (Hi Mr/Mrs/Others harkirat, your age is 21)


function greet(user){
  
  let title;
  if(user.gender=="male")title="Mr";
  else if(user.gender=="female")title="Ms";
  else title ="Others";
  
  console.log(" heelo "+title+" "+user.name+" your age is "+user.age);
}

let user={
  name:"hdfuifgsdiufg",
  age:20,
  gender:"male",
};

greet(user);


// Also tell the user if they are legal to vote or not

function greet(user){
  
  let title;
  let eli;
  if(user.gender=="male")title="Mr";
  else if(user.gender=="female")title="Ms";
  else title ="Others";
  if(user.age>18)eli="you are eligible to vote";
  else eli="you are not eligible to vote"
  console.log(" heelo "+title+" "+user.name+" your age is "+user.age+" so "+eli);
}

let user={
  name:"hdfuifgsdiufg",
  age:2,
  gender:"male",
};

greet(user);

// Write a function that takes an array of numbers as input, 
// and returns a new array with only even values.
// Read about filter in JS

function eve(nums) {
  return nums.filter(num => num % 2 === 0);
}


let nums=[1,2,3,4,5,6,7,8,9,];
let r=eve(nums);
console.log(r);


// Write a function that takes an array of users as inputs and 
// returns only the users who are more than 18 years old


function adult(users) {
  return users.filter(({ age }) => age > 18);
}

const users = [
  { name: "Harkirat", age: 21 },
  { name: "raman", age: 22 }
];

console.log(adult(users));


// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function adult(users) {
  return users.filter(user=>user.age > 18 && user.gender=="male");
  
}

const users = [
  { name: "Harkirat",gender:"male",age: 21 },
  { name: "raman", gender:"female",age: 22 }
];

console.log(adult(users));
