// # RETURN NEAR TAILS ELEMENTS FROM DATA-INDEX

function getNearTails(element) {
  const nearTails = [];
  let near1;
  let near2;
  let near3;

  const myRow = getTailIndex(element, "row");
  const myCol = getTailIndex(element, "col");
  const mySide = getTailIndex(element, "side");

  if (mySide == "up") {
    // generateIndexString(myRow - 1, myCol, "down")
    near1 = document.querySelector(`[data-tail-index="${myRow - 1}-${myCol}-down"]`);
    near2 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-left"]`);
    near3 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-right"]`);
  } else if (mySide == "down") {
    near1 = document.querySelector(`[data-tail-index="${myRow + 1}-${myCol}-up"]`);
    near2 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-left"]`);
    near3 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-right"]`);
  } else if (mySide == "left") {
    near1 = document.querySelector(`[data-tail-index="${myRow}-${myCol - 1}-right"]`);
    near2 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-up"]`);
    near3 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-down"]`);
  } else if (mySide == "right") {
    near1 = document.querySelector(`[data-tail-index="${myRow}-${myCol + 1}-left"]`);
    near2 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-up"]`);
    near3 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-down"]`);
  }

  if (near1) nearTails.push(near1);
  if (near2) nearTails.push(near2);
  if (near3) nearTails.push(near3);

  return nearTails;
}

function generateGrid(xDimension, yDimension, tailWrapperEl) {
  tailWrapperEl.style.width = `calc(var(--square-size) * ${xDimension} + (var(--border-size) * 3 * ${xDimension}))`;

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
}

/**
 *Return the row, the column or the side of a tail
 *
 * @param {Element} tail tail to exam
 * @param {string} indexType row | col | side
 * @returns {number | string} returns index of tail (false in error)
 */
function getTailIndex(tail, indexType) {
  const dataTailIndex = tail.getAttribute("data-tail-index");
  const myIndexList = dataTailIndex.split("-");

  if (indexType == "row") return parseInt(myIndexList[0]);
  if (indexType == "col") return parseInt(myIndexList[1]);
  if (indexType == "side") return myIndexList[2];

  console.error("getTailIndex on error");
  return false;
}

function generateIndexString(row, col, side) {
  return `${row}-${col}-${side}`;
}

function getScheme() {
  const tails = document.querySelectorAll(".tail");
  let text = `// scheme ${xDimension} x ${yDimension}\n\n`;

  for (let i = 0; i < tails.length; i++) {
    const tail = tails[i];

    text += `"${tail.style.backgroundColor}",\n`;
  }

  navigator.clipboard.writeText(text);
  alert("Schema copiato negli appunti");

  return text;
}

function loadScheme(scheme) {
  const tails = document.querySelectorAll(".tail");

  for (let i = 0; i < tails.length; i++) {
    const tail = tails[i];

    tail.style.backgroundColor = scheme[i];
  }
}

function solveTails(element, currentColor) {
  const activeColor = element.style.backgroundColor;
  const tailsToFind = [element];

  const tailsToSolve = findTailsToSolve(element, activeColor, tailsToFind).sort();
  console.log(tailsToSolve);

  for (let i = 0; i < tailsToSolve.length; i++) {
    setTimeout(() => {
      tailsToSolve[i].style.backgroundColor = currentColor;
    }, `${0.5 + i * 10}`);
  }
}

function findTailsToSolve(element, activeColor, tailsToFind) {
  const nearTails = getNearTails(element);

  for (let i = 0; i < nearTails.length; i++) {
    const nearTail = nearTails[i];
    if (nearTail.style.backgroundColor == activeColor && !tailsToFind.includes(nearTail)) {
      console.log(nearTail);
      tailsToFind.push(nearTail);
      findTailsToSolve(nearTail, activeColor, tailsToFind);
    }
  }

  return tailsToFind;
}

function generatePalets(container, qty, colorsPalets, colorSelectionEl) {
  // let currentColor;

  for (let i = 0; i < qty; i++) {
    const newPalet = document.createElement("div");
    newPalet.classList.add("palet");
    newPalet.style.backgroundColor = colorsPalets[i][1];

    newPalet.addEventListener("click", function () {
      currentColor = colorsPalets[i][1];
      colorSelectionEl.innerText = colorsPalets[i][0];

      console.log(currentColor);
    });
    container.append(newPalet);
  }
}

// function getPalets(){

// }
