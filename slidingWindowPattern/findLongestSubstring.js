const findLongestSubstring = (str) => {
    if (!str.length) return 0
    let longest = 0;
    let start = 0;
    const indexesOfCharacters = {}

    for (let i = 0; i < str.length; i++) {
        const character = str[i]
        if (indexesOfCharacters[character]) {
            start = Math.max(start, indexesOfCharacters[character])
        }

        longest = Math.max(longest, i - start + 1)
        indexesOfCharacters[character] = i + 1
    }
    return longest
}

console.log(findLongestSubstring('')) //0
console.log(findLongestSubstring('rithmschool')) //7
console.log(findLongestSubstring('thisisawesome')) //6
console.log(findLongestSubstring('thecatinthehat')) //7
console.log(findLongestSubstring('bbbbbbb')) //1