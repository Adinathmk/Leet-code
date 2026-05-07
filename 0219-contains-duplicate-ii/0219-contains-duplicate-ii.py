class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen={}
        for i,el in enumerate(nums):
            if el in seen and i-seen[el]<=k:
                return True            
            seen[el]=i
        return False

        
            


        