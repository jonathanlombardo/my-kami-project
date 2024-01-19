// grid sizing
let xDimension = 5;
let yDimension = 5;

const tailWrapperEl = document.querySelector("#tails-wrapper");
tailWrapperEl.style.width = `calc(var(--square-size) * ${xDimension}`;

const palets = document.querySelectorAll(".palet");
const colorSelectionEl = document.querySelector("#selected-color");
const gridDimEl = document.querySelector("#scheme-dim");
const printSchemeEl = document.querySelector("#print-scheme");
const drawModeBtn = document.querySelector("#draw-mode");
const solveModeBtn = document.querySelector("#solve-mode");

let currentColor = "blue";
let solveMode = true;
solveModeBtn.classList.add("mode-on");

colorSelectionEl.innerText = currentColor;
gridDimEl.innerText = `scheme ${xDimension} x ${yDimension}`;

// generate
generateGrid(xDimension, yDimension, tailWrapperEl);
const tails = document.querySelectorAll(".tail");

// load
loadScheme(schemeTest);

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

// # palet listener
for (let i = 0; i < palets.length; i++) {
  const palet = palets[i];

  palet.addEventListener("click", function () {
    currentColor = palet.classList[1];
    colorSelectionEl.innerText = currentColor;
  });
}

// #tails listener
for (let i = 0; i < tails.length; i++) {
  const tail = tails[i];

  tail.addEventListener("click", function () {
    if (solveMode) {
      solveTails(this, currentColor);
    } else {
      tail.style.backgroundColor = currentColor;
    }
  });
}
