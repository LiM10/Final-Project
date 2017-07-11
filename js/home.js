// You can learn - hover
jQuery(document).ready(function() {
	$(document.body).on('mouseenter', '.u-can-learn figure', function() {
		var hover = $(this).find('.hover');
		var figBtn = $(this).find('.fig-btn');
		$(hover).animate({top: '40%'},400);
		$(figBtn).fadeIn('400');
	});
	$(document.body).on('mouseleave', '.u-can-learn figure', function() {
		var hover = $(this).find('.hover');
		var figBtn = $(this).find('.fig-btn');
		$(hover).animate({top: '50%'},400);
		$(figBtn).fadeOut('400');
	});
});
// You can learn - hover


// Contact US
jQuery(document).ready(function($) {
	$('.xe').click(function(event) {
		$(this).addClass('active');
		$('.ex').removeClass('active');
		$('#cu-home').show();
		$('#cu-profile').hide();
	});
	$('.ex').click(function(event) {
		$(this).addClass('active');
		$('.xe').removeClass('active');
		$('#cu-profile').show();
		$('#cu-home').hide();
	});
});
// Contact US




// Slider of Our lates events
jQuery(document).ready(function($) {
	
		var $slider = $('.ole-slider-content');
		var $slideContainer = $('.ole-slider-list', $slider);
		var $slides = $('.ole-slides', $slider);

		var width = $slider.width();
		var animationSpeed = 1500;
		var pause = 2000;
		var currentSlide = 1;


		var interval;

		function startSlider(){
			interval = setInterval(function() {
				$slideContainer.animate({'left': '-='+width}, animationSpeed, function() {
					if (++currentSlide === $slides.length) {
						currentSlide = 1;
						$slideContainer.css('left', '0');
					}
				});
			}, pause);
		}

		function pauseSlider() {
			clearInterval(interval);
		}

		$slideContainer
			.on('mouseenter', pauseSlider)
			.on('mouseleave', startSlider);


		startSlider();


});
// Slider of Our lates events

// Slider of What clients say

jQuery(document).ready(function($) {
	
		var $slider = $('.wcs-slider-content');
		var $slideContainer = $('.wcs-slider-list', $slider);
		var $slides = $('.wcs-slides', $slider);

		var width = $slider.width();
		var animationSpeed = 2000;
		var pauseSpeed = 4000;
		var currentSlide = 1;


		var interval;

		function startSlider(){
			interval = setInterval(function() {
				$slideContainer.animate({'left': '-='+width}, animationSpeed, function() {
					if (++currentSlide === 3) {
						currentSlide = 1;
						$slideContainer.css('left', '0');
					}
				});
			}, pauseSpeed);
		}

		function pauseSlider() {
			clearInterval(interval);
		}

		$slideContainer
			.on('mouseenter', pauseSlider)
			.on('mouseleave', startSlider);


		startSlider();

});

// Slider of What clients say

// Slider of Our prtners

$(document).ready(function(){

  	var partners = $('.up-slider-list');
		partners.owlCarousel({
		    items:6,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    dots: false,
		    responsiveClass:true,
		    nav:true,
		    navText: ["<i class='fa fa-chevron-left arrow left'></i>","<i class='fa fa-chevron-right arrow right'></i>"],
		    responsive:{
		        0:{
		            items:1,
		            nav:true,
		            dot:false
		        },
		        600:{
		            items:3,
		            nav:false,
		            dot:false
		        },
		        1000:{
		            items:6,
		            nav:true,
		            dot:false,
		            loop:true
		        }
		    }
		});
});

// Slider of Our prtners

// Banner

jQuery(document).ready(function($) {
	var height = 328;
	var animationSpeed = 200;
	var currentSlide = 1;


	var $slides = $('.rightSide-slide');
	var $slider = $('.rightSide-container')
	$slider.on('click', function() {
		$slider.animate({'top': '-='+height}, 200);
		if (currentSlide++ == $slides.length) {
			currentSlide = 1;
			$slider.css('top', '0');
		}
	});
});

// Banner
