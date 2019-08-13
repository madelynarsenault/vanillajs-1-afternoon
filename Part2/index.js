console.log("I wonder if Ian McKellen ever misses playing Gandalf"); 

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card);
}

console.log(idInput);
console.log(colorInput);

