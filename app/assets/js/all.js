"use strict";

// swiper 設定
<<<<<<< HEAD
var swiper = new Swiper(".mySwiper", {});
=======
var swiper = new Swiper(".mySwiper", {   
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, 
  grabCursor: true,
});
>>>>>>> 02c3390d9b282ab0131c69c6d50c58546fd1e949
var swiper_left = new Swiper(".mySwiper-left", {
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});
var swiper_right = new Swiper(".mySwiper-right", {
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true
});
var swiper_right = new Swiper(".mySwiper-video", {
  spaceBetween: 20,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  }
}); // 載入 wow.js

new WOW().init(); // 右邊 sidebar 切換

$('.dropdown-toggle').click(function (e) {
  e.preventDefault();
  $('.header .fixed-right .icon').slideToggle();
  
  $('.close-menu').toggle()
  $('.open').toggle()
});


$(window).on('scroll',()=>{
  if($(window).innerWidth() >= 769){
    $('.fixed-black-box').show();
    $('.fixed-black .menu').hide();
    $('.read-more').show()
    
    $('.fixed-black-box').hover(function () {
      $('.fixed-black-box').hide();
      $('.fixed-black .menu').show();
    });
    $('.fixed-black .menu').mouseleave(function () {
      $('.fixed-black-box').show();
      $('.fixed-black .menu').hide();
    });
    // hero
    $('.hero-box .left-list').show()
    $('.hero-box .right-list').show()
  }else if($(window).innerWidth() < 769){
    $('.fixed-black-box').hide();
    $('.fixed-black .menu').show();
    $('.right-list').removeClass('wow fadeInUp')
    $('.read-more').hide()
    // hero
    $('.li-stu h2').on('click',function(){
      $('.hero-box .left-list').show()
      $('.hero-box .right-list').hide()
      $('.li-news h2').addClass('unfocus')
      $(this).removeClass('unfocus')
    })
    $('.li-news h2').on('click',function(){
      $('.hero-box .left-list').hide()
      $('.hero-box .right-list').show()
      $('.li-stu h2').addClass('unfocus')
      $(this).removeClass('unfocus')
    })
  }
})
if($(window).innerWidth() < 769){
  $('.left-list').removeClass('wow fadeInUp')
  $('.right-list').removeClass('wow fadeInUp')
  // hero
  $('.li-stu').on('click',function(){
    $('.hero-box .left-list').show()
    $('.hero-box .right-list').hide()
  })
  $('.li-news').on('click',function(){
    $('.hero-box .left-list').hide()
    $('.hero-box .right-list').show()
  })
}


$('.fixed-black .menu').hide(); // 分頁功能
// 注意 .active 與 .active-bottom 為了覆蓋樣式有加上 !importnat
// 這裡是預設載入所有樣式

$('.tabs-nav li:first-child').find('a').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();
$('.course-class').children().hide();
$('.course-class').children('.first').show();
$('.tabs-nav li:first-child').addClass('active-bottom'); // Click function

$('.tabs-nav li').click(function (e) {
  e.preventDefault();
  $('.tabs-nav li').removeClass('active-bottom');
  $('.tabs-nav li a').removeClass('active');
  $(this).addClass('active-bottom');
  $(this).find('a').addClass('active');
  $('.tab-content').hide();
<<<<<<< HEAD
  var activeTab = $(this).find('a').attr('href');
=======

  let activeTab = $(this).find('a').attr('href');
>>>>>>> 02c3390d9b282ab0131c69c6d50c58546fd1e949
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

<<<<<<< HEAD


// toggle
$('.schools-list').on('click',function(){
  $('.school-model').show()
})
$('.school-model .top-head a').on('click',function(){
  $('.school-model').hide()
})

// 升學課程
$('.schools').on('click',function(){
  $('.sch-u2').toggle()
  $('.schools img').toggleClass('deg')
})
// 國小
$('.element').on('click',function(e){
  $('.ju-u3').css({'display':'none'})
  $('.ele-u3').toggle()
  $('.element img').toggleClass('deg')
})
// 國中
$('.junior').on('click',function(){
  $('.ju-u3').toggle()
  $('.junior img').toggleClass('deg')
})
// 高職
$('.vacational-schools').on('click',function(){
  $('.vac-u3').toggle()
  $('.vacational-schools img').toggleClass('deg')
})
// 高中
$('.high-schools').on('click',function(){
  $('.high-u3').toggle()
  $('.high-schools img').toggleClass('deg')
})
// 大學
$('.college-transfer-test').on('click',function(){
  $('.col-trans-u3').toggle()
  $('.college-transfer-test img').toggleClass('deg')
})
// 研究所
$('.institute').on('click',function(){
  $('.ins-u3').toggle()
  $('.institute img').toggleClass('deg')
})
// 護專
$('.nursing').on('click',function(){
  $('.nurse-u3').toggle()
  $('.nursing img').toggleClass('deg')
})
// 警專
$('.police-academy').on('click',function(){
  $('.academy-u3').toggle()
  $('.police-academy img').toggleClass('deg')
})
// 學士後醫學
$('.medicine').on('click',function(){
  $('.med-u3').toggle()
  $('.medicine img').toggleClass('deg')
})

// 教職
$('.teacher').on('click',function(){
  $('.teacher-u2').toggle()
  $('.teacher img').toggleClass('deg')
})
// 教師資格
$('.teacher-qualification').on('click',function(){
  $('.quali-u3').toggle()
  $('.teacher-qualification img').toggleClass('deg')
})
// 教師甄選
$('.selection').on('click',function(){
  $('.t-sel-u3').toggle()
  $('.selection img').toggleClass('deg')
})
// 公幼教保員
$('.educare-giver').on('click',function(){
  $('.educare-giver-u3').toggle()
  $('.educare-giver img').toggleClass('deg')
})
// 幼教專班
$('.educare-class').on('click',function(){
  $('.educare-class-u3').toggle()
  $('.educare-class img').toggleClass('deg')
})
// 公費碩士班
$('.free-master').on('click',function(){
  $('.free-master-u3').toggle()
  $('.free-master img').toggleClass('deg')
})
// 校長主任甄試
$('.rector').on('click',function(){
  $('.rector-u3').toggle()
  $('.rector img').toggleClass('deg')
})
// 教育學程甄試
$('.edu-exam').on('click',function(){
  $('.edu-exam-u3').toggle()
  $('.edu-exam img').toggleClass('deg')
})
// 補教師資培訓
$('.sup-teacher').on('click',function(){
  $('.sup-teacher-u3').toggle()
  $('.sup-teacher img').toggleClass('deg')
})
// 學科知能評量
$('.sub-knowledge').on('click',function(){
  $('.sub-knowledge-u3').toggle()
  $('.sub-knowledge img').toggleClass('deg')
})

// 公職課程
$('.public-offices').on('click',function(){
  $('.public-offices-u2').toggle()
  $('.public-offices img').toggleClass('deg')
})
// 高普考
$('.gaopu').on('click',function(){
  $('.gaopu-u3').toggle()
  $('.gaopu img').toggleClass('deg')
})
// 初考
$('.one-test').on('click',function(){
  $('.one-test-u3').toggle()
  $('.one-test img').toggleClass('deg')
})
// 地方特考
$('.special-places-test').on('click',function(){
  $('.special-places-test-u3').toggle()
  $('.special-places-test img').toggleClass('deg')
})
// 特種考試
$('.special-test').on('click',function(){
  $('.special-test-u3').toggle()
  $('.special-test img').toggleClass('deg')
})
// 升資/轉任
$('.update').on('click',function(){
  $('.update-u3').toggle()
  $('.update img').toggleClass('deg')
})
// 公職專技人員
$('.skills').on('click',function(){
  $('.skills-u3').toggle()
  $('.skills img').toggleClass('deg')
})

// 就業課程
$('.get-job').on('click',function(){
  $('.get-job-u2').toggle()
  $('.get-job img').toggleClass('deg')
})
// 國營事業聯招
$('.state').on('click',function(){
  $('.state-u3').toggle()
  $('.state img').toggleClass('deg')
})
// 中華郵政
$('.post-office').on('click',function(){
  $('.post-office-u3').toggle()
  $('.post-office img').toggleClass('deg')
})
// 台電雇員
$('.electric').on('click',function(){
  $('.electric-u3').toggle()
  $('.electric img').toggleClass('deg')
})
// 中油雇員
$('.oil').on('click',function(){
  $('.oil-u3').toggle()
  $('.oil img').toggleClass('deg')
})
// 銀行招考
$('.bank').on('click',function(){
  $('.bank-u3').toggle()
  $('.bank img').toggleClass('deg')
})
// 台水評價人員
$('.water').on('click',function(){
  $('.water-u3').toggle()
  $('.water img').toggleClass('deg')
})
// 農會招考
$('.farming').on('click',function(){
  $('.farming-u3').toggle()
  $('.farming img').toggleClass('deg')
})
// 中國鋼鐵
$('.steel').on('click',function(){
  $('.steel-u3').toggle()
  $('.steel img').toggleClass('deg')
})
// 水利會招考
$('.water-con').on('click',function(){
  $('.water-con-u3').toggle()
  $('.water-con img').toggleClass('deg')
})
// 護理師招考
$('.dry-nurse').on('click',function(){
  $('.dry-nurse-u3').toggle()
  $('.dry-nurse img').toggleClass('deg')
})
// 捷運招考
$('.mrt').on('click',function(){
  $('.mrt-u3').toggle()
  $('.mrt img').toggleClass('deg')
})
// FIT金融人員基礎學科測試
$('.fit').on('click',function(){
  $('.fit-u3').toggle()
  $('.fit img').toggleClass('deg')
})
// 航空/海運
$('.drive').on('click',function(){
  $('.drive-u3').toggle()
  $('.drive img').toggleClass('deg')
})


// 執照課程
$('.license').on('click',function(){
  $('.license-u2').toggle()
  $('.license img').toggleClass('deg')
})
// 護理師
$('.nutritionist').on('click',function(){
  $('.nutritionist-u3').toggle()
  $('.nutritionist img').toggleClass('deg')
})
// 營養師
$('.nurse-license').on('click',function(){
  $('.nurse-license-u3').toggle()
  $('.nurse-license img').toggleClass('deg')
})
// 食品技師
$('.food').on('click',function(){
  $('.food-u3').toggle()
  $('.food img').toggleClass('deg')
})
// 物理治療師
$('.physiotherapy').on('click',function(){
  $('.physiotherapy-u3').toggle()
  $('.physiotherapy img').toggleClass('deg')
})
// 高考技師
$('.high-test').on('click',function(){
  $('.high-test-u3').toggle()
  $('.high-test img').toggleClass('deg')
})
// 領隊/導遊
$('.tourist-guide').on('click',function(){
  $('.tourist-guide-u3').toggle()
  $('.tourist-guide img').toggleClass('deg')
})
// 記帳士
$('.bookkeeper').on('click',function(){
  $('.bookkeeper-u3').toggle()
  $('.bookkeeper img').toggleClass('deg')
})
// 地政士
$('.scrivener').on('click',function(){
  $('.scrivener-u3').toggle()
  $('.scrivener img').toggleClass('deg')
})
// 不動產經理
$('.immovables').on('click',function(){
  $('.immovables-u3').toggle()
  $('.immovables img').toggleClass('deg')
})
// 消防士被士/師
$('.firefighting').on('click',function(){
  $('.firefighting-u3').toggle()
  $('.firefighting img').toggleClass('deg')
})
// 社會工作師
$('.society').on('click',function(){
  $('.society-u3').toggle()
  $('.society img').toggleClass('deg')
})
// 諮商心理師
$('.consultation').on('click',function(){
  $('.consultation-u3').toggle()
  $('.consultation img').toggleClass('deg')
})
// 醫師
$('.doctor').on('click',function(){
  $('.doctor-u3').toggle()
  $('.doctor img').toggleClass('deg')
})

// 語言課程
$('.lang-class').on('click',function(){
  $('.lang-class-u2').toggle()
  $('.lang-class img').toggleClass('deg')
})
// 英文檢定
$('.eng-test').on('click',function(){
  $('.eng-test-u3').toggle()
  $('.eng-test img').toggleClass('deg')
})
// 韓文檢定/韓語
$('.koa-test').on('click',function(){
  $('.koa-test-u3').toggle()
  $('.koa-test img').toggleClass('deg')
})
// 日文檢定/日語
$('.japan-test').on('click',function(){
  $('.japan-test-u3').toggle()
  $('.japan-test img').toggleClass('deg')
})
// 歐洲語系
$('.europen-test').on('click',function(){
  $('.europen-test-u3').toggle()
  $('.europen-test img').toggleClass('deg')
})
// 東南亞語系
$('.southeast-asia-test').on('click',function(){
  $('.southeast-asia-test-u3').toggle()
  $('.southeast-asia-test img').toggleClass('deg')
})
// 科丁程式語言
$('.pro-test').on('click',function(){
  $('.pro-test-u3').toggle()
  $('.pro-test img').toggleClass('deg')
})
// 英文學習專班
$('.eng-learn').on('click',function(){
  $('.eng-learn-u3').toggle()
  $('.eng-learn img').toggleClass('deg')
})

// 網站選單
$('.web-menu-list').on('click',function(){
  $('.web-menu').show()
})
$('.web-menu .top-head a').on('click',function(){
  $('.web-menu').hide()
})

// 常見問題
$('.ques').on('click',function(){
  $('.ques-u2').toggle()
  $('.ques img').toggleClass('deg')
})
// 獎學金申請
$('.apply-gold').on('click',function(){
  $('.apply-gold-u2').toggle()
  $('.apply-gold img').toggleClass('deg')
})
// 榜單見證
$('.witness').on('click',function(){
  $('.witness-u2').toggle()
  $('.witness img').toggleClass('deg')
})
// 考試攻略
$('.raiders').on('click',function(){
  $('.raiders-u2').toggle()
  $('.raiders img').toggleClass('deg')
})
// 相關免費服務
$('.free-service').on('click',function(){
  $('.free-service-u2').toggle()
  $('.free-service img').toggleClass('deg')
})
// 限時優惠/精選活動
$('.activity').on('click',function(){
  $('.activity-u2').toggle()
  $('.activity img').toggleClass('deg')
})
// 關於我們
$('.about-us').on('click',function(){
  $('.about-us-u2').toggle()
  $('.about-us img').toggleClass('deg')
})


// 搜尋
$('.mobile-search').on('click',function(){
  $('.search-bar').show()
})
$('.search-close').on('click',function(){
  $('.search-bar').hide()
})


// hover function
// $('.tabs-nav li').hover(function(){
//     $(this).toggleClass('active-bottom')
// })
//# sourceMappingURL=all.js.map


=======
// 選單
$('[menu]').hide();
$('[open-menu], [menu] li').mouseenter(function () {
  const parentMenu = $(this).closest('[menu]')
  const parent = parentMenu.attr('menu') && $(`[open-menu=${parentMenu.attr('menu')}].active`)

  $(this).siblings('.active').removeClass('active')
  $(this).addClass('active')
  if ($(this).attr('open-menu')) {
    const el = $(`[menu=${$(this).attr('open-menu')}]`)
    if (el) {
      $("[menu][level]").filter(function () {
        return $(this).attr("level") >= el.attr('level');
      }).hide();
      el.show();
      $(`[menu=${$(this).attr('open-menu')}] .active`).removeClass('active');
    }
  } else if (parent) {
    const level = parentMenu.attr('level')
    if (level) {
      $("[menu][level]").filter(function () {
        return $(this).attr("level") > level;
      }).hide().removeClass('active');
    }
  } else {
    const level = $(this).attr('level') || 0
    $("[menu][level]").filter(function () {
      return $(this).attr("level") > level;
    }).hide().removeClass('active');
  }
});
>>>>>>> 02c3390d9b282ab0131c69c6d50c58546fd1e949
