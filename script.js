const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minuteDegrees = (min / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
