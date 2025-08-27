/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 

    let res = strs[0];  
    for (let i = 1; i < strs.length; i++) {
        let temp = '';
        let cur = strs[i];
        for (let j = 0; j < Math.min(res.length, cur.length); j++) {
            if (res[j] === cur[j]) {
                temp += res[j];
            } else {
                break;
            }
        }
        res = temp;  
        if (res === '') break;
    }
    return res;
};
