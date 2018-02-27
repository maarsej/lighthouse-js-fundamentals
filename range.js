function range(start,end,step){

  var x = [];
if (start !== "undefined" && end !== 'undefined' && step !== 'undefined' && start<end && step>0) {
  for (var i = 0; i <= ((end - start) / (step)); i++){
    if (i > 0){
      x[i] = x[i - 1] + step;
    }
    else {
      x[i] = start;
    }
  }
}
  return x;
}

console.log(range(0,8,2));
