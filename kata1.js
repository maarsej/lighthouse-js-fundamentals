var repeatNumbers = function(data){

  var newNumber = "";

  for (var i = 0; i < data.length; i++){ //counting through rows
    if (i > 0){
      newNumber += ", "; //add comma for every row of data
    }

    for (var j = 0; j < data[i][1]; j++){ //add look at column 2 for repetitions
      newNumber += data[i][0];            //add column 1 every count
    }
  }
  return newNumber;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3],[3,4]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));