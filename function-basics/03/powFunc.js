function pow(value, times) {
    var answer = value;
    if (times < 0 || Math.round(times) != times) {
        return NaN;
    }
    if (times === 0 && value === 0) {
        return NaN;
    }
    if (times === 0) {
        return 1;
    }
    for (var i = 1; i < times; i++) {
        answer *= value
    }
    return answer;
}