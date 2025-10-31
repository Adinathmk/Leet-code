/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(i=0;i<words.length;i++){
        let word=words[i]
        let isPaliendrome=true
        for(j=0;j<word.length/2;j++){
            if(word[j]!==word[word.length-j-1]){
                isPaliendrome=false
                break
            }           
        }
        if(isPaliendrome){
            return word
        }
    }
    return ''    
};