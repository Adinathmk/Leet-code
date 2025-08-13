/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let val = 1;
    while (val <= n) {
        if (val === n) {
            return true;
        }
        val *= 3;     
    }
    return false;
};