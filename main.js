import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notANumber } from "./utils.js";

let form = document.querySelector('form');
let weightInput = document.querySelector('#weight');
let heightInput = document.querySelector('#height');




//FUNÇÕES
form.onsubmit = (event) =>{
    event.preventDefault()

    const weight = weightInput.value;
    const heigth = heightInput.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(heigth)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()
    

    let result = IMC(weight, heigth);
    let mensage = `Seu IMC é de ${result}`;

    Modal.modalMensage.innerText = mensage
    Modal.open();
}


// fechar a janela de erro se estiver na tela

weightInput.oninput = () => AlertError.close();
heightInput.oninput = () => AlertError.close();