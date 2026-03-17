class Solution:
    def countCharacters(self, words, chars):
        total = 0
        base = {}
        for c in chars:
            base[c] = base.get(c, 0) + 1

        for word in words:
            temp = base.copy()
            valid = True

            for ch in word:
                if temp.get(ch, 0) > 0:
                    temp[ch] -= 1
                else:
                    valid = False
                    break

            if valid:
                total += len(word)

        return total