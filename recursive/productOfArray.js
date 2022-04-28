const productOfArray = (arr) =>{
    let sum = 1;
    const helper = (arr) =>{
        if(!arr.length) return sum;
        sum = sum * arr[0];
        return helper(arr.slice(1))
    }

    return helper(arr);
};

console.log(productOfArray([1,2,3,10]));