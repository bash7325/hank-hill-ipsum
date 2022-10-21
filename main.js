
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

  //create an array of unique 3 digit ids
  const ids = [];
  while (ids.length < value) {
    const id = Math.floor(Math.random() * 1000);
    if (!ids.includes(id)) {
      ids.push(id);
    }
  }

  tempText = tempText.map((item, index) => `<p id="p${ids[index]}" class="result">${item}<button id="copyBtn" onclick="handleCopyTextFromParagraph()"  class="copy">copy</button></p>`).join("");
  result.innerHTML = tempText;
});

numOfPara.addEventListener("input", syncParaNumbers);
numOfParaRange.addEventListener("input", syncParaNumbers);

function handleCopyTextFromParagraph() {
  //depending on what button is clicked, copy that text to the clipboard
  const id = event.target.parentNode.id;
  const text = document.getElementById(id).innerText.slice(0, -4);
  navigator.clipboard.writeText(text);
}



