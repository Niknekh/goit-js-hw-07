const rangeButt = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
rangeButt.addEventListener('input', event => span.style.fontSize = `${event.target.valueAsNumber}px`);

