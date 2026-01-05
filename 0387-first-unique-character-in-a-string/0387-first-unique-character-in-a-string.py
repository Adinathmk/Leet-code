class Solution:
    def firstUniqChar(self, s: str) -> int:
        chars={}
        for el in s:
            if el not in chars:
                chars[el]=1
            else:
                chars[el]+=1
        for char in chars:
            if chars[char]==1:
                return s.index(char)
        return -1

        