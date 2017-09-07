const secHand = document.querySelector("#sec-hand");
const minHand = document.querySelector("#min-hand");
const hourHand = document.querySelector("#hour-hand");

function setDate() {
  const myDate = new Date();

  const mySec = myDate.getSeconds();
  const sec2deg = (mySec / 60 * 360) + 90;

  const myMin = myDate.getMinutes();
  const min2deg = (myMin / 60 * 360) + 90;

  const myHour = myDate.getHours();
  const hour2deg = (myHour / 60 * 360) + 90;

  secHand.style.transform = `rotate(${sec2deg}deg)`;
  minHand.style.transform = `rotate(${min2deg}deg)`;
  hourHand.style.transform = `rotate(${hour2deg}deg)`;
}

setInterval(setDate, 1000);
