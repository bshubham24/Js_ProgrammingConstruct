let headCount = 0;
let tailCount = 0;

while(headCount<11 && tailCount<11){
    let input = Math.floor(Math.random()*10)%2;
    if(input==1){
        console.log("heads");
        headCount++;
        console.log("head Count: "+headCount);
    }
    else if(input==0)
        console.log("tails");
        tailCount++;
        console.log("Tail count: "+tailCount);
}
if(tailCount==11){
    console.log("Tails wins 11 times");
}
else if(headCount==11)
    console.log("Heads wins 11 times");