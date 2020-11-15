let counterValue = 0;
const value = document.querySelector('#value');

const increment = function () {
    counterValue += 1;
    render();
}

const decrement = function () {
    counterValue -= 1;
        render();


}
function render() {
    value.textContent = counterValue;
}
const buttInc = document.querySelector('.increment');
const buttDec = document.querySelector('.decrement');

buttInc.addEventListener('click', increment);
buttDec.addEventListener('click', decrement);