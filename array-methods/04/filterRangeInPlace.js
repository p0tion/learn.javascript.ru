function filterRangeInPlace(arr, begin, end) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < begin || arr[i] > end) {
            arr.splice(i--, 1);
        }
    }
}

var array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4);

console.log(array);