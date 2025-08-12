/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element_sum=0;
    let digit_sum=0;
    for(let i=0;i<nums.length;i++){
        element_sum+=nums[i];
        if(nums[i]>=10){
            let digit=nums[i].toString();
            for(let j=0;j<digit.length;j++){

                digit_sum+=Number(digit[j]);
            }                    
        }
        else{
            digit_sum+=nums[i];
        }
    }
    return Math.abs(element_sum-digit_sum);
};