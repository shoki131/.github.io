$(function(){
  function toggleChangeBtn(){
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if(slideIndex == 0){
      $('.prev-btn').hide();
    } else if(slideIndex == $('.slide').length - 1){
      $('.next-btn').hide();
    }
  }

  $('.change-btn').click(function(){
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active')
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

  $('.index-btn').click(function(){
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.header-left a').click(function(){
    $('html,body').scrollTop(0);
  });

  $('.header-menu a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate(
      {'scrollTop': position},500
    );
  });

});
