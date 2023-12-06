let form = document.querySelector('form');
let weightInput = document.querySelector('#weight');
let heightInput = document.querySelector('#height');
let btnCalcular = document.querySelector('#btn-calcular');

let modalWrapper = document.querySelector('.popup-card');
let closeBtn = document.querySelector('.close');
let modalMensage = document.querySelector('span');


//OBJETOS LITERAAIS
const Modal = {
    open(){
        modalWrapper.classList.add('open');
},
    close(){
        modalWrapper.classList.remove('open')
    }
}

//FUNÇÕES
form.onsubmit = (event) =>{
    event.preventDefault()

    const weight = weightInput.value;
    const heigth = heightInput.value;
    

    let result = IMC(weight, heigth);
    let mensage = `Seu IMC é de ${result}`;
   
    modalMensage.innerText = `seu imc é de ${result}`;
    //modalMensage.innerHTML = mensage
    Modal.open();
}

function IMC(weight, heigth){
    return (weight / ((heigth / 100) **2)).toFixed(2)
}

closeBtn.onclick = function(){
    Modal.close();
}
