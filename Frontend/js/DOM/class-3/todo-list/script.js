let div1 = document.getElementById("div1");

let btn = document.getElementById("btn");
const content = document.getElementsByClassName("content");

btn.addEventListener("click", () => {
    const para = document.createElement("p");
    let inputBox = document.getElementById("text1");

    para.textContent = inputBox.value;
    content[0].appendChild(para);
    inputBox.value = "";

    let bttn = document.createElement("button");
    bttn.textContent = "remove";
    content[0].appendChild(bttn);

    bttn.addEventListener("click", () => {
        content[0].removeChild(para);
        content[0].removeChild(bttn);
    });
});