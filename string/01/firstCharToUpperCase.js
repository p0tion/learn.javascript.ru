function ucFirst(str) {
    if (!str.length) {
        return '';
    }
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));
console.log(ucFirst(""));