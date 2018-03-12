var multiplicationTable = function(maxValue) {
var table = "";
var x = 1;
var highestMultiple = maxValue * maxValue;
var border = ("+--" + "-".repeat(highestMultiple.toString().length - x.toString.length + 1)).repeat(maxValue) + "\+\n";
table += border;
for (i = 1; i <= maxValue; i ++) {
  if (i == maxValue) {
    table += "| " + (x * maxValue) + " ".repeat(highestMultiple.toString().length - (x  * maxValue).toString().length + 1) + "|\n";
    table += border;
    x ++;
    if (x > maxValue) {
      break;
    }
    else
      table += "| " + x + " ".repeat(highestMultiple.toString().length - x.toString().length + 1);
      i = 1
  }
  else
    table += "| " + (i * x) + " ".repeat(highestMultiple.toString().length - (i * x).toString().length + 1);
}
return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


/*var multiplicationTable = function(maxValue) {
  var array = [[],[]];
  for (i = 0; i < maxValue; i++){
    for (j = 0; j < maxValue; j++){
      array[[i][j]] = (i+1)*(j+1);
    }
  }
  return array;
};

//console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
// console.log(multiplicationTable(10)); */ //original attempt, couldnt make 2D array work? Ask in follow up