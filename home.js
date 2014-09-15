(function() {
  $(function() {
    var setListener, _setFadeTitle, _setSmoothScroll;
    setListener = function() {
      _setSmoothScroll();
      return _setFadeTitle();
    };
    _setSmoothScroll = function() {
      return $("a.next-section").click(function() {
        var href, position, speed, target;
        speed = 700;
        href = $(this).attr("href");
        target = $((href === "#") || (href === "") ? 'html' : href);
        position = target.offset().top;
        $("html, body").animate({
          scrollTop: position
        }, speed, "swing");
        return false;
      });
    };
    $('#skill .content').one('inview', function() {
      return $('.icon').addClass('play');
    });
    $('#product .content').one('inview', function() {
      return $('.app').addClass('play');
    });
    _setFadeTitle = function() {
      return $(window).scroll(function() {
        if ($(window).width() >= 1024) {
          return $('.js-head-title').css({
            opacity: 1 - ($(window).scrollTop() / 400)
          });
        }
      });
    };
    return setListener();
  });

}).call(this);