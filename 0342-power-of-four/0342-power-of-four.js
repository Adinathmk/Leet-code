/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let value=4
    while(value<n){
        value*=4;
    }
    if(value==n||n==1){
        return true
    }
    else{
        return false
    }    
};