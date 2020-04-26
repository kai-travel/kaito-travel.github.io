$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');


    var clickedIndex=$('.index-btn').index($(this));


    $('.slide').eq(clickedIndex).addClass('active');

  });

  $('.text-contents').hide().fadeIn(3500);

  $('.faq-list-item').click(function(){
 var $answer = $(this).find('.answer');
 if($answer.hasClass('open')){
  $answer.removeClass('open') ;
  $answer.slideUp();
  $(this).find('span').text('+');
 }else{
  $answer.addClass('open') ;
  $answer.slideDown();
  $(this).find('span').text('-');
 }
});

});
