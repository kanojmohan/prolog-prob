// Duplicate the elements of a list

// var duplicated = a.map(function(item) {
//     return [item, item];
// }).reduce(function(a, b) { return a.concat(b) });

// //duplicated: [2, 2, 3, 3, 1, 1, 4, 4]

a = [2, 3, 1, 4];
b = [];

for (var i = 0; i < a.length; ++i) {
  b.push(a[i]);
  b.push(a[i]);
}
console.log((a = b));

a = b;
