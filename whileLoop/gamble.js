let initialMoney = 100;
let betWon = 0;
let betLost = 0;
while(initialMoney>0 && initialMoney<200){
    let input = Math.floor(Math.random()*10)%2;
    if(input==1){
        console.log("wins bet");
        betWon++;
        initialMoney++;
    }
    else if(input==0)
        console.log("bet Lost");
        betLost++;
        initialMoney--;
}
console.log("Bets won: "+betWon);
console.log("Bets lost: "+betLost);
console.log("Final sum: "+initialMoney);