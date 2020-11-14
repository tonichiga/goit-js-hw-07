const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

let value = document.querySelector('#value')
let number = 0;

const incrementValue = () => {
    number += 1;
    value.textContent = number
};
const decrementValue = () => {
    if (value.textContent > 0) {
        number -= 1;
        value.textContent = number;
    } else {
        value.textContent = 0;
    }
}   

btnIncrement.addEventListener('click', incrementValue);
btnDecrement.addEventListener('click', decrementValue);

