"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {

    let result= [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (func(val)) {
            result.push(val);
        }

    }
    return result;

}

function inBetween(a, b) {
    return function (val) {
        return !(val < a || val > b);
    }
}

function inArray(arr) {
    return function(val) {
        return arr.indexOf(val) != -1;
    }

}

function isEven() {
    return function(val) {
        return val % 2 == 0;
    }
}

console.log(filter(arr, inBetween(3, 6))); //3,4,5,6
console.log(filter(arr, inArray([1, 2, 10]))); //1,2
console.log(filter(arr, isEven())); //2,4,6