let input = Math.floor(Math.random()*10);
let fact = 1;
for(let i=1;i<=input;i++){
    fact*=i;
}
console.log("Factorial of "+input+": "+fact);