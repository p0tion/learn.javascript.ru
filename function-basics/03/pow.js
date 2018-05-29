var value = assignValue(prompt('Введите первое значение: ', ''))
var times = assignValue(prompt('Введите второе значение: ', ''))

validateInputs();

alert(pow(value, times));


function assignValue(input) {
    return +input;
}

function validateInputs(value, times) {
    console.log("left: " + value);
    console.log("right: " + times);
    if (isNaN(value) || isNaN(times)) return 'you must enter numbers';
}

