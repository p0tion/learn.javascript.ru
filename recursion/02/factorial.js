function factorial(n) {
    var sum = 1;
    if (n > 0) {
        sum = n * factorial(n - 1);
    }
    return sum;
}

factorial(5); //120