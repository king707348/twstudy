// swiper 設定
var swiper = new Swiper(".mySwiper", {   
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, 
  grabCursor: true,
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
// 注意 .active 與 .active-bottom 為了覆蓋樣式有加上 !importnat
// 這裡是預設載入所有樣式
$('.tabs-nav li:first-child').find('a').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
$('.course-class').children().hide();
$('.course-class').children('.first').show();
$('.tabs-nav li:first-child').addClass('active-bottom');

// Click function
$('.tabs-nav li').click(function(e){
  e.preventDefault();
  $('.tabs-nav li').removeClass('active-bottom');
  $('.tabs-nav li a').removeClass('active');
  $(this).addClass('active-bottom');
  $(this).find('a').addClass('active');
  $('.tab-content').hide();

  let activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();

  if (activeTab == '#tab1') {
    $('.course-class').children().hide();
    $('.course-class').children('.first').show();
  } else if (activeTab == '#tab2') {
    $('.course-class').children().hide();
    $('.course-class').children('.second').show();
  } else if (activeTab == '#tab3') {
    $('.course-class').children().hide();
    $('.course-class').children('.third').show();
  } else if (activeTab == '#tab4') {
    $('.course-class').children().hide();
    $('.course-class').children('.fourth').show();
  } else if (activeTab == '#tab5') {
    $('.course-class').children().hide();
    $('.course-class').children('.fifth').show();
  } else if (activeTab == '#tab6') {
    $('.course-class').children().hide();
    $('.course-class').children('.sixth').show();
  }

  return false;
});

// 選單
$('[menu]').hide();
$('[open-menu]').click(function(){
  const el = $(`[menu=${$(this).attr('open-menu')}]`)
  if(el.is(":visible")) {
    el.hide()
  } else {
    $("[menu][level]").filter(function() {
      return $(this).attr("level") >= el.attr('level');
    }).hide();
    el.show()
  }
});