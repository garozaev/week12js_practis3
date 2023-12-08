
const alphabet = ['у', 'к', 'я', 'с'];
const buttonRandom = document.getElementById('button_ran');
const pRandomName = document.getElementById('p_ran');

const randomName = () => {
const randomIndex1 = alphabet[Math.floor(Math.random() * alphabet.length)];
const randomIndex2 = alphabet[Math.floor(Math.random() * alphabet.length)];
const randomIndex3 = alphabet[Math.floor(Math.random() * alphabet.length)];
const randomIndex4 = alphabet[Math.floor(Math.random() * alphabet.length)];
const name = randomIndex1.toUpperCase() + randomIndex2 + randomIndex3 + randomIndex4;
pRandomName.textContent = name;

// console.log(randomIndex1);
//console.log(randomIndex2);
//console.log(randomIndex3);
//console.log(randomIndex4);
};
//console.log(pRandomName);
buttonRandom.addEventListener('click', randomName);


