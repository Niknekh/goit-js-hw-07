const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
range.addEventListener('input', event => span.style.fontSize = `${event.target.value}px`)