let digit = Math.floor(Math.random()*10)%9;
console.log("Single digit generated: "+digit);

let dice = Math.floor(Math.random()*10)%6;
dice++;
console.log("Dice number generated: "+dice);

let dice1 = Math.floor(Math.random()*10)%6;
dice1++;
let dice2 = Math.floor(Math.random()*10)%6;
dice2++;
sum = dice1 + dice2;
console.log("Sum of two dice rolls: "+sum);

{
let sum = 0, average, two_digit_no;
for(let i=0; i<5;i++){
//two_digit_no  = Math.random().toFixed(2)*100;
two_digit_no = Math.ceil(Math.random()*100)%9 + 10;
sum = sum + two_digit_no;
console.log(two_digit_no);
}
average = sum/5;
console.log("Sum of 5 random two digit numbers: "+sum);
console.log("Average of 5 two digit random numbers: "+average);
}

const INCH_TO_FEET = 1/12;
console.log("42 inch = "+INCH_TO_FEET*42+" feets");

const FEET_TO_METERS = 0.3048;
let plotArea = 60*40;
console.log("The area of rectangular plot: "+plotArea*FEET_TO_METERS+ " METERS");

const FEET_TO_ACRES = 2.29568e-5;
console.log("Area of 25 such plots in acres "+plotArea*25*FEET_TO_ACRES+" ACRES");

