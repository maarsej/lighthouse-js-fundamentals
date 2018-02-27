var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i= 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i = i + 1;
}

for (n=0; n< ingredients.length; n++) {
  console.log(ingredients[n]);
}

for (n = ingredients.length - 1; n > -1; n--){
  console.log(ingredients[n]);
}
