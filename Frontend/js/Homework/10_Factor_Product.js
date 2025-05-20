let num = Number(prompt("Enter Your Number"));
let sum = 1;
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    sum *= i;
  }
}
if (num === sum) {
  console.log(`${num} is a Perfect Number`);
} else {
  console.log(`${num} is not a Perfect Number`);
}
