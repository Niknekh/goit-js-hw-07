const refs = {
    container: document.querySelector('#counter'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value')
    
}
let counterValue = 0;
function increment() {
    counterValue += 1;
render()
}
function decrement() {
    counterValue -= 1;
    render()
}
function render() {
    refs.value.textContent = counterValue;
}
refs.increment.addEventListener('click', increment)
refs.decrement.addEventListener('click', decrement )