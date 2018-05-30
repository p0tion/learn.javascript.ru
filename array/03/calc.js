var arr = [];
var val = 0;

do {
    arr.push(val);
    val = prompt('Введите число', 0);

} while (isNumeric(val))

alert(calc(arr));

function calc(obj) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    return sum;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}