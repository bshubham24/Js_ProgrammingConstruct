let arr = new Array;
for(let i=0;i<10;i++){
    let num = Math.floor(Math.random()*100);
    arr.push(num);
}
console.log(arr);

function repeatedNum(num){
    if(num%11===0)
    return true;
    else
    return false;
}
let filteredArray = new Array();
filteredArray = arr.filter(repeatedNum);
console.log("filtered numbers: "+filteredArray);