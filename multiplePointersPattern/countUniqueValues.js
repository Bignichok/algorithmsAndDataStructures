const countUniqueValues = (arr) => new Set(arr).size;

// const countUniqueValues = (arr) => {
//     let prevValues = {};
//     let result = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(!prevValues[arr[i]]){
//             prevValues[arr[i]] = 1
//             result+=1
//         }
//     }
//     return result
// };


// const countUniqueValues = (arr) => {
//     let i = 0;
//     for(let j = 0; j<arr.length; j++){
//         if(arr[j] !== arr[i]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i+1
// };


console.log(countUniqueValues([1,1,2,3])) //3
console.log(countUniqueValues([1,1])) //1
console.log(countUniqueValues([1,1,2])) //2
// i = 4
//                               2 3 4 5
console.log(countUniqueValues([1,1,2,3,4,5,5])) //5
//                                         j