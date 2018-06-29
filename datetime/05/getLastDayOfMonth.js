"use strict";

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); //29 (високосный год, февраль)