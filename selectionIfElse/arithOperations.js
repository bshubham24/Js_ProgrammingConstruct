let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
let c = Math.floor(Math.random()*10);

let operation1 = a+b*c;
let operation2 = c+a/b;
let operation3 = a%b+c;
let operation4 = a*b+c;

let max = Math.max(operation1,operation2,operation3,operation4);
let min = Math.min(operation1,operation2,operation3,operation4);
console.log("Max: "+max);
console.log("Min: "+min);
