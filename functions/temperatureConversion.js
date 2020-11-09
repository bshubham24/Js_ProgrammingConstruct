function fahrenhiteToCelsius(degF){
    let degC = (degF -32)*5/9;
    return degC;
}

function celsiusToFahrenhite(degC){
    let degF = (degC*9/5) + 32;
    return degF;
}

let input = Math.floor(Math.random()*100);
let choice = Math.floor(Math.random()*10)%2;

switch(choice){
    case 0:
        if(input>31 && input<213){
            let celsius = fahrenhiteToCelsius(input);
        console.log(input+" F = "+celsius+" C");
        
        break;
        }
        else{
            console.log("Temperature range is invalid");
        break;
        }
    case 1:
        let fahrenhite = celsiusToFahrenhite(input);
        console.log(input+" C = "+fahrenhite+" F");

}