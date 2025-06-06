// console.log("hey we are doing currying");

// function doThreeSumByNormalFunction(x, y, z) {
//     return x + y + z;
// }
// let ans = doThreeSumByNormalFunction(1, 2, 3);
// console.log("Three Variable sum is ", ans);

// function doThreeSumByCurryingFunction(x) {
//     debugger
//     console.log("firstValue", x);
//     return (
//         x + function One(y) {
//             console.log("Second Value", y);
//             return (
//                 y +
//                 function Two(z) {
//                     console.log("Three Value", z);
//                     return z;
//                 }
//             );
//         }
//     );
// }
debugger
console.log("hey1")
console.log("hey2")

function sumOFThreeNo(x) {
    return function sum(y) {
        return function(z) {
            return x + y + z
        }
    }
}

let level1 = sumOFThreeNo(10);
console.log(level1)
let level2 = level1(20);
console.log(level2)
let level3 = level2(30)
console.log(level3)

let ans = sumOFThreeNo(10)(20)(30);
console.log(ans)



function IncreFunction() {
    let x = 0;
}