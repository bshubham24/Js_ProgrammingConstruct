let inputNum = Math.floor(Math.random()*100);
let i;
for(i=2;i<inputNum;i++){
    if(inputNum==1 || inputNum==0){
        console.log(inputNum+" is not a prime number");
        break;
    }
    else if(inputNum%i==0){
        console.log(inputNum+" is not a prime number");
        break;
}
}
if(i==inputNum){
    console.log(inputNum+" is a prime number");
}
