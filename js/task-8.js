const controlRef = document.querySelector('#controls input')
const btnCreateRef = document.querySelector('#controls button[data-action="render"]')
const btnDestroyRef = document.querySelector('#controls button[data-action="destroy"]')

let value;

controlRef.addEventListener('input', e => {
    value = Number(e.target.value);
});

console.log(value)
const btnCreate = btnCreateRef.addEventListener('click', e => {
})



