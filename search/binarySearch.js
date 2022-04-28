function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let halfIndex = Math.floor((left + right) / 2);
    if (arr[halfIndex] === num) return halfIndex;
    while (arr[halfIndex] !== num && left <= right) {
        if (num > arr[halfIndex]) {
            left = halfIndex + 1;
        } else {
            right = halfIndex - 1;
        }

        halfIndex = Math.floor((left + right) / 2)
        if (arr[halfIndex] === num) return halfIndex;
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) //1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) //16
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 8)) //7 
console.log(binarySearch([1, 2, 3, 4, 5], 3)) //2