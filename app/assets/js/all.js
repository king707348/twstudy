// swiper 設定
var swiper = new Swiper(".mySwiper", {    
});
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

// 載入 wow.js
new WOW().init();

// 右邊 sidebar 切換
$('.dropdown-toggle').click(function(e){
    e.preventDefault();
    $('.header .fixed-right .icon').slideToggle()
})

$('.fixed-black-box').hover(function(){
    $('.fixed-black-box').hide();
    $('.fixed-black .menu').show();
})

$('.fixed-black .menu').mouseleave(function(){
    $('.fixed-black-box').show();
    $('.fixed-black .menu').hide();
})

$('.fixed-black .menu').hide();

// 分頁功能
// Show the first tab and hide the rest
$('.tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tabs-nav li').click(function(){
  $('.tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});