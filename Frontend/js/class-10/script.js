// //Freeze Object- It will not allow to do anything with object like update, delete or add property inside the object

// let obj = {
//     id: 100,
//     userName: " Aviraj",
// };

// Object.freeze(obj); // I have freezen the object
// obj.userName = "Anshul"; // try to update the username key value
// console.log(obj);
// delete obj.id; // i am trying to delete property but there is no changes in object
// console.log(obj);

// //Add the new property inside an array
// obj.mobileNo = 99999099999;
// console.log(obj) // no property will be addiing inside the obj object

//Seal Object-> This method allow you to update the value of an object but it is not allow to add new property
// or delete exisiting property

let obj1 = {
    id: 100,
    userName: " Aviraj"
};

Object.seal(obj1); // here i have seal my object
console.log("Original Object ", obj1)
obj1.userName = "Anshul";
console.log("modify  Object ", obj1) // now userName has Anshul value
obj1.DOB = "15-01-2003"; // now i am trying add new property 
console.log(obj1)
delete obj1.id;

console.log(obj1);

// Rest Operator-> In js we have facility to pass n argumant, whatever the parameter exist inside the function matching value
// store inside the parameter remaint argument will store in rest parameter (...). Rest parameter should be last parameter inside the function
function sum(a, b, ...c) {
    for (let i = 0; i < c.length; i++) {
        console.log(c[i])
    }
    console.log(c)
    return a + b;
}
// u r not allowed to rest passparameter first or any position it should be last
// function sum(a,...c, b, ) {
//     for (let i = 0; i < c.length; i++) {
//         console.log(c[i])
//     }
//     console.log(c)
//     return a + b;
// }
let digits = sum(10, 54, 75, 87, 99, 80) // sum function take only 3 parameter but below we are passing n parameter 
    // console.log(digits)