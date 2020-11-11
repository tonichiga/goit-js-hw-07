const quantity = document.querySelectorAll(`.item`);

const result = (array) => `В списке ${array.length} категории`;
console.log(result(quantity));

quantity.forEach(category => {
    const categoryTitleRef = category.querySelector('.item h2');
    console.log(`Категория: ${categoryTitleRef.textContent}`); 

    const quantityElement = categoryTitleRef.nextSibling.nextSibling.childNodes;
    console.log(`Количество элементов: ${quantityElement.length}`)
  });
