function findValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

var arr = ["test", 2, 1.5, false];

console.log(findValue(arr, "test")); // 0
console.log(findValue(arr, 2)); // 1
console.log(findValue(arr, 1.5)); // 2

console.log(findValue(arr, 0)); // -1