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
  
  console.log(calculateBmi(180, 74))