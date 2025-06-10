let inputBox = document.getElementById("input");

let btn = document.getElementById("btn");
let AddDiv = document.getElementById("items-div");

function createItem() {
    if (inputBox.value === "") {
        alert("Ham to add nhi hoga");
        return;
    }
    const para = document.createElement("p");
    para.textContent = inputBox.value;
    AddDiv.appendChild(para);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "make change";
    AddDiv.appendChild(updateBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    AddDiv.appendChild(deleteBtn);
    inputBox.value = "";
    deleteBtn.addEventListener("click", () => {
        AddDiv.removeChild(para);
        AddDiv.removeChild(updateBtn);
        AddDiv.removeChild(deleteBtn);
    });

    updateBtn.addEventListener("click", () => {
        //step-1 no. create Button
        const saveBtn = document.createElement("button");
        //step-2 Give the name of button
        saveBtn.innerText = "Save";
        //step-3 Append karo save btn ko
        AddDiv.prepend(saveBtn);
        //step-4 remove updatebtn
        AddDiv.removeChild(updateBtn);

        inputBox.value = para.innerText;

        saveBtn.addEventListener("click", () => {
            //jaise hee save me click karo input box me string empty dikhe
            para.innerText = inputBox.value;
            AddDiv.appendChild(para);
            AddDiv.prepend(updateBtn);
            AddDiv.removeChild(saveBtn);
            inputBox.value = "";
        });
    });
}

btn.addEventListener("click", () => {
    createItem();
});