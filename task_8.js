const refs = {
    input: document.querySelector('[type="number"]'),
    boxes: document.querySelector('#boxes'),
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]')
}
let result = 0;
refs.input.addEventListener('input', event => result = event.target.valueAsNumber)
refs.render.addEventListener('click', event => createBoxes(result))
refs.destroy.addEventListener('click', event => destroyBoxes())

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1){
        let newDiv = document.createElement('div')
        newDiv.style.backgroundColor = randomColor();
        newDiv.style.width = `${30 + i* 10}px`;
        newDiv.style.height = `${30 + i* 10}px`;

        refs.boxes.appendChild(newDiv)
    }
}

function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8);
}
function destroyBoxes() {
    return refs.boxes.innerHTML = '';
}