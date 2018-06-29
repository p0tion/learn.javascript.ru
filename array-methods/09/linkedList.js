var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListInLoop(list) {
    var tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function printListInLoopReverse(list) {
    var tmp = list;
    var arr = [];

    while (tmp) {
        arr.push(tmp.value)
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i > -1; i--) {
        console.log(arr[i]);
    }
}

function printListInReccurence(list) {
    if (list.next) {
        console.log(list.value);
        printListInReccurence(list.next)
    } else {
        console.log(list.value);
    }
}

function printListInReccurenceReverse(list) {
    if (list.next) {
        printListInReccurenceReverse(list.next)
    }
    console.log(list.value);
}

console.log("---> in loop");
printListInLoop(list);

console.log("---> in reccurence");
printListInReccurence(list);

console.log("---> in reverse loop");
printListInLoopReverse(list);

console.log("---> in reverse reccurence");
printListInReccurenceReverse(list);