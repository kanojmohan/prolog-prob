// Calculate Euler's totient function phi(m).

const GCD = require("./q2-07");

function Phi(n) {
  var result = { phi: 1, coprimes: [1] };
  for (var i = 2; i < n; i++) {
    if (GCD.gcd(i, n) == 1) {
      result.phi += 1;
      result.coprimes.push(i);
    }
  }
  return result;
}
console.log(Phi(10));
