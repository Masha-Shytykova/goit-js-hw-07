//Напиши скрипт, который бы при потере фокуса на инпуте, проверял
//его содержимое на правильное количество символов.

//<input
//  type="text"
//  id="validation-input"
//  data-length="6"
//  placeholder="Введи 6 символов"
///>;
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputEl.classList.add('invalid');
  if (event.currentTarget.value.length === +inputEl.dataset.length) {
    inputEl.classList.replace('invalid', 'valid');
  }
}
// Пожалуйста, подскажите, почему тернарник не работает (вернее работает только на одну проверку,
//но если изменять кол - во символов, то уже не работает)

//function onInputBlur(event) {
//  event.currentTarget.value.length === +inputEl.dataset.length
//    ? inputEl.classList.add('valid')
//    : inputEl.classList.add('invalid');
//}
