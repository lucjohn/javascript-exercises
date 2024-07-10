const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
	
};

const sum = function(array) {
	const sum = array.reduce((total, currNum) => {
    return total + currNum;
  }, 0);
  return sum;
};

const multiply = function(array) {
  const product = array.reduce((total, currNum) => {
    return total * currNum;
  }, 1);
  return product;

};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
  if (num == 0 )return 1;
  total = num;
  for(i = num - 1; i > 0; i--){
    total = total * i;
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
