/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let total=0
    for (i = 0; i < s.length; i++) {   

        switch (s[i]){
            case "I":
                if(s[i+1]=="V"||s[i+1]=="X"){
                    break;
                }
                total += 1;
                break;            

            case "V":
                if(s[i-1]=="I"){
                    total +=4
                    break;
                } 
                total += 5;
                break;            

            case "X":
                if(s[i-1]=="I"){
                    total +=9
                    break;
                }
                if(s[i+1]=="L"||s[i+1]=="C"){
                    break;
                } 
                total += 10;
                break;
   
            case "L":
                if(s[i-1]=="X"){
                    total +=40;
                    break;
                }  
                total += 50;
                break;
            
            case "C":
                if(s[i-1]=="X"){
                    total +=90;
                    break;
                }
                if(s[i+1]=="D"||s[i+1]=="M"){
                    break;
                } 
                total += 100;
                break;
            
            case "D":
                if(s[i-1]=="C"){
                    total +=400;
                    break;
                }
                total += 500;
                break;            

            case "M":
                if(s[i-1]=="C"){
                    total +=900;
                    break;
                } 
                total += 1000;
                break;
            
        }
    }
    return total
};