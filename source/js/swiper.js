const initSwiper = () => {
  new Swiper('.swiper', {
    initialSlide: 0,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
};

initSwiper();
