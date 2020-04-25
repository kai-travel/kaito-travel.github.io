$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');


    var clickedIndex=$('.index-btn').index($(this));


    $('.slide').eq(clickedIndex).addClass('active');

  });

  $('.text-contents').hide().fadeIn(3500);

});
