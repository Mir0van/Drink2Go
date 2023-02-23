let sortSelect = document.querySelector('.catalog__select');
const isEscapeKey = (evt) => evt.key === 'Escape';

const scrollHandler = () => {
  sortSelect.classList.remove('catalog__select--opened');
  sortSelect.classList.add('catalog__select--closed');

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
  if (!evt.target.closest('.catalog__select')) {
    scrollHandler();
  }
}

const toogleSortSelect = () => {
  sortSelect.addEventListener('click', () => {
    sortSelect.classList.toggle('catalog__select--closed')
    sortSelect.classList.toggle('catalog__select--opened')

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', selectorEscKeydownHandler);
    window.addEventListener('scroll', scrollHandler);
  });
}

toogleSortSelect();
