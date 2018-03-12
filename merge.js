function merge(x,y){
  if (x === "undefined"){
    return y;
  }
  else if (y === "undefined"){
    return x;
  }
  else {
    for (var i = 0; i < y.length; i++){
      x.push(y[i]);
    }
  }
  //for (i = 0; i < x.length; i++){
  x.sort();
  //}
  return x;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);