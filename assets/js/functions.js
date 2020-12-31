$(function() {
	$(".header__banner").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".contact__mail").fitText(1.5, { minFontSize: '24px', maxFontSize: '80px' });
	smoothScroll(300);
	workBelt();
	workLoad();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	    var target = $( $(this).attr('href') );
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {
  $(".trigger").remove();
  $(".return").remove();
  $('.thumb-container label').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });
  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
  });
}

function  workLoad() {
  $.ajaxSetup({ cache: true });
  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        spinner = '<div class="loader">Loading...</div>',
        url = $this.find('.thumb-unit').data('url');
    $('.project-load').html(spinner).load(url);
    $('.project-title').text(newTitle);
  });
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
