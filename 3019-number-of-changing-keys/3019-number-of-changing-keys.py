class Solution:
    def countKeyChanges(self, s: str) -> int:
        return sum((
            s[i].upper()!=s[i-1].upper()
            for i in range(1,len(s))
        ))

            
        