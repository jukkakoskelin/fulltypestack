const calculateBmi = (height, weight) => {
    //Calculate BMI from given height and weight in centimeters
    let result = (weight) / ((height * height)/10000);    
    if (result < 18.5) {
      return "Underweight";
    } else if (result >= 18.5 && result < 25) {
        return "Normal (healthy weight)";
    } else {
        return "Overweight";
    }       
  }
  
  //console.log(calculateBmi(process.argv[2], process.argv[3]))
  if (process.argv.length < 4) {
    throw new Error('Height and weight are required');
}

const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

if (isNaN(height) || isNaN(weight)) {
    throw new Error('Height and weight must be numbers');
}

if (height < 1 || weight < 1) {
    throw new Error('Height and weight must be positive numbers and over 0');
}

console.log(calculateBmi(height, weight));
