const container = document.querySelector('#categories');
const item = container.querySelectorAll('li.item')
for (let li of item){
    const h2 = li.querySelector('h2').textContent;
    const UlCategories = li.querySelector('ul');
    const valueOfCategories = UlCategories.querySelectorAll('li').length;
    console.log(`Категория: ${h2}
Количество элементов: ${valueOfCategories}`)
}
console.log(`В списке ${item.length} категории.`)