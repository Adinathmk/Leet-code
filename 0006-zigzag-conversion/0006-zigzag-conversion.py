class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        res = [[] for _ in range(numRows)]
        row = 0
        direction = 1  # +1 = down, -1 = up

        for ch in s:
            res[row].append(ch)

            if row == 0:
                direction = 1
            elif row == numRows - 1:
                direction = -1

            row += direction

        return ''.join(''.join(r) for r in res)
