/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    a=1
    for(i=0;i<nums.length;i++){
        a=1
        if(nums[i]===target){
            return i
        }
        else if(nums[i]>target){
            return i
        }
    }
    return i
};