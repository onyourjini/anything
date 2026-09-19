const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

function getTarget() {
    const now = new Date();
    const year = now.getFullYear();
    const christmas = new Date(year, 11, 25);
    const dayAfter = new Date(year, 11, 26);

    if (now >= dayAfter) {
        return new Date(year + 1, 11, 25);
    }
    return christmas;
}

function pad(number) {
    return String(number).padStart(2, "0");
}

function updateCountdown() {
    const now = new Date();
    const target = getTarget();
    const diff = target - now;

    if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        messageEl.hidden = false;
        return;
}

messageEl.hidden = true;
const totalSecond = Math.floor(diff / 1000);
const days = Math.floor(totalSecond / (60 * 60 * 24));
const hours = Math.floor((totalSecond % (60 * 60 * 24)) / (60 * 60));
const minutes = Math.floor((totalSecond % (60 * 60)) / 60);
const seconds = totalSecond % 60

daysEl.textContent = pad(days);
hoursEl.textContent = pad(hours);
minutesEl.textContent = pad(minutes);
secondsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

function makeSnow() {
    const snow = document.getElementById("snow");
    const count = 40;

    for (let i = 0; i < count; i++) {
        const flake = document.createElement("span");
        flake.className = "snowflake";

        flake.style.left = Math.random() * 100 + "vw";
        flake.style.setProperty("--size", 2 + Math.random() * 4 + "px");
        flake.style.animationDuration = 8 + Math.random() * 10 + "s";
        flake.style.animationDelay = -Math.random() * 18 + "s";
        flake.style.opacity = 0.3 + Math.random() * 0.5;

        snow.appendChild(flake);
    }
}

makeSnow()
