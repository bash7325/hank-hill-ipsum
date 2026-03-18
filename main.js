const form = document.querySelector(".lorem-form");
const numOfPara = document.getElementById("numofpara");
const numOfParaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");
const toast = document.getElementById("copyToolTip");

function syncParaNumbers(e) {
  const value = e.target.value;
  numOfPara.value = value;
  numOfParaRange.value = value;
}

// Fisher-Yates shuffle for uniform randomness
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => { toast.classList.remove("show"); }, 2500);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(numOfPara.value);
  const tempText = shuffle(text).slice(0, value);

  let html = '<div class="copy-all-wrap"><button class="btn" id="copyAllBtn">Copy All</button></div>';
  html += tempText.map((item) =>
    `<p class="result"><span class="quote-text">${item}</span><button class="btn copy" onclick="handleCopyTextFromParagraph(event)">copy</button></p>`
  ).join("");
  result.innerHTML = html;

  document.getElementById("copyAllBtn").addEventListener("click", handleCopyAll);
});

numOfPara.addEventListener("input", syncParaNumbers);
numOfParaRange.addEventListener("input", syncParaNumbers);

function handleCopyTextFromParagraph(e) {
  const btn = e.target;
  const quoteText = btn.parentNode.querySelector(".quote-text").textContent;
  navigator.clipboard.writeText(quoteText);
  btn.textContent = "copied!";
  setTimeout(() => { btn.textContent = "copy"; }, 1200);
  showToast("Text has been copied I tell you what");
}

function handleCopyAll() {
  const quotes = [...document.querySelectorAll(".quote-text")].map(el => el.textContent);
  navigator.clipboard.writeText(quotes.join("\n\n"));
  showToast("All paragraphs copied I tell you what");
}
