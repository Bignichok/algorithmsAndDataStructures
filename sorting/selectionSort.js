const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (arr[min] !== arr[i]) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
};

console.log(selectionSort([1, 5, 11, 88, 10, 2, 12]));
