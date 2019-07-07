function calculateRectangleArea(length, width) {
  var rect = length * width;
  if (rect <= 0) {
    return undefined;
  }
  return rect;
}
function calculateTriangleArea(base, height) {
  var tri = (base * height) / 2;
  if (tri <= 0) {
    return undefined;
  }
  return tri;
}
function calculateCircleArea(radius) {
  var circ = Math.PI * (radius * radius);
  if (circ <= 0) {
    return undefined;
  }
  return circ;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined