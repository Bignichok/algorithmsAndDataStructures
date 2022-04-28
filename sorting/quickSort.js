// pivot explanation 
// 1. it will help to accept three arguments: an array, a start index, and an end index
// (these can default to 0 and the array length minus 1, respectively)
// 2. Grab the pivot from the start of the array
// 3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// 4. Loop through the array from the start until the end
//    4.1 if the pivot is greater than the current element, increment the pivot index variable and then
//         swap the current element with the element at the pivot index
// 5. Swap the starting element(i.e. the pivot) with the pivot index
// 6. return the pivot index
const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])) // 3

// 1. call the pivot helper on the array
// 2. when the helper returns to you the updated pivot index, recursively call the pivot helper
//    on the subarray to the left of that index, and the subarray to the right of that index
// 3. your base case occurs when you consider a subarray with less than 2 elements

const quickSort = (arr, left = 0, right = arr.length -1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr;
}

console.log(quickSort([21,1,8,10,5,3,4,5,97,8,2,55,44]))