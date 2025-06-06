// console.log("hey we are in js 13 class ");

// function addTwoNumbers(a, b) {
//     return a + b;
// }
// console.log(addTwoNumbers(10, 20));
// console.log(addTwoNumbers(10, null));
// console.log(addTwoNumbers(10, undefined));
// console.log(addTwoNumbers(10, NaN));

// ham esa to kar sakte hai but ye rule ke khilaf hai matlab esa nhi karna chaheaye.
// try {
//   function addTwoNumbers(a, b) {
//     return a + b;
//   }
//   console.log(addTwoNumbers(10, 20));
//   console.log(addTwoNumbers(10, null));
//   console.log(addTwoNumbers(10, undefined));
//   console.log(addTwoNumbers(10, NaN));
// } catch (e) {}

// this is a valid one

function addTwoNumbers(a, b) {
    try {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        throw "a ya b me se koi ek valid value nhi hai";
    } catch (e) {
        console.log(e);
    } finally {
        return a + b;
    }
}
// console.log(addTwoNumbers(10, 20));
console.log(addTwoNumbers(10, null));
// console.log(addTwoNumbers(10, undefined));
// console.log(addTwoNumbers(10, NaN));