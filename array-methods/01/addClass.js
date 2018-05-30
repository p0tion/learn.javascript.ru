function addClass(obj, str) {
    var arr = obj.className.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return;
        }
    }
    obj.className = obj.className + " " + str;
}

var obj = {
    className: 'open menu'
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);