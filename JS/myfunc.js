// # RETURN NEAR TAILS ELEMENTS FROM DATA-INDEX

function getNearTails(dataTailIndex) {
  const nearTails = [];
  let near1;
  let near2;
  let near3;

  const myIndexList = dataTailIndex.split("-");
  const myRow = parseInt(myIndexList[0]);
  console.log(myRow);

  const myCol = parseInt(myIndexList[1]);
  console.log(myCol);

  const mySide = myIndexList[2];
  console.log(mySide);

  if (mySide == "up") {
    near1 = document.querySelector(`[data-tail-index="${myRow - 1}-${myCol}-down"]`);
    near2 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-left"]`);
    near3 = document.querySelector(`[data-tail-index="${myRow}-${myCol}-right"]`);
  } else if (mySide == "down") {
    near1 = document.querySelector(`[data-tail-index="${myRow + 1}-${myCol}-down"]`);
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

//   TEST
//   const test = document.querySelector(`[data-tail-index="0-0-left"]`);
//   console.log(test);

//   const testFunc = getNearTails(test.getAttribute("data-tail-index"));
//   console.log(testFunc);
