/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    alpha="abcdefghijklmnopqrstuvwxyz"
    for(value of alpha){
        if(!sentence.includes(value)){
            return false
        }
    }
    return true
};