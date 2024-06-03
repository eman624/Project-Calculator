function add(x, y) {
  console.log(Number(x) + Number(y));
  return x + y;
}

function subtract(x, y) {
  console.log(x - y);
  return x - y;
}

function multiply(x, y) {
  console.log(x * y);
  return x * y;
}

function divide(x, y) {
  console.log(x / y);
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      add(x, y);
      break;
    case "-":
      subtract(x, y);
      break;
    case "*":
      multiply(x, y);
      break;
    case "/":
      divide(x, y);
      break;
  }
}

let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  //Store all components on HTML in our JS
  const display = document.querySelector(".display");

  const clear = document.querySelector(".clear");
  const equal = document.querySelector(".equal");
  const decimal = document.querySelector(".decimal");

  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const specialOperators = document.querySelectorAll(".special-operator");

  const previousScreen = document.querySelector(".previous");
  const currentScreen = document.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = previousValue + " " + operator;
      currentScreen.textContent = currentValue;
    })
  );

  clear.addEventListener("click", () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });
});

function handleNumber(num) {
  if (currentValue.length <= 10) {
    currentValue += num;
  }
}

function handleOperator(operator) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}
