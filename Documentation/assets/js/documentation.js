$(window).scroll(function () {
  var $sections = $('.documentation__block');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 120;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('a.active').removeClass('active');
      $('a[href="#' + id + '"]').addClass('active');

    }
  })
});

$(window).scroll(function () {
  var $chapters = $('h2');
  $chapters.each(function (i, el) {
    var top = $(el).offset().top - 120;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top) {
      $('.documentation__sidebar--second-level a.active').removeClass('active');
      $('a[href="#' + id + '"]').addClass('active');
    }
  })
});
