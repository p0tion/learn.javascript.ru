function filterRange(arr, a, b) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);

console.log(filtered);