//Radix Sort algorithm
//1. Define a function that accepts list of numbers
//2. Figure out how many digits the largest number has
//3. Loop from k = 0 up to this largest numbers of digits
//4. For each iteration of the loop:
//  4.1 Create digitBuckets for each digit(0 to 9)
//  4.2 place each number in the corresponding bucker based on its kth digit
//5. Replace our existing array with the values in our digitBuckets, starting with 0 and going up to 9
//6. return the sorted list

//helpers
//1
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
//2
const getDigitCount = (num) => {
    return num ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
};
// const getDigitCount = (num) => {
//     return num.toString().length;
// };

//3
const getMaxDigitsCount = (numbers) => {
    return numbers.reduce((acc, num) => {
        acc = Math.max(getDigitCount(num), acc);
        return acc;
    }, 0);
};

const radixSort = (numbers) => {
    const maxDigitsCount = getMaxDigitsCount(numbers);
    for (let k = 0; k <= maxDigitsCount; k++) {
        const digitBuckets = Array.from({ length: 10 }, () => []);
        numbers.forEach((num) => {
            const digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        });

        // numbers = digitBuckets.reduce((acc, bucket) => {
        //     bucket.forEach((num) => acc.push(num));
        //     return acc;
        // }, []);
        // ||

        numbers = [].concat(...digitBuckets);
    }
    return numbers;
};

console.log(radixSort([1, 100, 50, 25, 1002, 330, 125, 123, 155, 238, 12345]));
