const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
// const add = document.querySelector(".add");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operator(operator, x, y) {
  switch (operator) {
    case add:
      add(x, y);
      break;
    case subtract:
      subtract(x, y);
      break;
    case multiply:
      multiply(x, y);
      break;
    case divide:
      divide(x, y);
      break;
  }
}

let firstNumber = 0;
let secondNumber = 0;
let displayValue = "";
let result = "";
let decimalCount = 0;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (number.textContent === ".") {
      decimalCount++;
    }

    if (decimalCount <= 1) {
      display.textContent = displayValue + number.textContent;
      displayValue = display.textContent;
    } else if (number.textContent != ".") {
      display.textContent = displayValue + number.textContent;
      displayValue = display.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  display.textContent = "0";
  displayValue = "";
});
