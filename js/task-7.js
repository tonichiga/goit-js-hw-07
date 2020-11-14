const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')

inputRangeRef.addEventListener('input', e => {
    const fontSizeRef = e.target.value;
    console.log(textRef.style.fontSize = `${fontSizeRef}.px`)
})

