function removeClass(obj, str) {
    var arr = obj.className.split(" ");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== str) {
            newArr.push(arr[i]);
        }
    }
    return obj.className = newArr.join(" ");
}

var obj = {
    className: 'my menu menu'
};
removeClass(obj, 'menu');
console.log( obj.className ); // 'my'

var obj = {
    className: 'open menu menu'
};

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
console.log(obj.className) // open