//naive solution
// const sameFrequency = (num1,num2) => {
//     const num1String = num1.toString();
//     const num2String = num2.toString();
//     if(num1String.length !== num2String.length) return false;
//     const numbers1 = {};
//     const numbers2 = {};

//     for(let num of num1String){
//         if(numbers1[num]){
//             numbers1[num] +=1;
//         } else {
//             numbers1[num] =1;
//         }
//     }

//     for(let num of num2String){
//         if(numbers2[num]){
//             numbers2[num] +=1;
//         } else {
//             numbers2[num] =1;
//         }
//     }    

//     for(let num of num1String){
//         if(numbers1[num] !== numbers2[num]){
//             return false
//         }
//     }

//     return true
// }

//Refactored
const sameFrequency = (num1, num2) => {
    const num1String = num1.toString();
    const num2String = num2.toString();
    if (num1String.length !== num2String.length) return false;
    const lookup = {};

    for (let num of num1String) {
        if (lookup[num]) {
            lookup[num] += 1;
        } else {
            lookup[num] = 1;
        }
    }

    for (let num of num2String) {
        if (!lookup[num]) {
            return false
        } else {
            lookup[num] -= 1;
        }
    }

    return true
}

console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false