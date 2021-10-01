(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      console.log("Jenil")
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);