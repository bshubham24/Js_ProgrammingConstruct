let arr = new Array;
for(let i=0;i<3;i++){
    let num = Math.floor(Math.random()*10);
    arr.push(num);
}
console.log(arr);

function sum(total, value){
    return total+value;
}

let sumArray = arr.reduce(sum,0);
console.log(sumArray);