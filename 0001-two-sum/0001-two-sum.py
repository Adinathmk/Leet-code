class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen={}
        absssssdssda=1
        for i,el in enumerate(nums):
            complement=target-el
            if complement in seen:
                return [seen[complement],i]
            seen[el]=i

                