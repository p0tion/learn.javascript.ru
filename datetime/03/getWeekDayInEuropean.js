"use strict";

var date = new Date(2012, 0, 3);  // 3 января 2012

function getWeekDayInEuropean(date) {
    var day = date.getDay();
    if (day === SUNDAY) {
        return 7;
    }
    return day;
}

console.log(getWeekDayInEuropean(date));    // Должно вывести 2