function calculateChange(total, cash) {
  var remainder = cash - total;
  var changeDue = {};
    if ((remainder - (remainder % 2000)) % 2000 == 0) {
      changeDue.twentyDollar = (remainder - (remainder % 2000)) / 2000;
      remainder = remainder % 2000;
        if (changeDue.twentyDollar == 0)
          delete changeDue.twentyDollar;
    }
    if ((remainder - (remainder % 1000)) % 1000 == 0) {
      changeDue.tenDollar = (remainder - (remainder % 1000)) / 1000;
      remainder = remainder % 1000;
        if (changeDue.tenDollar == 0)
          delete changeDue.tenDollar;
    }
    if ((remainder - (remainder % 500)) % 500 == 0) {
      changeDue.fiveDollar = (remainder - (remainder % 500)) / 500;
      remainder = remainder % 500;
        if (changeDue.fiveDollar == 0)
          delete changeDue.fiveDollar;
    }
    if ((remainder - (remainder % 200)) % 200 == 0) {
      changeDue.twoDollar = (remainder - (remainder % 200)) / 200;
      remainder = remainder % 200;
        if (changeDue.twoDollar == 0)
          delete changeDue.twoDollar;
    }
    if ((remainder - (remainder % 100)) % 100 == 0) {
      changeDue.dollar = (remainder - (remainder % 100)) / 100;
      remainder = remainder % 100;
        if (changeDue.dollar == 0)
          delete changeDue.dollar;
    }
    if ((remainder - (remainder % 25)) % 25 == 0) {
      changeDue.quarter = (remainder - (remainder % 25)) / 25;
      remainder = remainder % 25;
        if (changeDue.quarter == 0)
          delete changeDue.quarter;
    }
    if ((remainder - (remainder % 10)) % 10 == 0) {
      changeDue.dime = (remainder - (remainder % 10)) / 10;
      remainder = remainder % 10;
        if (changeDue.dime == 0)
          delete changeDue.dime;
    }
    if ((remainder - (remainder % 5)) % 5 == 0) {
      changeDue.nickel = (remainder - (remainder % 5)) / 5;
      remainder = remainder % 5;
        if (changeDue.nickel == 0)
         delete changeDue.nickel;
    }
    if ((remainder - (remainder % 1)) % 1 == 0) {
      changeDue.penny = (remainder - (remainder % 1)) / 1;
      remainder = remainder % 1;
        if (changeDue.penny == 0)
          delete changeDue.penny;
    }
    return changeDue;
  }

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
