// Range slider

var rSlider = function(){
	var slider = $('.range-slider'),
        range = $('.range-slider-range'),
        value = $('.range-slider-value'),
        reset =$('.range-slider-reset');

    slider.each(function(){
    	value.each(function(){
    		var value = $(this).prev().attr('value');
    		$(this).html(value);
    	});

    	range.on('input', function() {
			$(this).next(value).html(this.value);    		
    	});

    	reset.on('click', function() {
    		$(this).prev().html('0');
    		range.attr('value', '0');
    	});
    });    	
};

rSlider();
// Range slider

/////////////////////

