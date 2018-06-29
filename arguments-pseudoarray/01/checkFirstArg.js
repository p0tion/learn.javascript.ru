function f(x) {
    if (arguments.length) {
        return 1;
    }
    return 0;
}

f(undefined); // 1
f(); // 0