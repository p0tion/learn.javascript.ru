var arr = ["HTML", "JavaScript", "CSS"];

function copyAndSort(arr) {
    return arr.slice(0).sort();
}

var arrSorted = copyAndSort(arr);

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)