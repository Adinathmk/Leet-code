/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count=0;
    let arr=num.toString().split("")
    for(let x of arr){
        if(num % x == 0){
            count++;
        }
    }
    return count;
};