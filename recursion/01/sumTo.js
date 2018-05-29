function sumTo(n) {
    var sum = 0;
    for (var i =1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

sumTo(100);

/*---------------------------------------*/

function sumTo(n) {
    var sum = 0;
    if (n > 0) {
        sum = n + sumTo(n-1);
    }
    return sum;
}

sumTo(100);

/*---------------------------------------*/

function sumTo(n) {
    return (n * (n + 1))/2;
}

sumTo(100);