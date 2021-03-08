// Modified run-length encoding

const inputArr = [
    "a",
    "a",
    "a",
    "a",
    "b",
    "c",
    "c",
    "a",
    "a",
    "d",
    "e",
    "e",
    "e",
    "e",
  ];
  
  function encode(arr) {
    let encoding = [];
    previous = arr[0];
    count = 1;
  
    for (i = 1; i < arr.length; i++) {
      if (arr[i] !== previous) {
        console.log([count, previous]);
        encoding.push([count, previous]);
        console.log(encoding);
        count = 1;
        previous = arr[i];
      } else {
        count++;
      }
    }
    /**
     * Add a last pair
     */
    encoding.push(count, previous);