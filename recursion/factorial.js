function factorial_iterative(n) {
    if (n === 0) {
        return 1;
    }
    let total = 1;
    for (let i = 1; i <= n; i++) {

        total = total * i;
        console.log(total, 'as')
    }
    return total;
}

console.log(factorial_iterative(4));

function factorial_recursive(n) {
    if (n === 0) return 1;
    return n * factorial_recursive(n - 1)
}

console.log(factorial_recursive(3));