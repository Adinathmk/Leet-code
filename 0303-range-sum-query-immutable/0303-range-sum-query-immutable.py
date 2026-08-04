class NumArray:
    def __init__(self, nums: List[int]):
        self._prefix=[0] 

        for num in nums:
            self._prefix.append(self._prefix[-1]+num)

    def sumRange(self, left: int, right: int) -> int:
        return self._prefix[right+1]-self._prefix[left]        

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)