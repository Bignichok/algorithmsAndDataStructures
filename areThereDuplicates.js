//areThereDuplicates Solution (Frequency Counter)
// function areThereDuplicates() {
//     let collection = {}
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true
//     }
//     return false;
// }

//areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

const areThereDuplicates = (...args) => {
    return new Set(args).size !== args.length
}

console.log(areThereDuplicates(1, 2, 3)) //false
console.log(areThereDuplicates(1, 1, 2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true