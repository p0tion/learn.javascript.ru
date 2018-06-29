"use strict";

function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }

    var uniques = [];
    for (var key in obj) {
        uniques.push(obj[key]);
    }
    return uniques;
}

var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings)); // кришна, харе, 8-()