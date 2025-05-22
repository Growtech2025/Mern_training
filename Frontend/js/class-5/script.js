

// Array-:Its an onject in js, which store diff. kind of values.
// array index always wtart from 0 if the size of an array is "n" so last index will be n-1
// element of an array can be accessed by indexing 
// let arr = [];
// console.log("Array in js =>", typeof (arr));
// let details = [10, "Ram", 34.78, true, false, 78, 'C', null, undefined]
// console.log(details);
// console.log(details[5]);
// for(let i=0;i<9;i++){
//     console.log(details[i]);
// }


//nested array -> Array of array 
// let TwoLevelarr = [10, 20, [30, 67, 77], 90, 100]
// // for(let i=0;i<5;i++){
// //     console.log(arr[i]);
// // }
// console.log(TwoLevelarr[2][2]);


// let ThreeLevelarr = [10, 20, [30, 67, 77,[89.90,76,'GH',[78,578,[7345,[73457,29875],2985],true],90],9999,10000], 90, 100,[[[10,20,[0]]]]]

// // console.log(ThreeLevelarr[2][3][4][2][1][0]);
// console.log(ThreeLevelarr[2][3][3][2][1][0]);


// funtions=> Function is an object in js. Its a set of instruction which is used to perform a specific task.

// function declaration along with definition without return keyword
// function greetToSir() {
//     console.log("Good evening Sir");
// }
// //function calling
// greetToSir();

// function greetToMam() {
//     return "Good evening Mam";
//     console.log("hey");
//     let x = 10;
//     console.log(x);
// }

// //Function Calling 
// let output = greetToMam();
// console.log(output);

// let a = 10;
// let b = 20;
// c = a + b;


// function printOneToTen(range) {
//     for (let i = 1; i <= range; i++) {
//         console.log(i);
//     }
// }

// printOneToTen(10);
// printOneToTen(10);
// printOneToTen(10);
// printOneToTen(10);


function addTwoNumber(m, n) {

    // let c=m+n;
    // return c;
    return m + n;
}

console.log(typeof(addTwoNumber));// function but function jo hote hai object js hote hai
console.log(addTwoNumber(10,40)); 
let result=addTwoNumber(10,400);
console.log(result);
