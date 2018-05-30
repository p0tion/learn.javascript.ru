// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}