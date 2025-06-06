// console.log("me hu sync code ")
// setTimeout(() => {
//     console.log("Namaskar dosto aapke sath hai setTimeout ")
// }, 5000)

// console.log("second")
// const id = setInterval(() => {
//     console.log("Namaskar dosto aapke sath hai,setInterval")
//     clearInterval(id)
// }, 5000)
// console.log(id)

// debugger;
// console.log("me hu sync code ")
// setTimeout(() => {
//     console.log("Namaskar dosto aapke sath hai setTimeout ")
// })

// console.log("second")
//     // const id = setInterval(() => {
//     //     console.log("Namaskar dosto aapke sath hai,setInterval")

// // })

//Error handling
// It is used for handling the logical error
// function devideByAnyNo(a, b) {
//     try {
//         if (typeof a === Number && typeof b === Number) {
//             return a / b;
//         }
//         throw ("bhai saab value ke type shi nhi hai ")
//     } catch (e) {
//         console.log("ham to na denge ", e);
//     } finally {
//         console.log("me to chalkar ke rahunga kuch ho jaye ")
//     }
// }
// let op = devideByAnyNo(10, "Jagmohan");
// console.log(op);

//Normal Function Version
// function addOftwo(a, b) {
//     return a + b;
// }

// let o = addOftwo(2, 3);
// console.log("sum of 2 no.", o);

//curried version
// debugger

// function addOftwo(a) {
//     return function hettsd(b) {
//         console.log(a)
//         return a + b;
//     };
// }
// // console.log(addOftwo(10))
// // console.log(addOftwo(10)(20))
// let fff = addOftwo(10);
// let ggg = fff(20);
// console.log(ggg)

//closure-> Its a combination of lexical scope and normal functionn
// debugger

// function outerMostFunction() {
//     let value = 10;

//     function innerFunction() {
//         console.log(value);
//     }
//     innerFunction();
// }

// outerMostFunction()

// SASTA WAY
// function uploadPictureCounting222() {
//     let pictureCount = 0;

//     function uploadPicture() {
//         return pictureCount++;
//     }
//     console.log(uploadPicture());
//     console.log(uploadPicture());
//     console.log(uploadPicture());
//     let x = uploadPicture();
//     console.log(x);
//     x = uploadPicture();
//     console.log(x);
//     x = uploadPicture();
//     console.log(x);
//     x = null
//     console.log(x)
// }

// uploadPictureCounting222();

//BEST WAY
// debugger;

// function uploadPictureCounting() {
//     let pictureCount = 0;

//     return function uploadPicture() {
//         return pictureCount++;
//     };
// }

// let user1Upload = uploadPictureCounting();
// console.log(user1Upload());
// console.log(user1Upload());
// console.log(user1Upload());
// let user2Upload = uploadPictureCounting();
// console.log(user2Upload());
// console.log(user2Upload());
// console.log(user2Upload());
// // we are not longer use closer object so initialize by null

// //disadvantage->Memory leak hoti hai matalb waste hoti hai

// //memory leak se bacjne ke leaye ye kar do kya kar do closer object ko null initialize kar do
// user1Upload = null;
// user2Upload = null;

// function uploadPictureCounting1() {
//     let pictureCount = 0;
//     return pictureCount++;
// }
// console.log(uploadPictureCounting1());
// console.log(uploadPictureCounting1());
// console.log(uploadPictureCounting1());

//This is the normal code

//XHR -> This is a way of api calling in the earlier time this is only one way by which we make api request
//Step-1 done create the instance of the XHR
// const xxx = new XMLHttpRequest();

// // Step-2 Define the response type
// xxx.responseType = "json";

// // use the open() method and pass 2 parameter 1st is method type and 2nd is url
// xxx.open("GET", "https://jsonplaceholder.typicode.com/users");
// xxx.send();
// console.log(xxx)

// this is a modular code
// function apiCalling(methodType, URL) {
//     const xxx = new XMLHttpRequest();

//     // Step-2 Define the response type
//     xxx.responseType = "json";

//     // use the open() method and pass 2 parameter 1st is method type and 2nd is url
//     xxx.open(methodType, URL);
//     xxx.send();
//     console.dir(xxx);
// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/users");

//Callback hell -> jab aap ek callback function ke andar dusra callback function uske andar tisra callback and so on so es callback hell bolte hai

// function apiCalling(methodType, URL, callback) {
//     //step 1
//     const xxx = new XMLHttpRequest();

//     // Step-2 Define the response type
//     xxx.responseType = "json";

//     // use the open() method and pass 2 parameter 1st is method type and 2nd is url
//     xxx.open(methodType, URL);
//     xxx.send();
//     // xxx.addEventListener("load", () => {
//     //     console.log(xxx.response)
//     // });
//     xxx.onload = () => {
//         // console.log(xxx.response);
//         callback(xxx.response);
//     };
// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/users", (data) => {
//     console.log("users level-1", data);
//     // console.log(data[0])
//     const singleUserId = data[0].id;
//     apiCalling(
//         "GET",
//         `https://jsonplaceholder.typicode.com/posts/${singleUserId}`,
//         (data) => {
//             console.log("posts level-2", data);
//             const singlePost = data.id;

//             apiCalling(
//                 "GET",
//                 `https://jsonplaceholder.typicode.com/comments?postId=${singlePost}`,
//                 (data) => {
//                     console.log("posts single post id level-3", data);
//                     apiCalling(
//                         "GET",
//                         `https://jsonplaceholder.typicode.com/comments/${singlePost}`,
//                         (data) => {
//                             console.log("comments level-4", data);
//                         }
//                     );
//                 }
//             );
//         }
//     );
// });

//promises-:its an object in js, which generally give guarantee, i can give some value or not.

// const myPromise = new Promise((resolve, reject) => {
//     resolve("me vapas aaunga ");
//     reject("me vapas nhi aane vala ");
// });
// console.log(myPromise);
// myPromise
//     .then((ip) => {
//         console.log(ip);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Code of promise implemention
// const myPromise = new Promise((resolve, reject) => {
//     const anyNo = Math.floor(Math.random() * 20);
//     // console.log(anyNo);
//     if (anyNo >= 18) {
//         resolve("Vote forn Prachi jajme");
//     } else {
//         reject("Vote for Khushi Patel");
//     }
// });
// debugger
// console.log(myPromise);

// myPromise.then((ip) => console.log(ip)).catch((err) => console.log("err", err));

// How to make promise pending  M/C=>
// const myPromise1 = new Promise((resolve, reject) => {
//     const anyNo = Math.floor(Math.random() * 20);
//     console.log(anyNo);
//     setTimeout(() => {
//         if (anyNo >= 18) {
//             resolve("Vote forn Prachi jajme");
//         } else {
//             reject("Vote for Khushi Patel");
//         }
//     }, 4000);
// });
// debugger
// console.log(myPromise1);

// myPromise1.then((ip) => console.log(ip)).catch((err) => console.log(err));

//Fetch-:
// const myprom = new Promise(resizeBy,rej)

// fetch("https://jsonplaceholder.typicode.com/users")
// console.log(fetch("https://jsonplaceholder.typicode.com/users"))

let result = fetch("https://jsonplaceholder.typicode.com/users");
console.log(result);
let arr = [];

result.then((data) => console.log(data.json().then(res => arr.push(res))));
console.log(arr)