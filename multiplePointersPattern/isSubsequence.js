const isSubsequence = (str1, str2) => {
    let result = '';
    let i = 0;
    let j = 0;

    while (result.length < str1.length) {
        if (str1[i] === str2[j]) {
            result += str1[i];
            i++;
        } else if (j < str2.length) {
            j++;
        } else {
            return false;
        }
    }

    return result === str1;
}

// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
// }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false