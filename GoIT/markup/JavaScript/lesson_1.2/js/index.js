/**
 * Created by Администратор on 1/23/2016.
 */
var arr = [];
for (var i = 0;  i < 5; i++) {
  arr[i] = prompt('Enter user name');
}
console.log(arr);

var userName = prompt('please Enter your name');
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
