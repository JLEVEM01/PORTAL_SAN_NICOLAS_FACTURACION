

var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    autoplay:{
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });