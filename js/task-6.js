const inputRef = document.querySelector('#validation-input')

// console.log(inputRef.dataset.length)
const inputAction = inputRef.dataset.length;

inputRef.addEventListener('input', event => {

console.log(inputAction)
        inputRef.classList.add('invalid')

    if (event.target.value.length === Number(inputAction)) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.remove('valid')
        }
})