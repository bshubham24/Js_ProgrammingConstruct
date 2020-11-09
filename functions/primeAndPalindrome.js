function reverse(number){
    let reverse = 0;
    let digitCounter = 0;
    while(number>0){
        let temp = number%10;
        reverse = reverse*10 + temp;
        digitCounter++;
        number = Math.floor(number/10);
    }
    return reverse;
}
function palindrome(number){
    if(number==reverse(number)){
        return true;
    }
    else
        return false;
}
function isPrime(number){
let i;
for(i=2;i<number;i++){
    if(inputNum==1 || inputNum==0){
        break;
    }
    else if(inputNum%i==0){
        break;
}
}
if(i==inputNum){
    return true;
}
else
     return false;
}

let inputNum = Math.floor(Math.random()*100);
let reverseNumber = 0;
inputNum = 13;
if(isPrime(inputNum)){
    console.log(inputNum+" is a prime number");
    reverseNumber = reverse(inputNum);
    if(palindrome(inputNum)){
        console.log("The number is palindrome")
            if(isPrime(reverseNumber)){
                console.log("and its palindrome is also prime");
            }
            else{
                console.log("The palindrome of number is not prime");
            }
        }
        else{
            console.log("the number is not palindrome");
        }
          
    }
    else{
        console.log(inputNum+" is not a prime number");
    }
