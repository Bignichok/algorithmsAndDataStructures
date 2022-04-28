function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const characters1 = {};
    const characters2 = {};
    for (let char of str1) {
        if (characters1[char]) {
            characters1[char] += 1;
        } else {
            characters1[char] = 1;
        }
    }
    for (let char of str2) {
        if (characters2[char]) {
            characters2[char] += 1;
        } else {
            characters2[char] = 1;
        }
    }
    for (let char of str1){
        if(characters1[char] !== characters2[char]){
            return false;
        }
    }

    return true
}

console.log(validAnagram('', ''))//true

console.log(validAnagram('aaz', 'zza'))//false

console.log(validAnagram('anagram', 'nagaram'))//true

function validAnagramRefactored(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const lookup = {};

    for (let char of str1) {
        lookup[char] ? lookup[char]  += 1 : lookup[char] = 1
    }
    for (let char of str2) {
        if(!lookup[char]){
            return false;
        } else {
            lookup[char] -= 1;
        }
    }

    return true
}


console.log(validAnagramRefactored('', ''))//true

console.log(validAnagramRefactored('aaz', 'zza'))//false

console.log(validAnagramRefactored('anagram', 'nagaram'))//true