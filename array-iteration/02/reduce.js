"use strict";

function getSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

console.log(getSums([1, 2, 3, 4, 5])); //1,3,6,10,15
console.log(getSums([-2,-1,0,1])); //-2,-3,-3,-2