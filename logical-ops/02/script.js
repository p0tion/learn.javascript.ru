var val = prompt('Please enter an age:');

if (!val) {
    alert('Please enter a number');
} else {
    var age = parseInt(val);
    if  (isNaN(age)) {
        alert("Please enter a number");
    } else if (age < 14 || age > 90) {
        alert('The value is not within the range!');
    } else {
        alert('The value is within the range!');
    }
}