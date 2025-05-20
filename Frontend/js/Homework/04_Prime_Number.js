let num = Number(prompt("Enter Your Number"));

function isPrime(nums) {
  if (nums < 2) {
    console.log("Number is Not a Prime");
    return;
  }
  if (nums == 2) {
    console.log("Number is a Prime");
    return;
  }
  for (let i = 2; i < nums; i++) {
    if (nums % i == 0) {
      console.log("Number is not a prime");
      return;
    }
  }
  console.log("Number is a prime");
}

isPrime(num);
