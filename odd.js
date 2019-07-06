const isOdd  = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  
}

console.log(isOdd(3));
console.log(isOdd(8));
console.log(isOdd(77));