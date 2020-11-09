let day = Math.floor(Math.random()*10)%7;
day++;
switch(day){
case 1:{
    console.log(day+": Monday");
    break;
}
case 2:{
    console.log(day+": Tuesday");
    break;
}
case 3:{
    console.log(day+": Wednesday");
    break;
}
case 4:{
    console.log(day+": Thursday");
    break;
}
case 5:{
    console.log(day+": Friday");
    break;
}
case 6:{
    console.log(day+": Saturday");
    break;
}
case 7:{
    console.log(day+": Sunday");
    break;
}
default:{
    console.log(day+": Invalid input");
}
}