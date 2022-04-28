const minSubArrayLength = (numbers, value) =>{
    let result = 0;
    let tempSum = 0; 
    for(let i =0; i < numbers.length; i++){
        tempSum += numbers[i]
        if(tempSum > value){
            return 
        } else if (tempSum === value){
            return result = i + 1;
        }
    }
    return result;
}

console.log(minSubArrayLength([2,3,1,2,4,3],7)) //2
// console.log(minSubArrayLength([2,1,6,5,4],9))//2
// console.log(minSubArrayLength([3,1,7,11,2,9,8,21,62,33,19],52))//1
// console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],39))//3
// console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],55))//5
// console.log(minSubArrayLength([4,3,3,8,1,2,3],11))//2
// console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],95))//0