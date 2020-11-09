let arr = [];
for(let i=0;i<10;i++){
    let number = Math.floor(Math.random()*10);
    arr.push(number);
}
console.log(arr);

let max = 0;
let min = 10;
let max2 = 0;
let min2 = 10;
for(let element of arr){ 
    max = Math.max(element,max);
    min = Math.min(element,min);
}
for(let element of arr){
    max2 = (element<max&&element>max2)?element:max2;
    min2 = (element>min&&element<min2)?element:min2;
}
console.log(max);
console.log(max2);
console.log(min);
console.log(min2);