const text = [
    'This is a test',
    'potato salad',
]

const form = document.querySelector(".lorem-form");
const numOfPara = document.getElementById("numofpara");
const numOfParaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
    const value = e.target.value;
    numOfPara.value = value;
    numOfParaRange.value = value;
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(numOfPara.value)
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;

})


numOfPara.addEventListener('input', syncParaNumbers);
numOfParaRange.addEventListener('input', syncParaNumbers);
