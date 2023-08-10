const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

const calculateBMI = () => {
  const heightValue = height.value / 100;
  const weightValue = weight.value;

  const bmi = weightValue / (heightValue * heightValue).toFixed(2);

  bmiResult.value = bmi.toFixed(2);

  if (bmi < 18.5) {
    weightCondition.innerText = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    weightCondition.innerText = "Normal";
  } else if (bmi >= 24.9 && bmi <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if ((bmi) => 30) {
    weightCondition.innerText = "Obesity";
  }
};

btn.addEventListener("click", calculateBMI);
