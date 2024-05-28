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

// numbers.forEach((number) => {
//   number.addEventListener("click", () => {
//     if (number.textContent === "." && decimalCount > 0) {
//       displayValue = 0;
//       decimalCount++;
//     }

//     if (decimalCount <= 1 || number.textContent != ".") {
// 		display.textContent = displayValue + number.textContent;
// 		displayValue = display.textContent;
//     }

//     firstNumber = displayValue;
//     console.log(`first number: ${firstNumber}`);
//   });
// });

// operators.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     operate(operator.textContent, firstNumber, 2);
//   });
// });

// clear.addEventListener("click", () => {
//   display.textContent = "0";
//   displayValue = "";
//   decimalCount = 0;
// });

// const display = document.querySelector(".display");
// const numbers = document.querySelectorAll(".number");
// const operators = document.querySelectorAll(".operator");
// const clear = document.querySelector(".clear");

// let firstNumber = 0;
// let secondNumber = 0;

// let displayValue = "";
// let result = "";
// let decimalCount = 0;

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

  operators.forEach((operator) =>
    operate.addEventListener("click", function (e) {
      operate(e.target.textContent, firstNumber, lastNumber);
    })
  );

  clear.addEventListener("click", () => {
    display.textContent = 0;
    displayValue = "";
  });
});

function handleNumber(num) {
  //   displayValue += num;
  if (currentValue.length <= 10) {
    currentValue += num;
  }
}

function handleOperator(operator) {}
