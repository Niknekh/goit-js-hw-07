const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newingredients = ingredients.map(element => {
  const array = document.createElement('li');
  array.textContent = element;
  return array;
})
function childList(child) {
  return child.map(element => element.outerHTML).join('');
    

}

const ul = document.querySelector('#ingredients');
ul.insertAdjacentHTML('afterbegin', childList(newingredients))

