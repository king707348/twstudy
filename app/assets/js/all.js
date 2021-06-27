var swiper = new Swiper(".mySwiper", {});
var swiper_left = new Swiper(".mySwiper-left", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
});
var swiper_right = new Swiper(".mySwiper-right", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
});
var swiper_right = new Swiper(".mySwiper-video", {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
    },
});