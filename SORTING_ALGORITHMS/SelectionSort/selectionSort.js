//pseudocode in selectionsort.txt file
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr, 'old array')
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            console.log(arr, 'array')
        }
    }
    return arr;
}

console.log(selectionSort([10, 9, 3, 4]));