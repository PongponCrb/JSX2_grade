export default class BMI{
  bmiCalculate(weight, height){
    return weight / height**2;
  }
  bmiCheck(sum, region){
    let temp;
    if(region == 'Asian'){
      if(sum >= 29.9){
        temp = 'Obesity';
      }if(sum >= 24.9 && sum < 29.9){
        temp = 'Overweight';
      }if(sum >= 18.5 && sum < 24.9){
        temp = 'Normal weight';
      }if(sum < 18.5){
        temp = 'Underweight';
      }
    }else{
      if(sum >= 39.9){
        temp = 'Obesity';
      }if(sum >= 34.5 && sum < 39.9){
        temp = 'Overweight';
      }if(sum >= 19.5 && sum < 34.5){
        temp = 'Normal weight';
      }if(sum < 19.5){
        temp = 'Underweight';
      }
    }
    return temp;
  }
}