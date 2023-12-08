export const Modal = {
    modalWrapper : document.querySelector('.popup-card'),
    closeBtn : document.querySelector('.close'),
    modalMensage : document.querySelector('.modal .title span'),
    open(){
        Modal.modalWrapper.classList.add('open');
},
    close(){
        Modal.modalWrapper.classList.remove('open')
    }
}

Modal.closeBtn.onclick = function(){
    Modal.close();
}



// fechando modal pela tecla esc

window.addEventListener('keydown', handleEscapeKey)
function handleEscapeKey(event){
    if(event.key === 'Escape'){
        Modal.close()
    }
}

