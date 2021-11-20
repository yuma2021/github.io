$(function(){
  $(window).on('resize',function(){
    if('none'==$('.front-box').css('pointer-events')){
$('.text-box').attr('style','');
};
});

$('.front-box').on('click', function() {
    $(this).next().slideToggle();
        $(this).toggleClass('vector-active');
          $('.front-box').not(this).removeClass('vector-active');
    $('.front-box').not(this).next().slideUp();
      });

  $('.question-box').on('click', function() {
      $(this).next().slideToggle();
      $(this).toggleClass('vector-active1');
    });
  });


  $(function() {
      var topBtn = $('.top-page-link');    
      topBtn.hide();
      //スクロールが100に達したらボタン表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
      });
      //スクロールしてトップ
      topBtn.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
  });
