const form = document.querySelector(".lorem-form");
const numOfPara = document.getElementById("numofpara");
const numOfParaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
  const value = e.target.value;
  numOfPara.value = value;
  numOfParaRange.value = value;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(numOfPara.value);
  let tempText = text.sort(() => Math.random() - 0.5).slice(0, value);
  tempText = tempText.sort(() => Math.random() - 0.5);
  tempText = tempText.map((item) => `<p class="result">${item}</p>`).join("");
  result.innerHTML = tempText;
});

numOfPara.addEventListener("input", syncParaNumbers);
numOfParaRange.addEventListener("input", syncParaNumbers);

