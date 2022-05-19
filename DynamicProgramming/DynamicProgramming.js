//O(2^n)

const fib = (num) => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

//O(n)
const memoizedFib = (n, memo = {}) => {
    if (n <= 2) return 1;
    if (memo[n]) return memo[n];
    memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    return memo[n]
};
// console.log(fib(50))
// console.log(memoizedFib(100))

const tabulatedFib = (n) => {
    if (n <= 2) return 1;
    const fibNumbers = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    };
    return fibNumbers[n];
}

console.log(tabulatedFib(1000))