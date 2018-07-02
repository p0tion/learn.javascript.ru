function makeBuffer() {
    var text = '';

    function buff(input) {
        if (arguments.length == 0) {
            return text;
        }
        text += input;
    };

    buff.clear = function () {
        text = '';
    };

    return buff;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer()); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log(buffer2()); // '010'

var buffer3 = makeBuffer();

buffer3("Тест");
buffer3(" тебя не съест ");
console.log(buffer3()); // Тест тебя не съест

buffer3.clear();

console.log(buffer3()); // ""