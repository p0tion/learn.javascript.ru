var login = prompt('Введите логин', '');
var password;

if (login === null) {
    alert('Вход отменен');
} else {
    if (login.toLowerCase() !== 'админ') {
        alert('Я вас не знаю!');
    } else {
        password = prompt('Введите пароль', '');
        if (password === null) {
            alert('Вход отменен')
        } else {
            if (password.toLowerCase() !== 'черный властелин') {
                alert('пароль неверный');
            } else {
                alert('Добро пожаловать!');
            }
        }
    }
}