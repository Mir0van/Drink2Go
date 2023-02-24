let sortSelect = document.querySelector('.select__button');
const textButton = document.querySelector('.select__text-button');
const options = document.querySelectorAll('.select__option');
const isEscapeKey = (evt) => evt.key === 'Escape';

const optionClickHanler = (option) => {
  let selectedOptions = option.querySelector('.select__option-text');
  textButton.innerText = selectedOptions.innerText;

  options.forEach((option) => {
    option.querySelector('.select__option-text').classList.remove('select__option-text--selected');
  });
  selectedOptions.classList.add('select__option-text--selected');
};

const scrollHandler = () => {
  sortSelect.classList.remove('select__button--opened');
  sortSelect.classList.add('select__button--closed');

  window.removeEventListener('scroll', scrollHandler);
  document.removeEventListener('click', clickHandler);
  document.removeEventListener('keydown', selectorEscKeydownHandler);
}

function selectorEscKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    scrollHandler();
  }
}

function clickHandler (evt) {
  if (!evt.target.closest('.select__button')) {
    scrollHandler();
  }
}

const toogleSortSelect = () => {
  sortSelect.addEventListener('click', () => {
    sortSelect.classList.toggle('select__button--closed')
    sortSelect.classList.toggle('select__button--opened')

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', selectorEscKeydownHandler);
    window.addEventListener('scroll', scrollHandler);
  });

  options.forEach((option) => {
    option.addEventListener('click', optionClickHanler.bind(this, option));
  });
}

toogleSortSelect();
