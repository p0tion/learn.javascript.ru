function truncate(str, maxlength) {
    var truncatedStr = str;
    if (str.length > maxlength) {
        truncatedStr = str.slice(0, maxlength - 3) + '...';
    }
    return truncatedStr
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)); // "Вот, что мне хоте..."
console.log(truncate('Всем привет!', 20)); // "Всем привет!"