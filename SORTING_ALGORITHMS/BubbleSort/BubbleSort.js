//Pseudocode is in bubblesort.txt file
function bubbleSortUnoptimized(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSortUnoptimized([10, 9, 3, 4]))

function bubbleSortOptimized(arr) {
    for (let i = arr.length; i > 0; i--) {
        //reduce time for nearly sorted array
        let noswaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noswaps = false;
            }
        }
        console.log('one pass complete');
        if (noswaps) break;
    }
    return arr;
}

console.log(bubbleSortOptimized([10, 9, 3, 4]))