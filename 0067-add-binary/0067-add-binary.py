class Solution:
    def addBinary(self, a: str, b: str) -> str:
        i=len(a)-1
        j=len(b)-1
        out=''
        carry=0
        while i>=0 or j>=0 or carry:
            res=carry
            if i>=0:
                res+=int(a[i])
                i-=1
            if j>=0:
                res+=int(b[j])
                j-=1            
            out=str(res%2)+out
            carry=res//2
        return  out
