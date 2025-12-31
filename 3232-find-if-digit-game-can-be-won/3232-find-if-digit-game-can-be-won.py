class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        single=doublee=0
        for num in nums:
            if num//10==0:
                single+=num
            else:
                doublee+=num
        return single!=doublee


        
        