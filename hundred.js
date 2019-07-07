/*function howManyHundreds(num) {
  let properNum = 100 % num; //cant use this apparently
  return math.floor(properNum);
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0); */

function howManyHundreds (num) {
  var division = num / 100; // divide the number by 100
  return math.floor(division); // round the number using math.floor
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
