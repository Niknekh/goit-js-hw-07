const input = document.querySelector('#validation-input');
input.addEventListener('blur', event => {
    if (event.target.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
})