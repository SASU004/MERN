function sum(a,b){
  return a+b;
}

let ans = sum(20,40)
console.log(ans);


function sum(a,b){
  return a+b;
}

let ans = sum(20,"40")
console.log(ans);

function sumn(n){
  return (n*(n+1))/2
}
let ans=sumn(5)
console.log(ans);


const fs = require('fs');//basically ussing library 
// without utf tthe output is in diff format 
// human readable is utf8 

const data = fs.readFileSync('a.txt','utf8');
console.log(data);
const data2 = fs.readFileSync('b.txt','utf8');
console.log(data2);


// async portions

fucntion print(err,data) {
   console.log(data);
}

fs.readFile("a.txt","utf-8",print);
fs.readFile("b.txt","utf-8",print);


console.log("done");


function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");


