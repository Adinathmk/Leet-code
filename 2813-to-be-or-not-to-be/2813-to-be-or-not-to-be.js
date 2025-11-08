/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(res)=>{
            if(res===val) return  true
            throw new Error("Not Equal")
        },
        notToBe:(res)=>{
            if(res!==val) return  true
            throw new Error("Equal")
        }
    }
                
};
