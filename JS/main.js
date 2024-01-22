const tailWrapperEl = document.querySelector("#tails-wrapper");
const paletsWrapperEl = document.querySelector("#color-wrapper");

const modeWrapperEl = document.querySelector("#mode-wrapper");
const drawModeBtn = document.querySelector("#draw-mode");
const solveModeBtn = document.querySelector("#solve-mode");

const printSchemeEl = document.querySelector("#print-scheme");

// Empty scheme
// let schemeOnLoad = ["5x5"];

// Filled scheme
// let schemeOnLoad = schemes[0];

let schemeOnLoad = schemes[1];
let currentColor;
let solveMode = true;
let tailClickOff = false;

solveModeBtn.classList.add("mode-on");

generateGrid(schemeOnLoad, tailWrapperEl);
generatePalets(paletsWrapperEl, schemeOnLoad);

// # mode listener
modeWrapperEl.addEventListener("click", function () {
  solveMode = !solveMode;
  drawModeBtn.classList.toggle("mode-on");
  solveModeBtn.classList.toggle("mode-on");
});

// # print listener
printSchemeEl.addEventListener("click", function () {
  getScheme(schemeOnLoad);
});
