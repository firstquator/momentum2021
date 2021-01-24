// Random Background
const body = document.querySelector("body");
const image = new Image();
image.classList.add("bgImage");

const IMG_NUMBER = 5;

function bgTheHours() {
  const date = new Date().getHours();

  if (date >= 6 && date < 12) {
    return "morning"
  } else {
    return "noon"
  }
}

function getRandom() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  return randomNumber;
}

function paintImage(imgNumber, on) {
  if (!on) {
    image.src = `./images/${bgTheHours()}${imgNumber + 1}.jpg`;
  } else {
    image.src = `./images/evening${imgNumber + 1}.jpg`;
  }
}

// Dark Mode
const darkButton = document.querySelector(".js-dark-mode"),
    icon = darkButton.querySelector("i");

let ON = localStorage.getItem("ON");
function saveOn(ON) {
  localStorage.setItem("ON", ON);
}

function changeFontColor() {
  if (!ON) {
    body.classList.replace("white","dark");
  } else {
    body.classList.replace("dark","white");
  }
}

function changeIcon() {
  if (ON) {
    icon.classList.replace("fas", "far");
    darkButton.classList.remove("dark-mode");
    ON = false;
  } else {
    icon.classList.replace("far", "fas");
    darkButton.classList.add("dark-mode");
    ON = true;
  }
  saveOn(ON);
}

function handleClickDarkMode() {
  const randomNumber = getRandom();
  changeFontColor();
  changeIcon();
  paintImage(randomNumber, ON);
}


function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber, ON);
  body.prepend(image);
  darkButton.addEventListener("click", handleClickDarkMode);
}

init();