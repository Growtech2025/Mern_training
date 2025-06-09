//What is Bom, window object, location,history,open(),close(),back(),forword()andgo()
// console.log(window.innerHeight)
// console.log(window.innerWidth)

//Dom -:Document object model-:Tree base represention of html web page is known as DOM.addEventListener('type', listener, options)

// seletors in js-: There are certain type of selector in js by which you can access tag/element from the html file

// this is useLess -:U can also select tag by attribute
// const byAttribute = document.querySelector('[data-Name="mohan"]')
// console.log("we are accessing element by attribute", byAttribute)

// 1)querySelector()-: It returns first matching element/tag
const pTAG = document.querySelector("p");
console.log("FIRST MATCHING P TAG", pTAG);

//2) querySelectorAll- It returns all the matching element/tag if you select by their tagName, className,idName and it return nodelist
const allPtag = document.querySelectorAll("div");
console.log("All MATCHING P TAG,return Node list", allPtag);
// if you access your tag you must have to define #(hash) along with the id name
// const allPtag1 = document.querySelectorAll("#div2Para2")
// console.log("All MATCHING P TAG,return Node list", allPtag1)\

// if you access your tag you must have to define dot(.) along with the className name
// const allPtag11 = document.querySelectorAll("#div2Para2")
// console.log("All MATCHING P TAG,return Node list", allPtag11)

// // 3)getElementById()-:  It returns SINGLE matching element/tag which has a mention id
const divById = document.getElementById("div2Para2");
console.log("single element  P TAG", divById);

//4)getElementsByClassName()-:It returns all the matching element/tag which has the mention class namem,return html collection
const allDivByClass = document.getElementsByClassName("one");
console.log("all element  which has one class", allDivByClass);

//4)getElementsByTagName()-:It returns all the matching element/tag which has the mention tag name,return html collection
const allDivTag = document.getElementsByTagName("div");
console.log("all element  which has div tag name", allDivTag);