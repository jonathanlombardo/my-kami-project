function getNearTails(element) {
  const nearTails = [];
  let near1;
  let near2;
  let near3;

  const myRow = getTailIndex(element, "row");
  const myCol = getTailIndex(element, "col");
  const mySide = getTailIndex(element, "side");

  if (mySide == "up") {
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

function addTailListener(tail) {
  tail.addEventListener("click", function () {
    if (!tailClickOff) {
      if (solveMode) {
        currentMoves++;
        scoreEl.innerText = `Moves ${currentMoves} / ${schemeOnLoad.maxMoves}`;
        solveTails(this, currentColor);
      } else {
        tail.style.backgroundColor = currentColor;
      }
    }
  });
}

function generateGrid(scheme, tailWrapperEl) {
  const xDimension = scheme.row;
  const yDimension = scheme.col;
  tailClickOff = false;
  currentMoves = 0;

  scoreEl.innerText = `Moves ${currentMoves} / ${scheme.maxMoves}`;

  tailWrapperEl.innerHTML = ``;
  tailWrapperEl.style.width = `calc(var(--square-size) * ${xDimension} + (var(--border-size) * 3 * ${xDimension}))`;
  tailWrapperEl.classList.add("active");

  // generate grid
  for (let r = 0; r < yDimension; r++) {
    for (let c = 0; c < xDimension; c++) {
      const newTailUp = document.createElement("div");
      newTailUp.classList.add("tail", "up");
      let index;

      index = `${r}-${c}-up`;
      newTailUp.setAttribute("data-tail-index", index);

      addTailListener(newTailUp);
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

      addTailListener(newTailLeft);
      addTailListener(newTailRight);

      tailWrapperEl.append(newTailLeft);
      tailWrapperEl.append(newTailRight);
    }

    for (let c = 0; c < xDimension; c++) {
      const newTailDown = document.createElement("div");
      newTailDown.classList.add("tail", "down");
      let index;

      index = `${r}-${c}-down`;
      newTailDown.setAttribute("data-tail-index", index);

      addTailListener(newTailDown);

      tailWrapperEl.append(newTailDown);
    }
  }

  loadScheme(scheme);
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

function getScheme(scheme) {
  const tails = document.querySelectorAll(".tail");
  let text = `
  {
    row: ${scheme.row},
    col: ${scheme.col},
    fillColors: [`;

  for (let i = 0; i < tails.length; i++) {
    const tail = tails[i];
    if (i == tails.length - 1) {
      text += `
      "${tail.style.backgroundColor}"],
      },`;
    } else {
      text += `"${tail.style.backgroundColor}", `;
    }
  }

  navigator.clipboard.writeText(text);
  alert("Schema copiato negli appunti");

  // return text;
}

function loadScheme(scheme) {
  const tails = document.querySelectorAll(".tail");

  for (let i = 0; i < tails.length; i++) {
    const tail = tails[i];

    tail.style.backgroundColor = scheme.fillColors[i] ? scheme.fillColors[i] : `var(--empty-tail-color)`;
  }
}

function solveTails(element, currentColor) {
  tailClickOff = true;
  const activeColor = element.style.backgroundColor;
  const tailsToFind = [element];
  const tailsToSolve = findTailsToSolve(element, activeColor, tailsToFind).sort();

  let delay;

  for (let i = 0; i < tailsToSolve.length; i++) {
    delay = 0.5 + i * 10;

    setTimeout(() => {
      tailsToSolve[i].style.backgroundColor = currentColor;
    }, `${delay}`);
  }

  delay++;

  setTimeout(() => {
    if (isPuzzleComplete()) {
      endGame(true);
      return;
    }

    if (currentMoves == schemeOnLoad.maxMoves) {
      endGame(false);
      return;
    }

    tailClickOff = false;
  }, `${delay}`);
}

function findTailsToSolve(element, activeColor, tailsToFind) {
  const nearTails = getNearTails(element);

  for (let i = 0; i < nearTails.length; i++) {
    const nearTail = nearTails[i];
    if (nearTail.style.backgroundColor == activeColor && !tailsToFind.includes(nearTail)) {
      // console.log(nearTail);
      tailsToFind.push(nearTail);
      findTailsToSolve(nearTail, activeColor, tailsToFind);
    }
  }

  return tailsToFind;
}

function generatePalets(container, scheme) {
  container.innerHTML = ``;
  const qty = getPalets(scheme).length;

  for (let i = 0; i < qty; i++) {
    const newPalet = document.createElement("div");
    newPalet.classList.add("palet");
    newPalet.style.backgroundColor = getPalets(scheme)[i].rgbCode;

    newPalet.addEventListener("click", function () {
      currentColor = getPalets(scheme)[i].rgbCode;
      // colorSelectionEl.innerText = getPalets(scheme)[i].colorName;

      const allPalets = document.querySelectorAll(".palet");

      for (let i = 0; i < allPalets.length; i++) {
        allPalets[i].classList.remove("active");
      }

      this.classList.add("active");
    });

    if (i == 0) {
      newPalet.classList.add("active");
      currentColor = getPalets(scheme)[i].rgbCode;
      // colorSelectionEl.innerText = getPalets(scheme)[i].colorName;
    }
    container.append(newPalet);
  }
}

function getPalets(scheme) {
  const paletsColors = [];
  let paletsInside = [];

  for (let i = 0; i < scheme.fillColors.length; i++) {
    const schemeColor = scheme.fillColors[i];

    if (!paletsColors.includes(schemeColor)) {
      paletsColors.push(schemeColor);

      for (let i = 0; i < globalColors.length; i++) {
        if (globalColors[i].rgbCode == schemeColor) paletsInside.push(globalColors[i]);
      }
    }
  }

  if (paletsInside.length == 0) paletsInside = globalColors;

  return paletsInside;

  // paletsInside[..][0] color name
  // paletsInside[..][1] color code
  // paletsInside.lenght palet qty
}

function generateLevelsView(container) {
  const title = document.createElement("h3");
  title.innerText = "SELEZIONA IL LIVELLO";
  title.className = "text-primary";
  container.append(title);
  printSchemeEl.classList.add("d-none");
  // modeWrapperEl.classList.add("d-none");
  backBtn.classList.add("d-none");
  scoreEl.classList.add("d-none");
  restartBtn.classList.add("d-none");

  for (let i = 0; i < schemes.length; i++) {
    const newBtn = document.createElement("div");
    newBtn.className = "btn btn-outline-primary";
    newBtn.innerText = `Level ${i + 1}`;

    newBtn.addEventListener("click", function () {
      schemeOnLoad = schemes[i];
      printSchemeEl.classList.remove("d-none");
      // modeWrapperEl.classList.remove("d-none");
      backBtn.classList.remove("d-none");
      scoreEl.classList.remove("d-none");
      restartBtn.classList.remove("d-none");

      generateGrid(schemeOnLoad, tailWrapperEl);
      generatePalets(paletsWrapperEl, schemeOnLoad);
      container.innerHTML = ``;
    });

    container.append(newBtn);
  }
}

function isPuzzleComplete() {
  const tails = document.querySelectorAll(".tail");
  const tailsColor = tails[0].style.backgroundColor;
  let result = true;

  tails.forEach((tail) => {
    if (tail.style.backgroundColor != tailsColor) {
      result = false;
      return;
    }
  });

  return result;
}

function endGame(victory) {
  scoreEl.innerHTML = victory ? `Hai VINTO con ${currentMoves} mosse su ${schemeOnLoad.maxMoves}` : `Hai PERSO (avevi solo ${schemeOnLoad.maxMoves} mosse/a)`;
}
