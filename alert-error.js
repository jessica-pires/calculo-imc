export const AlertError = {
    element: document.querySelector('.popup-error'),
    open(){
        AlertError.element.classList.add('open')
    },
    close(){
        AlertError.element.classList.remove('open')
    }
}