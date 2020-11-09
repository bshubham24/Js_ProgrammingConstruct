  
let value = Math.floor(Math.random()*10)+1; 
console.log("n = "+value);
let harmonicNum = 0;
for(let n=1;n<=value;n++){
    harmonicNum = harmonicNum + 1/n;
}
console.log("nth Harmonic Number: "+harmonicNum);