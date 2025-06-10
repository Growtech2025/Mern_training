// //access tag by their Name using querySelector, querySelector pahla matching element/tag deta hai

// const para1 = document.querySelector("para3");

// //query selector se agar aap by the help of class se tag nikalte hai to aapko dot(.)or className likhna hota hai
// // const para11 = document.querySelector(".one");
// //query selector se agar aap by the help of id se tag nikalte hai to aapko hash(#)or idName likhna hota hai

// // const para21 = document.querySelector("#para3");
// console.log("Phla matching p tag dega ", para1);

// //access tag by their Name using querySelectorAll query slector sabhi matching element/tag deta hai
// const allpara = document.querySelectorAll("p");
// console.log("Jitne p tag code ke andar hoonge utno ko dega ", allpara);

// //access tag by Id Name
// const byId = document.getElementById("para3");
// console.log("Ye vo tag dega jiski id para3 hai ", byId);

// //access tag by Class Name
// const byClass = document.getElementsByClassName("one");
// console.log("Ye vo sabhi tag dega jinke andar one name kee class hai", byClass);

// // access element by their name
// const byTagName = document.getElementsByTagName("div");

// console.log(
//     "Ye vo sabhi tag dega jinke name div hai return htmlcollection karta hai",
//     byTagName
// );


let ptag = document.querySelector("p")
console.log(ptag);

ptag.addEventListener("click", () => {
    console.log("I am clicking");

})