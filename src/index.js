// PLEASE DON'T change function name
module.exports = function makeExchange(cash) {
    if (cash<=0){
        return {};
    }
    else if(cash>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let coins={};
    coins.H = Math.floor(cash/50);
    coins.Q = Math.floor((cash-coins.H*50)/25);
    coins.D = Math.floor((cash-coins.H*50-coins.Q*25)/10);
    coins.N = Math.floor((cash-coins.H*50-coins.Q*25-coins.D*10)/5);
    coins.P = cash-coins.H*50-coins.Q*25-coins.D*10-coins.N*5

    for(key in coins){
        if(coins[key]==0){
        delete coins[key];
        }
    }
    return coins;
}
