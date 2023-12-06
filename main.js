import { Modal } from "./modal.js"

let form = document.querySelector('form');
let weightInput = document.querySelector('#weight');
let heightInput = document.querySelector('#height');




//FUNÇÕES
form.onsubmit = (event) =>{
    event.preventDefault()

    const weight = weightInput.value;
    const heigth = heightInput.value;
    

    let result = IMC(weight, heigth);
    let mensage = `Seu IMC é de ${result}`;

    Modal.modalMensage.innerText = mensage
    Modal.open();
}

function IMC(weight, heigth){
    return (weight / ((heigth / 100) **2)).toFixed(2)
}
