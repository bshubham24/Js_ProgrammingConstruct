let lowerLimit = Math.floor(Math.random()*10);
let upperLimit = Math.ceil(Math.random()*100);
console.log("Prime number in range of "+lowerLimit+"-"+upperLimit);
let i,n;
let count = 0;
for(n=lowerLimit;n<=upperLimit;n++){
    for(i=2;i<n;i++){
        if(n%i==0){
           break;
        }
        else if(i==n-1){
            console.log(n);
            count++;
        }
    }
}
if(count==0){
    console.log("no prime numbers in the range");
}
