/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);
    let arr=[];
    for(i=0;i<nums.length-1;i+=2){
        let value1=nums[i+1];
        let value2=nums[i];
        arr.push(value1);
        arr.push(value2);
    }
    return arr    
};