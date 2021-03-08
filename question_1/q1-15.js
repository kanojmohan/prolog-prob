// Duplicate the elements of a list a given number of times.a = [2, 3, 3, 1, 4];
a = [2, 3, 3, 1, 4];
function duplicateNtimes(list, n) {
  b = [];
  for (var i = 0; i < a.length; ++i) {
    for (var j = 0; j < n; j++) {
      b.push(a[i]);
    }
  }
  return b;
}
console.log(duplicateNtimes(a, 3));
