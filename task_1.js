const categoryItems = document.querySelectorAll('.item');
console.log(`В списке ${categoryItems.length} категории.`);

const array = [...categoryItems];

array.forEach(element => {
    const name = element.querySelector('h2').textContent;
    const numbers = element.querySelectorAll('li').length;
    return console.log(`Категория: ${name}
Количество элементов: ${numbers}`
)});