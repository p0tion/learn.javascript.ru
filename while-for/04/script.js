var input = prompt('Введите число > 100', '');

while(input != null && input < 101) {
    input = prompt('Ошибка! Введите число > 100', '');
}