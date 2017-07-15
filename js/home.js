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
$(document).ready(function(){

  	var events = $('.ole-slider-list');
		events.owlCarousel({
		    items:1,
		    loop:true,
		    autoplay:true,
		    autoplaySpeed: 750,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    autoWidth: true,
		    nav: true,
		    dots: false,
		    responsiveClass:true,
		    navText: ["<i class='fa fa-chevron-left arrow left-ole'></i>","<i class='fa fa-chevron-right arrow right-ole'></i>"],
		    responsive:{
		        0:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop:true
		        },
		        600:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop:true
		        },
		        1000:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop:true
		        }
		    }
		});

	var block = false;
	$(".what-clients-say .owl-item").mouseenter(function(){
	 if(!block) {
	  block = true;
	  $(".what-clients-say .owl-item").trigger('stop.owl.autoplay')
	  block = false;
	  }
	});
	$(".what-clients-say .owl-item").mouseleave(function(){
	 if(!block) {
	  block = true;
	  $(".what-clients-say .owl-item").trigger('play.owl.autoplay',[1000])
	  block = false;
	 }
	});	
});
// Slider of Our lates events

// Slider of What clients say
$(document).ready(function(){

  	var clients = $('.wcs-slider-list');
		clients.owlCarousel({
		    items:1,
		    loop:true,
		    autoplay:true,
		    autoplaySpeed: 750,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    autoWidth: true,
		    nav: true,
		    dots: false,
		    responsiveClass:true,
		    navText: ["<i class='fa fa-chevron-left arrow left-wcs'></i>","<i class='fa fa-chevron-right arrow right-wcs'></i>"],
		    responsive:{
		        0:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop: true
		        },
		        600:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop: true
		        },
		        1000:{
		            items:1,
		            nav:true,
		            dot:false,
		            loop:true
		        }
		    }
		});

	var block = false;
	$(".what-clients-say .owl-item").mouseenter(function(){
	 if(!block) {
	  block = true;
	  $(".what-clients-say .owl-item").trigger('stop.owl.autoplay')
	  block = false;
	  }
	});
	$(".what-clients-say .owl-item").mouseleave(function(){
	 if(!block) {
	  block = true;
	  $(".what-clients-say .owl-item").trigger('play.owl.autoplay',[1000])
	  block = false;
	 }
	});	
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
		            dot:false,
		            loop:true
		        },
		        600:{
		            items:3,
		            nav:true,
		            dot:false,
		            loop:true
		        },
		        1000:{
		            items:6,
		            nav:true,
		            dot:false,
		            loop:true
		        }
		    }
		});

	var block = false;
	$(".partners .owl-item").mouseenter(function(){
	 if(!block) {
	  block = true;
	  $(".partners .owl-item").trigger('stop.owl.autoplay')
	  block = false;
	  }
	});
	$(".partners .owl-item").mouseleave(function(){
	 if(!block) {
	  block = true;
	  $(".partners .owl-item").trigger('play.owl.autoplay',[1000])
	  block = false;
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
	$slider.on('click', function() {
		$slider.animate({'top': '-='+height}, 200);
		if (count++ == $slides.length) {
			count = 1;
			$slider.css('top', '0');
		}
	});

	// $slideEven.on('click', function() {
	// 	$slider.animate({'top': '+='+height}, 200);
	// 	if (count-- == $slides.length) {
	// 		count = 1;
	// 		$slider.css('top', '0');
	// 	}
	// });

});

// Banner


