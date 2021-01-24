const nameForm = document.getElementById("js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    display = document.getElementById("js-displayName");

const NAME = "NAME";

function saveName(name) {
  localStorage.setItem(NAME, name);
}


function theHours() {
  const date = new Date().getHours();

  if (date >= 6 && date < 12) {
    return "Good morning, "
  } else if (date >= 12 && date < 18) {
    return "Good afternoon, "
  } else if (date >= 18 && date < 0) {
    return "Good evening, "
  } else {
    return "Good night, "
  }
}

function displayGreeting(text) {
  nameForm.classList.add("hidden");
  display.classList.remove("hidden");
  display.innerText = `${theHours()}${text}`;
}

function loadedName() {
  const currentValue = localStorage.getItem(NAME);
  if (currentValue === null) {
    nameForm.classList.remove("hidden");
    display.classList.add("hidden");
    nameForm.addEventListener("submit", handleSubmit);
  } else {
    displayGreeting(currentValue);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  const myName = nameInput.value;
  displayGreeting(myName);
  saveName(myName);
  nameForm.classList.add("hidden");
}

function init() {
  loadedName();
  
}

init();