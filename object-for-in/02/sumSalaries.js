"use strict";

function sumSalaries(obj) {
    var sum = 0;
    for (var key in obj) {
        sum += obj[key]
    }
    return sum;
}

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

console.log(sumSalaries(salaries)); // 650