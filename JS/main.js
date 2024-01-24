const tailWrapperEl = document.querySelector("#tails-wrapper");
const paletsWrapperEl = document.querySelector("#color-wrapper");
const btnWrapperEl = document.querySelector("#btn-wrapper");
const backBtn = document.querySelector("#back-button");
const scoreEl = document.querySelector("#score");
const restartBtn = document.querySelector("#restart-lev");

// # todo
// const modeWrapperEl = document.querySelector("#mode-wrapper");
// const drawModeBtn = document.querySelector("#draw-mode");
// const solveModeBtn = document.querySelector("#solve-mode");
// # todo

const printSchemeEl = document.querySelector("#print-scheme");

let schemeOnLoad;
let currentColor;
let solveMode = true;
let tailClickOff = false;
let currentMoves = 0;

// solveModeBtn.classList.add("mode-on");

generateLevelsView(btnWrapperEl);

// # mode listener
// # todo
// modeWrapperEl.addEventListener("click", function () {
//   solveMode = !solveMode;
//   drawModeBtn.classList.toggle("mode-on");
//   solveModeBtn.classList.toggle("mode-on");
// });
// # todo

// # print listener
printSchemeEl.addEventListener("click", function () {
  getScheme(schemeOnLoad);
});

// # back listener
backBtn.addEventListener("click", function () {
  generateLevelsView(btnWrapperEl);
  tailWrapperEl.innerHTML = ``;
  tailWrapperEl.classList.remove("active");

  paletsWrapperEl.innerHTML = ``;
});

restartBtn.addEventListener("click", function () {
  generateGrid(schemeOnLoad, tailWrapperEl);
  generatePalets(paletsWrapperEl, schemeOnLoad);
  btnWrapperEl.innerHTML = ``;
});
