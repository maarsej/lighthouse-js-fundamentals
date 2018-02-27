function lastIndexOf(x, y) {
  var spot = -1;
  if (x !== "undefined"){
    for (var i = 0; i < x.length; i++) {
      if (x[i] === y) {
        spot = i;
      }
    }
  }
  return spot
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);