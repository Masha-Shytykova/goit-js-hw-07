const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const item = document.createElement('li');
const ulIngredients = document.createElement('ul');

//item.textContent = ingredients[0];

for (const ingredient of ingredients) {
  item.textContent = ingredient;
}
console.log(item);
