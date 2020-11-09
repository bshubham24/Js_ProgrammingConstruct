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

let inputNumber = Math.floor(Math.random()*1000);
if(palindrome(inputNumber)){
    console.log(inputNumber+" is a palindrome");
}
else{
    console.log(inputNumber+" is not a palindrome");
}