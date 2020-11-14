const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let items = '';
const linkRef = document.querySelector('#ingredients')
ingredients.forEach(item => {
    items = document.createElement('li');
    items.textContent = item;
    linkRef.append(items)
})