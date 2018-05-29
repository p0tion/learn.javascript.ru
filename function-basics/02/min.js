var first = assignValue(prompt('Введите первое значение: ', ''))
var second = assignValue(prompt('Введите второе значение: ', ''))

alert(findMin(first, second));


function assignValue(input) {
    return +input;
}

function findMin(left, right) {
    console.log("left: " + left);
    console.log("right: " + right);
    if (isNaN(left) || isNaN(right)) return 'you must enter numbers';
    return left < right ? left : right < left ? right : 'the numbers are equal'
}