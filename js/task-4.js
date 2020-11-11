const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value')

const incrementValue = () => value.textContent ++;
const decrementValue = () => {
    if (value.textContent > 0) {
        value.textContent--;
    } else {
        value.textContent = 0;
    }
}


btnIncrement.addEventListener('click', incrementValue);
btnDecrement.addEventListener('click', decrementValue);

