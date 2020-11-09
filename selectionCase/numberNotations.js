const UNIT =1;
const TEN =2;
const HUNDRED =3;
const THOUSAND = 4;
let num = Math.ceil(Math.random()*10000);
console.log("Number is: "+num);
let choice = Math.floor(Math.random()*10)%4+1;
switch(choice){
    case UNIT:
        console.log("UNIT: "+num%10);
        break;
    case TEN:
        console.log("TEN: "+Math.floor(num/10)%10);
        break;
    case HUNDRED:
        console.log("HUNDRED: "+Math.floor(num/100)%10);
        break;
    case THOUSAND:
        console.log("THOUSAND: "+Math.floor(num/1000)%10);
        break;
    default:
        console.log("others")    
}