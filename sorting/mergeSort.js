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


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(mid))
    const arr2 = mergeSort(arr.slice(0, mid))
    return merge(arr1, arr2)
}

console.log(mergeSort([1, 5, 2,22,11, 4, 3, 9]))