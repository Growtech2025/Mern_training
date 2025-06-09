// //What is Bom, window object, location,history,open(),close(),back(),forword()andgo()
// // console.log(window.innerHeight)
// // console.log(window.innerWidth)

// //Dom -:Document object model-:Tree base represention of html web page is known as DOM.addEventListener('type', listener, options)

// // seletors in js-: There are certain type of selector in js by which you can access tag/element from the html file

// // this is useLess -:U can also select tag by attribute
// // const byAttribute = document.querySelector('[data-Name="mohan"]')
// // console.log("we are accessing element by attribute", byAttribute)

// // 1)querySelector()-: It returns first matching element/tag
// const pTAG = document.querySelector("p");
// console.log("FIRST MATCHING P TAG", pTAG);

// //2) querySelectorAll- It returns all the matching element/tag if you select by their tagName, className,idName and it return nodelist
// const allPtag = document.querySelectorAll("div");
// console.log("All MATCHING P TAG,return Node list", allPtag);
// // if you access your tag you must have to define #(hash) along with the id name
// // const allPtag1 = document.querySelectorAll("#div2Para2")
// // console.log("All MATCHING P TAG,return Node list", allPtag1)\

// // if you access your tag you must have to define dot(.) along with the className name
// // const allPtag11 = document.querySelectorAll("#div2Para2")
// // console.log("All MATCHING P TAG,return Node list", allPtag11)

// // // 3)getElementById()-:  It returns SINGLE matching element/tag which has a mention id
// const divById = document.getElementById("div2Para2");
// console.log("single element  P TAG", divById);

// //4)getElementsByClassName()-:It returns all the matching element/tag which has the mention class namem,return html collection
// const allDivByClass = document.getElementsByClassName("one");
// console.log("all element  which has one class", allDivByClass);

// //4)getElementsByTagName()-:It returns all the matching element/tag which has the mention tag name,return html collection
// const allDivTag = document.getElementsByTagName("div");
// console.log("all element  which has div tag name", allDivTag);
// const mydiv = document.querySelector("div");
// // console.log("This is my tag", mydiv);
// // console.log("innerHtml ", mydiv.innerHTML)
// console.log("innerText ", mydiv.innerText)
// const body1 = document.querySelector("body");
// const div11 = document.getElementById("one");
// console.log(div11)
// const newP = document.createElement("p");
// console.log(newP)
// newP.textContent = "Me hu naya vala p ";
// console.log(newP)
// div11.append(newP)
// body1.append(newP)

// const threeValaDiv = document.getElementsByTagName("div");
// console.log(threeValaDiv[0]);
// threeValaDiv[0].addEventListener("click", () => {
//     console.log("CLCIK HO GYA HAI");
// });

// fourValaDiv[0].prepend(para1);
const fourValaDiv = document.getElementsByClassName("four");
const myBtn = document.querySelector("button");
// console.log("div hu me", fourValaDiv)
// console.log("myBtn", myBtn)
// const para1 = document.createElement("p");
// para1.textContent = "me to UI me dikhega ";
// console.log(para1);
// fourValaDiv[0].prepend(para1);

function addKaregaPko() {
    //step-1 element create kar leaya hai
    const para1 = document.createElement("p");
    //step-2 element ke andar text daal deayas hai
    para1.textContent = "me to UI me dikhega ";
    //step-3 element ko div me append kar deaya hai
    fourValaDiv[0].appendChild(para1);

    const btn = document.createElement("button")
    btn.textContent = "remove";
    fourValaDiv[0].appendChild(btn)

    btn.addEventListener("click", () => {

        fourValaDiv[0].removeChild(para1)
        fourValaDiv[0].removeChild(btn)

    })

}



// myBtn.addEventListener("click", addKaregaPko());
// myBtn.addEventListener("click", () => {
//     const para1 = document.createElement("p");
//     //step-2 element ke andar text daal deayas hai
//     para1.textContent = "me to UI me dikhega ";
//     //step-3 element ko div me append kar deaya hai
//     fourValaDiv[0].appendChild(para1);
// });



//2nd way 
myBtn.addEventListener("click", () => { addKaregaPko() });
