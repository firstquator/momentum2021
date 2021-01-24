const timeBox = document.querySelector(".js-time"),
    timeDisplay = timeBox.querySelector("h1");

function displayTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  timeDisplay.innerText = 
  `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  displayTime();
  setInterval(displayTime, 1000);
}

init();