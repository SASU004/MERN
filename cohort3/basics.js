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
