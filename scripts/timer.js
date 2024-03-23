const currentDate = new Date();
console.log(currentDate);

const target = "2024-12-03T00:00:00";
const targetDate = new Date(target);
console.log(targetDate);

const difference = targetDate - currentDate;
console.log(difference);

function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((difference % (1000 * 60 * 60 * 24))) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

const interval = setInterval(updateCountdown, 1000);

if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "The event has started"
}