/* =========================
   BASIC CALCULATOR (REAL JS)
   ========================= */

// Grab elements
const input = document.getElementById("input");
const output = document.getElementById("output");

// Start clean
input.value = "";
output.innerText = "";

/* =========================
   NUMBER BUTTONS
   ========================= */

for (let i = 0; i <= 9; i++) {
  document.getElementById("num" + i).addEventListener("click", () => {
    input.value += i;
  });
}

/* =========================
   OPERATOR BUTTONS
   ========================= */

document.getElementById("addButton").addEventListener("click", () => {
  input.value += "+";
});

document.getElementById("subtractButton").addEventListener("click", () => {
  input.value += "-";
});

document.getElementById("multiplyButton").addEventListener("click", () => {
  input.value += "*";
});

document.getElementById("divideButton").addEventListener("click", () => {
  input.value += "/";
});

/* =========================
   CLEAR & BACKSPACE
   ========================= */

document.getElementById("clearButton").addEventListener("click", () => {
  input.value = "";
  output.innerText = "";
});

document.getElementById("backspaceButton").addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

/* =========================
   SOLVE BUTTON (THE MAGIC)
   ========================= */

document.getElementById("solveButton").addEventListener("click", () => {
  try {
    if (input.value.trim() === "") {
      output.innerText = "0";
      return;
    }

    // SAFELY evaluate expression
    const result = Function("return " + input.value)();
    output.innerText = result;
  } catch {
    output.innerText = "Error";
  }
});

/* =========================
   OPTIONAL: KEYBOARD INPUT
   ========================= */

document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/".includes(e.key)) {
    input.value += e.key;
  }
  if (e.key === "Enter") {
    document.getElementById("solveButton").click();
  }
  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
});

const dotBtn = document.querySelector(".dot");

dotBtn.onclick = function () {
  const expr = input.value;

  // If empty → start with 0.
  if (expr === "") {
    input.value = "0.";
    return;
  }

  // Get last number only
  let lastNumber = expr.split(/[\+\-\*\/×÷]/).pop();

  // Allow dot only once per number
  if (!lastNumber.includes(".")) {
    input.value += ".";
  }
};
