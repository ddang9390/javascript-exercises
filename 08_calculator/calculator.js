const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(vals) {
	let total = 0;
  vals.forEach(val => {
    total += val;
  });
  return total;
};

const multiply = function(vals) {
  let total = 1;
  vals.forEach(val => {
    total *= val;
  });
  return total;
};

const power = function(num1, num2) {
	let i = num2;
  let total = num1;
  while(i > 1){
    total *= num1;
    i--;
  }
  return total;
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  }
	let total = num;
  let i = num-1;
  while(i > 0){
    total *= i;
    i--;
  }
  return total;
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
