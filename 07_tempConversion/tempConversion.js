const convertToCelsius = function(number) {
  const celsius = (number - 32) * 5 / 9;
  let output = Math.round(celsius * 10) / 10;
  return output;
};

const convertToFahrenheit = function(number) {
  const fahrenheit = (number * ( 9 / 5 ) ) + 32;
  let output = Math.round(fahrenheit * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
