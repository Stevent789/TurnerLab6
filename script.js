// console.log("This program is taking the temperature(85 degrees Fahrenheit) and converting it into degrees Celsius.")
//
// var temperature = 85;
//
// var conversion = (temperature - 32) * 5 / 9;
//
// console.log(conversion);

function convertTemp(temperature, type) {
  if (temperature > 0){
  console.log((temperature - 32) * 5/9 + type);
} else {
  console.log((temperature * 9/5) + 32 + type);
}
}

convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(0, "F"); // > 32
