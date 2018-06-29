"use strict";

function getSecondsToday() {
    var now = new Date();

    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - today) / 1000);
}

console.log(getSecondsToday());