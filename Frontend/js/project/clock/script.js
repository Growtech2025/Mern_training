const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;
    const minDeg = min * 6;
    const hrDeg = (hr % 12) * 30 + min * 0.5;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();