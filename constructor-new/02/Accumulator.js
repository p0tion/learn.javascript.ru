function Accumulator(initialValue) {
    this.value = initialValue;
    this.read = function() {
        this.value += +prompt('введите число', 0);
    }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение