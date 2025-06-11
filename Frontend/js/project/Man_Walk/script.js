const button = document.getElementById("btn");
const Boy = document.getElementById("boy");
const leg1 = document.getElementsByClassName("leg1");
const leg2 = document.getElementsByClassName("leg2");
const contain = document.getElementsByClassName("container");
button.addEventListener("click", () => {
  Boy.style.animation = "Movex 10s linear";
  leg1[0].style.animation = "leftStep 1s infinite ease-in-out forwards";
  leg2[0].style.animation = "RightStep 1s infinite ease-in-out forwards";
  setTimeout(() => {
    Boy.style.animation = "none";
    leg1[0].style.animation = "none";
    leg2[0].style.animation = "none";
    const newh1 = document.createElement("h1");
    newh1.innerText = "10 Step Done";
    contain[0].append(newh1);
  }, 10000);
});
