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
    'Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.',
    'We humans have lost the wisdom of genuinely resting and relaxing. We worry too much. We dont allow our bodies to heal, and we dont allow our minds and hearts to heal.',
    'Impermanence and selflessness are not negative aspect of life, but the very foundation on which life is built. Impermanence is the constant transformation of things. Without impermanence, there can be no life. Selflessness is the interdependent nature of all things. Without interdependence, nothing could exist.',
    'To take good care of ourselves, we must go back and take care of the wounded child inside of us. You have to practice going back to your wounded child every day. You have to embrace him or her terderly, like a big brother or a big sister. You have to talk to him, talk to her. And you can write a letter to the Little child in you, of two or three pages, to that you recognize his or her presence, and will do everything you can to heal his or her wounds.',
    'The most important thing in life is to be kind to yourself. To be kind to others is to be kind to yourself.',
    'If a child smiles, if an adult smiles, that is very important. If in our daily lives we can smile, if we can be peaceful and happy, not only we, but everyone will profit from it. If we really know how to live, what better way to start the day than with a smile? Our smile affirms our awareness and determination to live in peace and joy. The source of a true smile is an awakened mind.',
    'Look at flowers, butterflies, trees, and children with the eyes of compassion. Compassion will change your life and make it wonderful.',
    'You can do it if you have the energy of mindfulness. You cultivate the energy of mindfulness with mindful breathing and mindful walking, and with that energy, you can recognize and tenderly embrace your worry, fear, and anger. When your baby suffers and cries, you don’t want to punish him or her, because your baby is you. Your fear and anger are like your baby. Don’t imagine that you can just throw them out the window. Don’t be violent toward your anger, your fear, and your worries.',
    'We have to learn to build safety with our in-breath and our out-breath. We have to learn to build safety with our steps, with our way of acting and reacting, with our words and our efforts to build communication.',
    'When the crowded Vietnamese refugee boats met with storms or pirates, if everyone panicked all would be lost. But if even one person on the boat remained calm and centered, it was enough. It showed the way for everyone to survive.',
    'Maybe you have a habit of worrying. Even if you know it’s neither necessary nor useful, you still worry. You’d like to ban worry and get rid of it, because you know that when you worry you can’t get in touch with the wonders of life and you can’t be happy. So you get angry at your worry; you don’t want it. But worry is a part of you, and that’s why when your worry comes up, you have to know how to handle it tenderly and peacefully.',
    

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
