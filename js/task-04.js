//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика
//на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementBtnEl = valueEl.nextElementSibling;

const onDecrementBtnClick = () => {
  valueEl.textContent = counterValue -= 1;
};

const onIncrementBtnClick = () => {
  valueEl.textContent = counterValue += 1;
};

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);
