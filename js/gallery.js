// Page - Gallery
jQuery(document).ready(function($) {
	$('.all').click(function(event) {
		$(this).addClass('active');
		$('.uni,.camp,.pro,.class').removeClass('active');
		$('.gallery-items').height(720);

		$('.gallery-items .col-md-4').css('opacity', '1').show('fast');
		
		$('.pro-one').css({
			top: '0',
			left: '0px'
		});
		$('.uni-one').css({
			top: '0',
			left: '400px'
		});
		$('.camp-one').css({
			top: '0',
			left: '800px'
		});
		$('.pro-two').css({
			top: '250px',
			left: '0'
		});
		$('.uni-two').css({
			top: '250px',
			left: '400px'
		});
		$('.camp-two').css({
			top: '250px',
			left: '800px'
		});
		$('.pro-three').css({
			top: '500px',
			left: '0'
		});
		$('.uni-three').css({
			top: '500px',
			left: '400px'
		});
		$('.camp-three').css({
			top: '500px',
			left: '800px'
		});
	});

	$('.uni').click(function(event) {
		$(this).addClass('active');
		$('.all,.camp,.pro,.class').removeClass('active');
		$('.campus,.professors').css('opacity', '0');
		$('.campus,.professors').hide('fast');
		$('.gallery-items').height(220);

		$('.university').css('opacity', '1');
		$('.university').show('fast');
		$('.uni-one').css({
			top: '0',
			left: '0'
		});
		$('.uni-two').css({
			top: '0',
			left: '400px'
		});
		$('.uni-three').css({
			top: '0',
			left: '800px'
		});
	});

	$('.camp').click(function(event) {
		$(this).addClass('active');
		$('.all,.uni,.pro,.class').removeClass('active');
		$('.university,.professors').css('opacity', '0');
		$('.university,.professors').hide('fast');
		$('.gallery-items').height(220);

		$('.campus').css('opacity', '1');
		$('.campus').show('fast');
		$('.camp-one').css({
			top: '0',
			left: '0'
		});
		$('.camp-two').css({
			top: '0',
			left: '400px'
		});
		$('.camp-three').css({
			top: '0',
			left: '800px'
		});
	});

	$('.pro').click(function(event) {
		$(this).addClass('active');
		$('.all,.uni,.camp,.class').removeClass('active');
		$('.university,.campus').css('opacity', '0');
		$('.university,.campus').hide('fast');
		$('.gallery-items').height(220);

		$('.professors').css('opacity', '1');
		$('.professors').show('fast');
		$('.pro-one').css({
			top: '0',
			left: '0'
		});
		$('.pro-two').css({
			top: '0',
			left: '400px'
		});
		$('.pro-three').css({
			top: '0',
			left: '800px'
		});
	});

	$('.class').click(function(event) {
		$(this).addClass('active');
		$('.all,.camp,.pro,.uni').removeClass('active');
		$('.campus,.professors').css('opacity', '0');
		$('.campus,.professors').hide('fast');
		$('.gallery-items').height(220);

		$('.university').css('opacity', '1');
		$('.university').show('fast');
		$('.uni-one').css({
			top: '0',
			left: '0'
		});
		$('.uni-two').css({
			top: '0',
			left: '400px'
		});
		$('.uni-three').css({
			top: '0',
			left: '800px'
		});
	});
});
// Page - Gallery

jQuery(document).ready(function($) {

	$(document.body).on('mouseenter', '.item-container', function() {
		var layer = $(this).find('.layer');

		$(layer).animate({
			opacity: '.9',
			width: '100%',
		}, 400);
		$('.layer h6').animate({
			bottom: '25px'
		}, 400);
		$('.layer a').animate({
			width: '60px',
			height: '60px'
		}, 400);
	});

	$(document.body).on('mouseleave', '.item-container', function() {
		var layer = $(this).find('.layer');

		$(layer).animate({
			opacity: '0',
			width: '0'
		}, 200);
		$('.layer h6').animate({
			bottom: '-10px'
		}, 200);
		$('.layer a').animate({
			width: '0',
			height: '0'
		}, 200);
	});

});