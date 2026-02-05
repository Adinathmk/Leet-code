class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min=prices[0]
        max_profit=0         
        for i in prices:
            if i<min:
                min=i
                continue
            if i-min>max_profit:
                max_profit=i-min
        return max_profit


        