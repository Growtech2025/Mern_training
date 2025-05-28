// //SHALLOW COPY 
// const cooler = {
//     name: "blu",
//     id: 10,
//     functinality: {
//         kaam: "cooling",
//         color: "white"

//     },
//     heinght: 10,

// };

// // const duplicate = cooler;
// // console.log(duplicate);


// // duplicate.functinality.kaam = " heating";

// // console.log(duplicate);


// const duplicate = JSON.parse(JSON.stringify(cooler));
// duplicate.id = 20;
// console.log(cooler);


// const cooler1 = {
//     name: "blu",
//     id: "RE101",
//     functionality: {
//         kaam: "cooling",
//         color: "white"
//     },
//     height: 3.5
// };

// const cooler2 = cooler1; // shallow copy by reference

// cooler2.id = "5555";
// cooler2.functionality.color = "green"; // changes original too

// console.log(cooler1);
// console.log(cooler2);


// const cooler1 = {
//     name: "blu",
//     id: "RE101",
//     functionality: {
//         kaam: "cooling",
//         color: "white"
//     },
//     height: 3.5
// };

// const cooler2 = {...cooler1 }; // shallow copy
// cooler2.name = "Ram";
// cooler2.functionality.kaam = "Garmi"; // affects original

// console.log(cooler1);
// console.log(cooler2);



// const cooler1 = {
//     name: "blu",
//     id: "RE101",
//     functionality: {
//         kaam: "cooling",
//         color: "white"
//     },
//     height: 3.5
// };

// const cooler2 = Object.assign({}, cooler1); // shallow copy
// cooler2.name = "Ram";
// cooler2.functionality.kaam = "Garmi"; // affects original

// console.log(cooler1);
// console.log(cooler2);



// //IT WILL CHANGE IN BOTH LIKE NORMAL ASIGNING
// const cooler1 = {
//     name: "blu",
//     id: "231cd",
//     functionality: {
//         kaam: "cooling",
//         color: "white"
//     },
//     height: 3.5
// };
// const cooler2 = Object.assign({}, cooler1);
// cooler2.name = "Ram";
// cooler2.functionality.kaam = "garmi";

// console.log("original ", cooler1);
// console.log("duplicate ", cooler2);


const cooler1 = {
    name: "blu",
    id: "RE101",
    functionality: {
        kaam: "cooling",
        color: "white"
    },
    height: 3.5
};

const cooler2D = JSON.parse(JSON.stringify(cooler1)); // deep copy
cooler2D.name = "Motu white";
cooler2D.functionality.color = "black"; // does NOT affect original

console.log(cooler1);
console.log(cooler2D);