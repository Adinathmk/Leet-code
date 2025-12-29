function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; 

    let prefix = ''; 
    let minLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minLength) {
            minLength = strs[i].length;
        }
    }
    for (let i = 0; i < minLength; i++) {
        let char = strs[0][i];
        let allMatch = true;

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                allMatch = false;
                break;
            }
        }

        if (allMatch) {
            prefix += char; 
        } else {
            break;
        }
    }

    return prefix;
}

