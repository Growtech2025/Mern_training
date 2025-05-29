// console.log("for in , for of, for each");
// arr = [1, 22, 33, 44];
//for in : it will return the index of the array
// for (val in arr) {
//     console.log(val);
// }
//for of : it will return the value of the array
// for (val of arr) {
//     console.log(val);
// }
//for Each : the first para will return value of array or object while the second para will return its index
// we can not use break and continue in for each method.
// arr.forEach((value, indexofarray) => console.log(value, indexofarray));

const obj = {
        id: 1,
        fname: "Mayank"
    }
    // Object.keys(obj).forEach((value) =>{ 
    //     console.log(value)
    //     if(value === "id"){
    //         break;
    //     }
    // });
    // Object.values(obj).forEach((value) => console.log(value));

for (val in obj) {
    console.log(val);
    if (val === "id") {
        break;
    }
}

for (val in obj) {
    console.log(obj[val]);
    if (val === "id") {
        break;
    }
}
