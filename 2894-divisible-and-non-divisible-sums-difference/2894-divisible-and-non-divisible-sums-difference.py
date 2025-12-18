class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1=0
        num2=0
        for el in range(1,n+1):
            if el%m!=0:
                num1+=el
            else:
                num2+=el
        return num1-num2

        