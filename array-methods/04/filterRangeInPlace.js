function filterRangeInPlace(arr, min, max) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            arr.splice(i--, 1)
        }
    }
    return arr;
}

var arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr,1 ,4));