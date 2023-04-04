const sentence1 = ["GenesisHome Horizon, in prime Jakkur, now releases select residences with large courtyard-styled decks. The perfect blend of location and lifestyle in a 2-acre boutique mixed-use development, right on NH 44, opp. Jakkur Aerodrome."];

const sentence2 = ["Winning the Best Original Song at <a href='#'> The Academy</a> is no mean feat! ",
                    "We at Century are proud of #NaatuNaatu's achievements on the global stage.",
                    "It has surely been a very memorable moment for India today today!... <a href='#'>See more...</a>"];

const pE1 = document.getElementById('div2-two-p1');
const pE2 = document.getElementById('div2-two-p2');
const pE3 = document.getElementById('div2-two-p3');
const pE4 = document.getElementById('div2-two-p4');
const pE5 = document.getElementById('div2-two-p5');



pE1.innerHTML = sentence1[0];
pE2.innerHTML = sentence1[0];
pE3.innerHTML = sentence1[0];
pE4.innerHTML = sentence1[0];
pE5.innerHTML = sentence1[0];


const paragraphEl1 = document.querySelector('.divTwo-one2-container-p1');
const paragraphEl2 = document.querySelector('.divTwo-one2-container-p2');
const paragraphEl3 = document.querySelector('.divTwo-one2-container-p3');

paragraphEl1.innerHTML = sentence2[0];
paragraphEl2.innerHTML = sentence2[1];
paragraphEl3.innerHTML = sentence2[2];