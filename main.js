const text = [
    'To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself',
    'Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything – anger, anxiety, or possessions – we cannot be free.',
    'The raft is used to cross the river. It isn’t to be carried around on your shoulders. The finger which points at the moon isn’t the moon itself.',
    'People usually consider walking on water or in thin air a miracle. But I think the real miracle is not to walk either on water or in thin air, but to walk on earth. Every day we are engaged in a miracle which we don’t even recognize: a blue sky, white clouds, green leaves, the black, curious eyes of a child — our own two eyes. All is a miracle.',
    'Mindfulness helps you go home to the present. And every time you go there and recognize a condition of happiness that you have, happiness comes',
    'Through my love for you, I want to express my love for the whole cosmos, the whole of humanity, and all beings. By living with you, I want to learn to love everyone and all species. If I succeed in loving you, I will be able to love everyone and all species on Earth… This is the real message of love.',
    'Love needs to be nurtured and fed to survive; and our suffering also survives because we enable and feed it. We ruminate on suffering, regret, and sorrow. We chew on them, swallow them, bring them back up, and eat them again and again. If we’re feeding our suffering while we’re walking, working, eating, or talking, we are making ourselves victims of the ghosts of the past, of the future, or our worries in the present. We’re not living our lives.',
    'Nonviolent action, born of the awareness of suffering and nurtured by love, is the most effective way to confront adversity.',
    'Life is available only in the present. That is why we should walk in such a way that every step can bring us to the here and the now.',
    'You do not need to waste your time doing those things that are unnecessary and trifling. You do not have to be rich. You do not need to seek fame or power. What you need is freedom, solidity, peace and joy. You need the time and energy to be able to share these things with others.',
    'When a person’s speech is full of anger, it is because he or she suffers deeply',
    

  ]

const form = document.querySelector(".lorem-form");
const numOfPara = document.getElementById("numofpara");
const numOfParaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

function syncParaNumbers(e) {
    const value = e.target.value;
    numOfPara.value = value;
    numOfParaRange.value = value;
};


form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(numOfPara.value)
    let tempText = text.slice(0, value);
    tempText = tempText.sort(() => Math.random() - 0.5);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
});


numOfPara.addEventListener('input', syncParaNumbers);
numOfParaRange.addEventListener('input', syncParaNumbers);
