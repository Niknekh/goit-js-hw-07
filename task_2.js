const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let list = ingredients.map((value) =>
  {
    let item = document.createElement('li');
    item.textContent = value;
    return item;
  });
 function childList (child) {
  return child.map(element => element.outerHTML).join('');
}    
document.querySelector("#ingredients").insertAdjacentHTML('afterbegin',childList (list));