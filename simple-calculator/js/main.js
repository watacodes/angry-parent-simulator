document.getElementById('pumpkin').addEventListener('click', pumpkin);
document.getElementById('dominosPizza').addEventListener('click', dominos);
document.getElementById('zebra').addEventListener('click', zebra);
document.getElementById('cantThinkOfAnything').addEventListener('click', cantThink);
let resultPlaceHolder = document.getElementById('placeToPutResult');

let result = 0

function pumpkin() {
  result += 0;
  resultPlaceHolder.innerText = result;
}

function dominos() {
  result += 3;
  resultPlaceHolder.innerText = result;
}

function zebra() {
  result += 9;
  resultPlaceHolder.innerText = result;
}

function cantThink() {
  result -= 2;
  resultPlaceHolder.innerText = result;
}

