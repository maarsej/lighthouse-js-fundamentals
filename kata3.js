var talkingCalendar = function(date) {
  var data = new Date(date);
  var year = data.getFullYear(data);
  var month = data.getMonth(date);
  var day = data.getDate();

var months =["January", "February", "March", "April", "May", "June","July","August","September","October","November","Decemeber"];
monthName = months[month];

  if (day === 1 || day === 21 || day=== 31){
    console.log(monthName, " ", day,"st,",year);
  }
  else if (day === 2 || day === 22){
   console.log(monthName, day + "nd,",year);
  }
  else if(day === 3 || day === 23){
    console.log(monthName, day + "rd,",year);
  }
  else {
   console.log(monthName, day + "th,",year);
  }
};

console.log(talkingCalendar("2017/11/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));