const inputRef = document.querySelector('#name-input')
const nameLabelRef = document.querySelector('#name-output')
const defaultLabel = nameLabelRef.textContent;
console.log(defaultLabel)

inputRef.addEventListener('input', e => {
    console.log(nameLabelRef.textContent)

    nameLabelRef.textContent = e.target.value;
    
    if (nameLabelRef.textContent.length === 0) {
        
        nameLabelRef.textContent = defaultLabel
    } 
});