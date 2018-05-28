var string = prompt('Введите число', '');

var number = parseInt(string);

if (!isNaN(number)) {
    if (number > 0) {
        alert('1');
    } else if (number < 0) {
        alert('-1');
    } else {
        alert('0');
    }
} else {
    alert('Необходимо ввести число!');
}