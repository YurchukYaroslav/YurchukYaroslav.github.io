/**
 * Created by yar on 1/23/2016.
 */
function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
  result *= x;
  }
  return result;
};

var x = prompt('add a number', '');
var n = prompt('add an exponent', '');

if(n <= 1) {
  alert('Exponent ' + n + ' is not avalible, enter number > 1');
} else {
  alert( pow(x, n));
}


