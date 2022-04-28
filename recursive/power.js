function power(num, pow){
    if(pow === 0) return 1;
    if(pow < 2) return num;
    return num * power(num, pow - 1);
}

console.log(power(3,3))
