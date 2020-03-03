function sumArray(arr, n) {
    if (n > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp = temp + arr[i + j];
        }
        console.log(temp, 'temp');
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}


//                 i
sumArray([2, 1, 3, 4, 5, 6, 6, 7, 7, 8, 3, 9, 1, 4, 2], 4);
//           j