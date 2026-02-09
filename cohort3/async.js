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