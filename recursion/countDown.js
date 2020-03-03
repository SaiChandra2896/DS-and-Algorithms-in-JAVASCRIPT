//first recursive function
function countDown(n) {
    if (n < 0) {
        console.log('Done and Dusted!')
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

console.log(countDown(9))