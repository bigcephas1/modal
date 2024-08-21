// create variables to traget the elements
let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')
// add eventListener to the button with id of open-btn
openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block'

})
closeBtn.addEventListener('click', function () {
     modalContainer.style.display = 'none'

})
// add eventListener to close the modal hide or close the modal by clicking on any part of the page
window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'

    }
})