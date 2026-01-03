    /**
    * @param {number} num
    * @return {number}
    */
   var addDigits = function(num) {
    while (num >= 10) {
        let summ = 0;
        while (num > 0) {
            summ += num % 10;
            num = Math.floor(num / 10);
        }
        num = summ;
    }
    return num;
};
