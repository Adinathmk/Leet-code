class Solution:
    def sumOfMultiples(self, n: int) -> int:
        res=0
        for el in range(0,n+1):
            if el%3==0 or el%5==0 or el%7==0:
                res+=el
        return res


        