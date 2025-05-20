let num = Number(prompt("Enter Your Number"));
let original = num;
function factorial(nums) {
  let result = 1;
  for (let i = 1; i <= nums; i++) {
    result *= i;
  }
  return result;
}
let sum = 0;
while (num > 0) {
  let temp = num % 10;
  sum += factorial(temp);
  num = Math.floor(num / 10);
}

if (sum === original) {
  console.log("Number is a Strong Number");
} else {
  console.log("Number is not a Strong Number");
}
