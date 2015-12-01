/**
 * Created by Администратор on 12/1/2015.
 */
    /*
var x = prompt('введите число');
var n = prompt('введите степень');

var result = 1;

for (var i = 0; i < n; i++) {
    result = result * x;
}
console.log(result);

function pow(a, n) {
    var result = 1;
    for (var i = 0; i < b; i++ ) {
        result = result * a;
    }
    var powResult = pow(x, n);
}
*/
 var arr = [];
 for (var i = 0; i < 5; i++) {
     arr[i] = prompt('Enter user name');
 }
console.log(arr);

var userName = prompt('Enter your name');
var flag = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userName) {
        flag = true;

    }
}
 if (flag) {
     alert(userName + ' confirm!');
 } else {
     alert('User not exist!');
 }