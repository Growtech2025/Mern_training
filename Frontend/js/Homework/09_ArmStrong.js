let num = Number(prompt("Enter Your Number"));

let original = num;
let sum = 0;
while (num > 0) {
  let temp = num % 10;
  sum += temp ** 3;
}

if (sum === original) {
  console.log("Number is a ArmStrong Number");
} else {
  console.log("Number is not a ArmStrong Number");
}
