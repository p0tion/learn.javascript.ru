"use strict";

function findNameWithMaxValue(obj) {
    var max = 0;
    var name = "";
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            name = key;
        }
    }
    return name;
}

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

console.log(findNameWithMaxValue(salaries) || 'nothing to show'); // "Петя"