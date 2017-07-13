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
	
	var slideWidth=273;
	var sliderTimer;
	$(function(){
	$('.ole-slider-list').width($('.ole-slider-list').children().length*slideWidth);
	    sliderTimer=setInterval(nextSlide,3000);
	    $('.ole-slider-content').hover(function(){
	        clearInterval(sliderTimer);
	    },function(){
	        sliderTimer=setInterval(nextSlide,300);
	    });
	    $('.right').click(function(){
	        clearInterval(sliderTimer);
	        nextSlide();
	        sliderTimer=setInterval(nextSlide,300);
	    });
	    $('.left').click(function(){
	        clearInterval(sliderTimer);
	        prevSlide();
	        sliderTimer=setInterval(nextSlide,300);
	    });
	});

	function nextSlide(){
	    var currentSlide=parseInt($('.ole-slider-list').data('current'));
	    currentSlide++;
	    if(currentSlide>=$('.ole-slider-list').children().length)
	    {
	        currentSlide=0;   
	    }
	    $('.ole-slider-list').animate({left: -currentSlide*slideWidth},1000).data('current',currentSlide);
	}

	function prevSlide(){
	    var currentSlide=parseInt($('.ole-slider-list').data('current'));
	    currentSlide--;
	    if(currentSlide<0)
	    {
	        currentSlide=$('.ole-slider-list').children().length-1;   
	    }
	    $('.ole-slider-list').animate({left: -currentSlide*slideWidth},1000).data('current',currentSlide);
	}


});
// Slider of Our lates events

// Slider of What clients say

jQuery(document).ready(function($) {
	
		var $slider = $('.wcs-slider-content');
		var $slideContainer = $('.wcs-slider-list', $slider);
		var $slides = $('.wcs-slides', $slider);
		var width = $slider.width();
		var animationSpeed = 750;
		var pauseSpeed = 4000;
		var currentSlide = 0;
		var interval;

		function startSlider(){
			interval = setInterval(function() {
				$slideContainer.animate({'left': '-='+width}, animationSpeed, function() {
					if ((currentSlide+= 2) === $slides.length) {
						currentSlide = 0;
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
	var count = 1;

	var $slides = $('.rightSide-slide');
	var $slideOdd = $('.rightSide-slide odd');
	var $slideEven = $('.rightSide-slide even');

	var $slider = $('.rightSide-container')
	$slideOdd.on('click', function() {
		$slider.animate({'top': '-='+height}, 200);
		if (count++ == $slides.length) {
			count = 1;
			$slider.css('top', '0');
		}
	});

	$slideEven.on('click', function() {
		$slider.animate({'top': '+='+height}, 200);
		if (count-- == $slides.length) {
			count = 1;
			$slider.css('top', '0');
		}
	});
});

// Banner
