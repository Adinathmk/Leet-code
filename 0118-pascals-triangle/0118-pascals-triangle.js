/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]]; 

    for (let i = 1; i < numRows; i++) {
        let prev = res[i - 1];
        let row = [1]; 
        for (let j = 1; j < prev.length; j++) {
            row.push(prev[j - 1] + prev[j]);
        }

        row.push(1);
        res.push(row);
    }

    return res;
};

console.log(generate(5));
