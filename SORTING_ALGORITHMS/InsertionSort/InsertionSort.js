function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
                arr[j] = currentVal;
            }
            console.log(arr, 'check')
        }
    }
    return arr;
}

console.log(insertionSort([5, 3, 1, 2, 4, 6]))