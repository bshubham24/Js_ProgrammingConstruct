  let num = Math.floor(Math.random()*100); 
console.log(num);
let n=50;
let start =0;
let end = 100;
while(n!=num){
    if(num<n){
        end = n;
        n=Math.floor((start+end)/2);
    }
    else if(num>n){
        start = n;
        n=Math.floor((start+end)/2);
    }
}
if(n==num){
    console.log("The number is "+n);
}