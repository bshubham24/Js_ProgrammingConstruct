function isPrime(num){
    if(num!==0&&num!==1){
        for(let i=2;i<=num;i++){
            if(num==i){
                return true;
            }  
            else if(num%i==0){
              return false;
        }
            
        }
    }
    else{
    return false;
}
  
}
let input = Math.floor(Math.random()*100);
let arr = new Array();
console.log("Factors of "+input+" are:");
for(let i=1; i<=input;i++){
    if(input%i==0 && isPrime(i))
    arr.push(i);
}
console.log(arr);