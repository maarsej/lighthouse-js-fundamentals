function whichSchool(age) {
  if (age<13){
    return "Elemantary School"
  }
  else if (age<19 && age>12){
    return "High School"
  }
  else{
    return "Lighthouse Labs"
  }
}

console.log(whichSchool(14));