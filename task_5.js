const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

refs.input.addEventListener('input', event => event.target.value.length <= 0 ? refs.span.textContent = 'незнакомец' : refs.span.textContent = event.target.value);
