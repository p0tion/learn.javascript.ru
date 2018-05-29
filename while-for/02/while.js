var i = 2;

while(i < 11) {
    console.log(i);
    i+=2;
}

var b = 2;

while(b <= 10) {
    if (!(b % 2)) {
        console.log(b);
    }
    b+=2;
}

var c = 2;

while(c <= 10) {
    if (c % 2) {
        c+=2;
        continue;
    }
    console.log(c);
    c+=2;
}