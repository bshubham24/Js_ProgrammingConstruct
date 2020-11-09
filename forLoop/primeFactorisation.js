let input = Math.floor(Math.random()*100);
console.log("Factors of "+input+" are:");
for(let i=1; i<=input;i++){
    if(input%i==0)
    console.log(i);
}