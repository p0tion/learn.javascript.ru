function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

/*----------------------------------------------------*/

function checkAge2(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge3(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

