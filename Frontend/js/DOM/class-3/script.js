const mydiv = document.getElementById("oneDiv");
console.log("div kee value", mydiv);
console.log("mydiv ke andar sabhi attribute", mydiv.attributes);

console.log("Div ke andar every attribute ka name and unki value");
for (let i = 0; i < mydiv.attributes.length; i++) {
    console.log(mydiv.attributes[i]);
}

// If you wanna update the value of attribute
mydiv.attributes[0].value = "Container";
for (let i = 0; i < mydiv.attributes.length; i++) {
    console.log(mydiv.attributes[i]);
}

//If you wanna add new attribute

mydiv.setAttribute("company-info", "Grow Tech");
// mydiv.setAttribute("style", "background-color:red")

mydiv.style.fontSize = "50px";