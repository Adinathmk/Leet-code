/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let customer of accounts) {
        let money = 0; 
        for (let amount of customer) {
            money += amount; 
        }
        if (money > maxWealth) {
            maxWealth = money;
        }
    }
    return maxWealth;
};
