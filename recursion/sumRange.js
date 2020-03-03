function sumRange(n) {
    if (n == 1) return 1;
    console.log(n, 'check');
    return n + sumRange(n - 1);
}

console.log(sumRange(4));