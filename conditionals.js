const raining = true;
const cold = true;
/*
if (raining) {
  console.log("dont forget your umbrella ella ella eh eh eh");
}

if (cold) {
  console.log("make sure you pick out a scarf");
}

console.log("now youre ready to go outside");
*/

const temperature = -5;
/*
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/


const isCitizen = true;
const age = 26;
/*
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
*/
/*
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
*/

const whichSchool = function (age) {
  // if age is less than 13 print Elementary School
  if (age < 13) {
    console.log("Elementary School if " + age + " is below 13");
  }
  // if age is greater than or equal to 13 and less than or equal to 18 print Secondary School
  else if ((age >= 13) && (age <= 18)) {
    console.log("Secondary School if " + age + " is between 13 and 18");
  } else {
    //print Lighthouse labs in all other instances
    console.log("Lighthouse Labs in all other cases");
  }
  return whichSchool;
}
console.log(whichSchool(19));
