// Duplicate the elements of a list

a = [2, 3, 3, 1, 4];

function duplicate(list) {
  b = [];
  for (var i = 0; i < a.length; ++i) {
    b.push(a[i]);
    b.push(a[i]);
  }
  return b;
}
console.log(duplicate(a));
