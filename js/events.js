jQuery(document).ready(function($) {
	$('#latest').click(function(event) {
		$(this).addClass('active');
		$('#expired,#upcoming').removeClass('active');
		$('.event-gallery').height(1002);

		$('.event-gallery .col-md-3').show('fast');
		
		$('.one').css({
			top: '0',
			left: '0px'
		});
		$('.two').css({
			top: '0',
			left: '285px'
		});
		$('.five').css({
			top: '0',
			left: '570px'
		});
		$('.six').css({
			top: '0',
			left: '855px'
		});
		$('.three').css({
			top: '501px',
			left: '0'
		});
		$('.seven').css({
			top: '501px',
			left: '285px'
		});
		$('.four').css({
			top: '501px',
			left: '570px'
		});
		$('.eight').css({
			top: '501px',
			left: '855px'
		});

	});

	$('#upcoming').click(function(event) {
		$(this).addClass('active');
		$('#latest,#expired').removeClass('active');
		$('.expired').hide('fast');
		$('.event-gallery').height(501);

		$('.upcoming').show('fast');
		$('.three').css({
			'left': '570px',
			'top': '0'
		});
		$('.four').css({
			'left': '855px',
			'top': ''
		});
	});

	$('#expired').click(function(event) {
		$(this).addClass('active');
		$('#latest,#upcoming').removeClass('active');
		$('.upcoming').hide('fast');
		$('.event-gallery').height(501);

		$('.expired').show('fast');

		$('.five').css({
			top: '0',
			left: '0'
		});
		$('.six').css({
			top: '0',
			left: '285px'
		});
		$('.seven').css({
			top: '0',
			left: '570px'
		});
		$('.eight').css({
			top: '0',
			left: '855px'
		});
	});
});