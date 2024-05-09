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

const equal = document.querySelector("equal");
equal.addEventListener("click", operator("add", 1, 3));

const display = document.querySelector("display");
display.textContent = result;
