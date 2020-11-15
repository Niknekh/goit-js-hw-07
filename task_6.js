const input = document.querySelector('#validation-input');

input.addEventListener('blur', addClass);

function addClass(event) {
    if (event.target.value.length === 6) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
input.classList.add('invalid');
        input.classList.remove('valid')
    }
}