const form = document.getElementById("userForm");
const formSection = document.getElementById("form");
const cardSection = document.getElementById("card");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardCourse").textContent = course;

    formSection.style.display = "none";
    cardSection.style.display = "block";
});

function showForm() {
    form.reset();
    formSection.style.display = "block";
    cardSection.style.display = "none";
}