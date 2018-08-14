var calculator = {
    read: function() {
        this.a = parseInt(prompt('введите первое число', 0));
        this.b = parseInt(prompt('введите второе число', 0));
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());