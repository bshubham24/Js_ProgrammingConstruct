let input = Math.floor(Math.random()*10);
console.log("table for power of 2 under 256 till: "+input);
let result = 1;
while(result<256 && input>0){
   result = Math.pow(2,input)
   console.log(result);
   input--;
}