"use strict";
const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

var date = new Date(2012, 0, 3);  // 3 января 2012

function getWeekDay(date) {
    var day = date.getDay();
    switch (day) {
        case SUNDAY:
            return 'вс';
        case MONDAY:
            return 'пн';
        case TUESDAY:
            return 'вт';
        case WEDNESDAY:
            return 'ср';
        case THURSDAY:
            return 'чт';
        case FRIDAY:
            return 'пт';
        case SATURDAY:
            return 'сб';
    }
}

console.log(getWeekDay(date));    // Должно вывести 'вт'