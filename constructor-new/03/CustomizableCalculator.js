function Calculator() {

    var methods = {
        "+": function(a,b) {
            return a + b;
        },
        "-": function(a,b) {
            return a - b;
        }
    };

    this.calculate = function(expression) {
        var arr = expression.split(' ');
        var a = +arr[0];
        var operand = arr[1];
        var b = +arr[2];
        return methods[operand](a,b);
    };

    this.addMethod = function(op, func) {
        methods[op] = func;
    };
}

var powerCalc = new Calculator;
console.log(powerCalc.calculate("3 + 7")); //10
console.log(powerCalc.calculate("8 - 4")); //4

powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate("2 ** 3")); //8
console.log(powerCalc.calculate("2 * 3")); //6
console.log(powerCalc.calculate("10 / 2")); //5