"use strict";

var options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
};

function formatDate(date) {
    var duration = new Date - date;
    if (duration < 1000) {
        return 'только что';
    }
    if (duration < 60 * 1000) {
        return Math.floor(duration / 1000) + ' сек. назад';
    }
    if (duration < 3600 * 1000) {
        return Math.floor(duration / 60 / 1000) + ' мин. назад';
    }
    return date.toLocaleDateString("ru", options);
}

console.log(formatDate(new Date(new Date - 1)) ); // "только что"
console.log(formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"