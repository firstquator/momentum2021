const operatorBtn = document.querySelectorAll(".js-operatorBtn");
const numberBtn = document.querySelectorAll(".js-numberBtn");

let calBox = {
  number1: "",
  operator: null,
  number2: ""
};

const displayResult = (number) => {
  const screen = document.querySelector(".js-screen");
  screen.innerText = number;
};

const operation = (operator) => {
  switch (operator) {
    case "+":
      calBox.number1 = parseInt(calBox.number1) + parseInt(calBox.number2);
      break;

    case "-":
      calBox.number1 = parseInt(calBox.number1) - parseInt(calBox.number2);
      break;

    case "*":
      calBox.number1 = parseInt(calBox.number1) * parseInt(calBox.number2);
      break;

    case "/":
      calBox.number1 = parseInt(calBox.number1) / parseInt(calBox.number2);
      calBox.number1 = calBox.number1.toFixed(5);
      break;

    default:
  }
};

const clickReturn = (btn) => {
  if (btn === "c") {
    calBox.number1 = "";
    calBox.number2 = "";
    calBox.operator = null;
    displayResult("");
  }
};

const clickOperator = (btn) => {
  if (calBox.number1 && calBox.number2) {
    operation(calBox.operator);
    calBox.number2 = "";
  } else {
    calBox.operator = btn;
  }
};
const clickResult = (btn) => {
  if (btn === "=") {
    displayResult(calBox.number1);
  }
};

const handleOperatorClick = (e) => {
  const currentValue = e.target.value;

  clickReturn(currentValue);
  clickOperator(currentValue);
  clickResult(currentValue);

  calBox.operator = currentValue;
};

const handleNumberClick = (e) => {
  const currentValue = e.target.value;

  if (calBox.operator === null || calBox.operator === "c") {
    calBox.number1 += currentValue;
    displayResult(calBox.number1);
  } else if (calBox.operator === "=") {
    calBox.number1 = "";
    calBox.number1 += currentValue;
    displayResult(calBox.number1);
  } else {
    calBox.number2 += currentValue;
    displayResult(calBox.number2);
  }
};

const clickOperatorBtn = (btn) => {
  btn.forEach((click) => {
    click.addEventListener("click", handleOperatorClick);
  });
};

const clickNumberBtn = (btn) => {
  btn.forEach((click) => {
    click.addEventListener("click", handleNumberClick);
  });
};

const calBtn = document.querySelector(".js-calculator");
const calculatorDisplay = document.querySelector(".calculator")

function displayCalculator(click) {
  if (click === "false") {
    calculatorDisplay.classList.remove("hidden");
    localStorage.setItem("CLICK", "true");
  } else {
    calculatorDisplay.classList.add("hidden");
    localStorage.setItem("CLICK", "false");
  }
}

function handleCalculatorClick() {
  const click = localStorage.getItem("CLICK");
  displayCalculator(click);
}

function init() {
  clickOperatorBtn(operatorBtn);
  clickNumberBtn(numberBtn);
  calBtn.addEventListener("click", handleCalculatorClick);
}

init();