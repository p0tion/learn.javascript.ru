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

    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function printListInLoopReverse(list) {
    
}

function printListInReccurenceReverse(list) {

}

console.log("---> in loop");
printListInLoop(list);

console.log("---> in reccurence");
printListInReccurence(list);