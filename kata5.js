var camelCase = function(input) {
  /*overall i dont understand the usage of the /\s/g or /^\w+$/ or \\s searches as well as the RegExp function*/

  var result;
  if (input.match(/\s/g)) {        // assuming checks if spaces?
    var n = input.split(/\s/g);
    for (var i = 1; i < n.length; i++) {
      var upperCase = n[i][0].toUpperCase();
      var regex = new RegExp('\\s' + n[i][0]) //match the target letter when it has a space in front.
      input = input.replace(regex, upperCase)
      //noSpace = input.replace(/\s/g,""); // original code from forum but seemingly had no effect
      result = input;
      // result = noSpace; //was in original forum code
    }
    return result;
  }
  if (input.match(/^\w+$/)) { // assuming this checks if there are no spaces
    result = input            // if original assumption on line 5 is true this 'if' would be redundant?
  }
  return result;
}


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));