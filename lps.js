function printSubStr(str, low, high) {
    let subStr = '';
    for (let i = low; i <= high; i++) {
        subStr = subStr + str[i];
    }
    console.log("Output: " + subStr);
}

function LongestPalindromicSubStr(str) {
    let n = str.length;
    let maxLength = 1;
    let start = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <n; j++) {
            let temp = 1;

            for (let k = 0; k < (j-i+1)/2; k++) {
                if (str[i+k] != str[j-k]) {
                    temp = 0;
                }
            }

            if (temp != 0 && (j-i+1) > maxLength) {
                start = i;
                maxLength = j-i+1;
            }
        }
    }

    console.log("Input: " + str);
    printSubStr(str, start, start+maxLength-1);
}


let str = "babad"; // change string here
console.log(LongestPalindromicSubStr(str));