function compareNumericAsc(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function compareNumericDesc(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

var arr = [5, 2, 1, -10, 8];

console.log(arr.sort(compareNumericAsc));
console.log(arr.sort(compareNumericDesc));