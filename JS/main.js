// grid sizing
const xDimension = 4;
const yDimension = 6;

const tailWrapperEl = document.querySelector("#tails-wrapper");
tailWrapperEl.style.width = `calc(var(--square-size) * ${xDimension}`;

// generate grid
for (let r = 0; r < yDimension; r++) {
  for (let c = 0; c < xDimension; c++) {
    const newTailUp = document.createElement("div");
    newTailUp.classList.add("tail", "up");
    let index;

    index = `${r}-${c}-up`;
    newTailUp.setAttribute("data-tail-index", index);

    tailWrapperEl.append(newTailUp);
  }

  for (let c = 0; c < xDimension; c++) {
    const newTailLeft = document.createElement("div");
    newTailLeft.classList.add("tail", "left");
    let index;

    index = `${r}-${c}-left`;
    newTailLeft.setAttribute("data-tail-index", index);

    const newTailRight = document.createElement("div");
    newTailRight.classList.add("tail", "right");

    index = `${r}-${c}-right`;
    newTailRight.setAttribute("data-tail-index", index);

    tailWrapperEl.append(newTailLeft);
    tailWrapperEl.append(newTailRight);
  }

  for (let c = 0; c < xDimension; c++) {
    const newTailDown = document.createElement("div");
    newTailDown.classList.add("tail", "down");
    let index;

    index = `${r}-${c}-down`;
    newTailDown.setAttribute("data-tail-index", index);
    tailWrapperEl.append(newTailDown);
  }
}
