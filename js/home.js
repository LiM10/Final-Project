// You can learn - hover
jQuery(document).ready(function() {
	$(document.body).on('mouseenter', '.u-can-learn figure', function() {
		var hover = $(this).find('.hover');
		var figBtn = $(this).find('.fig-btn');
		$(hover).animate({top: '40%'},400);
		$(figBtn).css({
			visibility: 'visible'
		});
	});
	$(document.body).on('mouseleave', '.u-can-learn figure', function() {
		var hover = $(this).find('.hover');
		var figBtn = $(this).find('.fig-btn');
		$(hover).animate({top: '50%'},400);
		$(figBtn).css({
			visibility: 'hidden'
		});
	});
});
// You can learn - hover


// Contact US
jQuery(document).ready(function($) {
	$('.xe').click(function(event) {
		$(this).addClass('active');
		$('.ex').removeClass('active');
		$('#cu-home').show('100');
		$('#cu-profile').hide('100');
	});
	$('.ex').click(function(event) {
		$(this).addClass('active');
		$('.xe').removeClass('active');
		$('#cu-profile').show('100');
		$('#cu-home').hide('100');
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
jQuery(document).ready(function($) {
	
		var $slider = $('.up-slider-content');
		var $slideContainer = $('.up-slider-list', $slider);
		var $slides = $('.up-part-uni', $slider);

		var width = $slides.width();
		var animationSpeed = 2000;
		var pauseSpeed = 3000;
		var currentSlide = 1;


		var interval;

		function startSlider(){
			interval = setInterval(function() {
				$slideContainer.animate({'left': '-='+width}, animationSpeed, function() {
					if (++currentSlide === $slides.length - 5) {
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
// Slider of Our prtners

jQuery(document).ready(function($) {
	var height = 261.5;
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