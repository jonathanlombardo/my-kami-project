// grid sizing
let xDimension = 5;
let yDimension = 5;

const tailWrapperEl = document.querySelector("#tails-wrapper");
const paletsWrapperEl = document.querySelector("#color-wrapper");

tailWrapperEl.style.width = `calc(var(--square-size) * ${xDimension}`;

const palets = document.querySelectorAll(".palet");
const colorSelectionEl = document.querySelector("#selected-color");
const gridDimEl = document.querySelector("#scheme-dim");
const printSchemeEl = document.querySelector("#print-scheme");
const drawModeBtn = document.querySelector("#draw-mode");
const solveModeBtn = document.querySelector("#solve-mode");

let currentColor;
let solveMode = true;
solveModeBtn.classList.add("mode-on");

colorSelectionEl.innerText = "Seleziona un colore";
gridDimEl.innerText = `scheme ${xDimension} x ${yDimension}`;

// generate
generateGrid(xDimension, yDimension, tailWrapperEl);
generatePalets(paletsWrapperEl, 5, globalColors, colorSelectionEl);
const tails = document.querySelectorAll(".tail");

// load
loadScheme(schemes[1]);

// # drow listener
drawModeBtn.addEventListener("click", function () {
  solveMode = false;
  drawModeBtn.classList.toggle("mode-on");
  solveModeBtn.classList.toggle("mode-on");
});

// # solve listener
solveModeBtn.addEventListener("click", function () {
  solveMode = true;
  drawModeBtn.classList.toggle("mode-on");
  solveModeBtn.classList.toggle("mode-on");
});

// # print listener
printSchemeEl.addEventListener("click", function () {
  getScheme();
});

// #tails listener
for (let i = 0; i < tails.length; i++) {
  const tail = tails[i];

  tail.addEventListener("click", function () {
    console.log(currentColor);

    if (solveMode) {
      solveTails(this, currentColor);
    } else {
      tail.style.backgroundColor = currentColor;
      // tail.style.backgroundColor = `blue`;
      console.log(tail.style.backgroundColor);
    }
  });
}
