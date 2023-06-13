$(document).ready(function() {
  // Add animation classes to elements on page load
  $(".animate__animated").addClass("animate__fadeIn");

  // Add animation classes to elements on scroll
  $(window).scroll(function() {
    $(".animate__fadeInLeft").each(function() {
      if ($(this).visible(true)) {
        $(this).addClass("animate__fadeInLeftBig");
      }
    });

    $(".animate__fadeInRight").each(function() {
      if ($(this).visible(true)) {
        $(this).addClass("animate__fadeInRightBig");
      }
    });
  });

  // Helper function to check if element is visible in viewport
  $.fn.visible = function(partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;
    return (
      compareBottom <= viewBottom && compareTop >= viewTop
    );
  };
});
