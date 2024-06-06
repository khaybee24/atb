Switch Statement syntax
switch (expression) {
  case x:
    // code to be executed if expression === x
    break;
  case y:
    // code to be executed if expression === y
    break;
  default:
  // code to be executed if expression does not match any cases
}
Ternary Operator syntax
condition ? expression1 : expression2;


Template Literals
Template literals are string literals allowing embedded expressions.
let bunny_name = 'Peter';
let bunny_color = 'white';
// old way
console.log(
  "My bunny's name is " + bunny_name + ' and his color is ' + bunny_color
);


// new way
console.log(`My bunny's name is ${bunny_name} and his color is ${bunny_color}`);


If and else statement
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}// 


check if bunny is healthy
let bunny = 'healthy';
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
} else {
  console.log('Bunny is needs to see the vet');
}
Example
// check if bunny is healthy
let bunny = 'healthy';
if (bunny === 'healthy') {
  console.log('Bunny is healthy');
} else if (bunny === 'sick') {
  console.log('Bunny is needs to see the vet');
} else {
  console.log('Bunny health status unknown');
}


If Else If Statement syntax
if (condition) {
  // code to be executed if condition is true
} else if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}

class quiz
Write an if-else statement in JavaScript that checks whether a given integer num is even or odd. If num is even, print "The number is even." Otherwise, print "The number is odd."


Exception Handling
These are ways of handling errors in your code. They allow you to catch errors and handle them in a way that makes sense for your application.
Examples
Throw statement
function sumBunnies(blackBunnies, whiteBunnies) {
  if (typeof blackBunnies !== number && typeof whiteBunnies !== number) {
    throw new Error('blackBunnies and whiteBunnies must be numbers');
  }
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

sumBunnies(10, 20);

// result: 30
In the above code, If the blackBunnies and whiteBunnies parameters are not numbers, the function will throw an error.

Try Catch statement
function sumBunnies(blackBunnies, whiteBunnies) {
  if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
    throw new Error('blackBunnies and whiteBunnies must be numbers');
  }
  var totalBunnies = blackBunnies + whiteBunnies;
  return totalBunnies;
}

try {
  sumBunnies(10, 20);
} catch (error) {
  console.log(error);
}


