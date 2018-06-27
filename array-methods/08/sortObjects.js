function compareByAge(a, b) {
    return a.age - b.age;
}

function getNames(arr) {
    var namesArray = [];
    for (var i = 0; i < arr.length; i++) {
        namesArray.push(arr[i].name);
    }
    return namesArray.join(" ");
}

var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};
var galya = {name: "Галя", age: 20};

var people = [vasya, galya, masha, vovochka];

console.log("Before sorting: " + getNames(people));
people.sort(compareByAge);
console.log("After sorting: " + getNames(people));