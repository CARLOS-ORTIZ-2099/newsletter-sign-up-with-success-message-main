const inputEmail = document.querySelector('.email')
const hiddenLabel = document.querySelector('.hidden-label')
const formSubmit = document.querySelector('.form')
const hiddenModal = document.querySelector('.hidden-modal')
const dissmisButton = document.querySelector('.dissmis-button')
let email = ''
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputEmail.addEventListener('keyup', ({target}) => {
    let inputError = target.classList.contains('error')
    let labelError = hiddenLabel.classList.contains('label-error')
    if(inputError && labelError){
        target.classList.remove('error')
        hiddenLabel.classList.remove('label-error')
    }
})

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    email = e.target.email.value
     if(!regexEmail.test(email)){
        inputEmail.classList.add('error')
        hiddenLabel.classList.add('label-error')
        return
    }

    hiddenModal.classList.remove('hidden')
    e.target.reset()
    let text = hiddenModal.children[0].children[2]
    text.innerHTML = `
        <p>
        A confirmation email has been sent to ${email} . 
        Please open it and click the button inside to confirm your subscription.
        </p>
    `
})

dissmisButton.addEventListener('click', () => hiddenModal.classList.add('hidden'))

