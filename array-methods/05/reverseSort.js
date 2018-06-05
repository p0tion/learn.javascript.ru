function reverseSort(arr) {
    arr.sort(function (a, b) { return b - a; })
    return arr;
}

var arr = [5, 2, 1, -10, 8];

console.log(reverseSort(arr)); // [8, 5, 2, 1, -10]