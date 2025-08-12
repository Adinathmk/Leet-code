/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let double=0;
    let single=0;
    let total=0;
    for(num of nums){
        total+=num;
        if(num>=10){
            double+=num;
        }
        else{
            single+=num;
        }
    }
return (single>total-single||double>total-double)
};