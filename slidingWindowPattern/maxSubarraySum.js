// const maxSubarraySum = (numbers, subarrayLength) =>{
//     if(subarrayLength > numbers.length) return null
//     let maxSum = 0;
//     for(let i = 0; i + subarrayLength <= numbers.length; i++ ){
//         let tempMaxSum = numbers[i];
//         for(let j =i + 1; j < i + subarrayLength; j++){
//             tempMaxSum += numbers[j]
//             if(tempMaxSum > maxSum) {
//                 maxSum = tempMaxSum
//             }
//         }
//     }

//     return maxSum
// }

const maxSubarraySum = (numbers, subarrayLength) =>{
    if(subarrayLength > numbers.length) return null
    let maxSum = 0;

    for(let i = 0; i < subarrayLength; i++){
        maxSum += numbers[i]
    }
    let tempSum = maxSum;
    for(let i = subarrayLength; i < numbers.length; i++ ){
        tempSum = tempSum - numbers[i - subarrayLength] + numbers[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([100,200,300,400],2)) //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)) //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) //5
console.log(maxSubarraySum([3,-2,7,-4,1,15,-1,4,-2,1,10,3,-2,7,-4,1,-1,4,-2,1],5)) //15
console.log(maxSubarraySum([2,3],3)) //null