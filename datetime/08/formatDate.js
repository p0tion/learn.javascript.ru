"use strict";

var options = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric'
};

console.log(new Date(2001, 0, 1).toLocaleString("ru", options)); //01.01.01
console.log(new Date(2014, 0, 30).toLocaleString("ru", options)); //30.01.14