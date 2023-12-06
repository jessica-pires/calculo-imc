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