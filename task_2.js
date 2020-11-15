const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
ingredients.forEach(element => {
    let lis = document.createElement('li');
    lis.textContent = element;
    list.appendChild(lis);
});