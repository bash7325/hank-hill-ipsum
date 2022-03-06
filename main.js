const text = [
    'This is a test',
    'potato salad'
]

const form = document.querySelector(".lorem-form");
const numOfPara = document.getElementById("numofpara");
const numOfParaRange = document.getElementById("numofaraRange");
cosnt result = document.querySelector(".lorem-text");

fucntion syncParaNumners(e) {
    const value = e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
}

numofpara.addEventListener('input', syncParaNumners);
numofparaRange.addEventListener('input', syncParaNumners);
