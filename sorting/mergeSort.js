//  merge explanation
// 1. Create an empty array, take a look at the smallest values in each input array
// 2. while there are still values we haven`t look at...
//  2.1 if the value in the first array is smaller than the value in the second array,
//      push the value in the first array into our results and move on to the next value
//      in the firs array
//  2.2 if the value in the first array is larger than the value in the second array,
//      push the value in the second array into our results and move on to the next value
//      in the second array
//  2.3 once we exhaust one array, push in all remaining values from the other array

const merge = (arr1, arr2) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        result.push(arr1[i]);
        i++;
    }

    while (arr2.length > j) {
        result.push(arr2[j]);
        j++;
    }

    return result
}

//  mergeSort explanation
// 1. Break up the array into halves until you have arrays that are empty
//    or have one element
// 2. Once you have smaller sorted arrays, merge those arrays with other
//    sorted arrays until you are back at the full length of the array
// 3. Once the array has been merged back together, return the merged (and sorted) array

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(mid))
    const arr2 = mergeSort(arr.slice(0, mid))
    return merge(arr1, arr2)
}

console.log(mergeSort([1, 5, 2,22,11, 4, 3, 9]))