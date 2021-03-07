const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients')
let list = ingredients.map(element => {
  const newLi = document.createElement('li');
  newLi.textContent = element;
  return newLi;
})
ul.insertAdjacentHTML('afterbegin', list.map(child => child.outerHTML).join(''))