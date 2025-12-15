class Solution:
    def isPalindrome(self, x: int) -> bool:
        number=list(str(x))
        number_length=len(number)
        output=True
        for i in range(number_length//2):
            if number[i]==number[number_length-1-i]:
                continue
            else:
                output=False
                break
        return output

        
        