/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let result=0
    for(sentence of sentences){
        let count=0;
        for(i=0;i<sentence.length;i++){
            if(sentence[i]===" "){
                count++;
            }
        }
        result = Math.max(result,count+1);
    }
    return result;
};