let value =  Math.floor(Math.random()*11)*10;

if(value<10){
   console.log(value+": Unit");
}
else if(value/10<10){
    console.log(value+": ten");
}
else if(value/100<10){
    console.log(value+": hundred");
}
else if(value/1000<10){
    console.log(value+": thousand");
}
else
    console.log(value+": greater than thousand");
