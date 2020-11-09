let arr = new Array();
for(let i=0;i<10;i++){
    let number = Math.floor(Math.random()*10);
    arr.push(number);
}
console.log(arr);
let sortedArr = new Array();
sortedArr = arr.sort();
console.log(sortedArr);
console.log("2nd largest number: "+sortedArr[arr.length-2]);
console.log("2nd smallest number: "+sortedArr[1]);