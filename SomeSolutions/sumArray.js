function sumArray(arr, n) {
    if (n > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            //arr[i+j] becz j starts from zero evry time to shift j to ith position to start with
            temp = temp + arr[i + j];
        }
        console.log(temp, 'temp');
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}


sumArray([2, 1, 3, 4, 5, 6, 6, 7, 7, 8, 3, 9, 1, 4, 2], 4);

//sliding window pattern
function sumArrayEfficientversion(arr, n) {
    if (n > arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum = maxSum + arr[i];
        console.log(maxSum, 'assd')
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        // subtracting starting value and adding next value 
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
        console.log(maxSum, 'qwer')
    }
    return maxSum;
}

console.log(sumArrayEfficientversion([2, 1, 3, 4, 5, 6, 6, 7, 7, 8, 3, 9, 1, 4, 2], 4));