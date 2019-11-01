//add numbers 1 to n
//sol1
function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpto(3));

//sol2
function addUpto2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpto2(3));

// let t1 = performance.now();
// addUpto(1000000000);

// let t2 = performance.now();
// // addUpto2(1000000000);
