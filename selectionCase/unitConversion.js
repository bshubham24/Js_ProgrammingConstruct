const FEET_TO_METER = 0.3048;
const FEET_TO_INCH = 12;
const INCH_TO_FEET = 0.0833333;
const METER_TO_FEET = 3.28084;
let choice = Math.floor(Math.random()*10)%4 + 1;
let input = Math.floor(Math.random()*100);
switch(choice){
    case 1:{
        console.log(input+" Feet = "+input*FEET_TO_METER+" meters");
        break;
    }
    case 2:{
        console.log(input+" Feet = "+input*FEET_TO_INCH+" inches");
        break;
    }
    case 3:{
        console.log(input+" Inch = "+input*INCH_TO_FEET+" feets");
        break;
    }
    case 4:{
        console.log(input+" Meter = "+input*METER_TO_FEET+" feets");
    }
    }