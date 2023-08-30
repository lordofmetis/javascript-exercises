const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(myArray) {
	let sum = 0;
  myArray.forEach(element => {
    sum += element;
  })
  return sum;
};

const multiply = function(myArray) {
  let sum = 1;
  myArray.forEach(element => {
    sum *= element;
  })
  return sum;
};

const power = function(a, b) {
	let sum = 1;
  for ( let i = 1; i <= b; i ++) {
    sum *= a;
  }
  return sum;
};

const factorial = function(number) {
	let sum = 1;
  for ( let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
