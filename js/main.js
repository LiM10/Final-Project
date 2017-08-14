//Course Dropdown
$('.course a').hover(function() {
	$('.courseDropdown').show();
	$('.courseDropdown').css('z-index',20);
});
$('.course').mouseleave(function(event) {
	$('.courseDropdown').hide();
});
$('.courseDropdown').mouseover(function(event) {
	$('.courseDropdown').show();
});
//Course Dropdown

//Event Dropdown
$('.event a').hover(function() {
	$('.eventDropdown').show();
	$('.eventDropdown').css('z-index',20);
});
$('.event').mouseleave(function(event) {
	$('.eventDropdown').hide();
});
$('.eventDropdown').mouseover(function(event) {
	$('.eventDropdown').show();
});
//Event Dropdown

//Dashboard Dropdown
$('.dashboard a').hover(function() {
	$('.dashboardDropdown').show();
	$('.dashboardDropdown').css('z-index',20);
});
$('.dashboard').mouseleave(function(event) {
	$('.dashboardDropdown').hide();
});
$('.dashboardDropdown').mouseover(function(event) {
	$('.dashboardDropdown').show();
});
//Dashboard Dropdown

//Pages Dropdown
$('.pages a').hover(function() {
	$('.pagesDropdown').show();
	$('.pagesDropdown').css('z-index',20);
});
$('.pages').mouseleave(function(event) {
	$('.pagesDropdown').hide();
});
$('.pagesDropdown').mouseover(function(event) {
	$('.pagesDropdown').show();
});
//Pages Dropdown

//Shop Dropdown
$('.shop a').hover(function() {
	$('.shopDropdown').show();
	$('.shopDropdown').css('z-index',20);
});
$('.shop').mouseleave(function(event) {
	$('.shopDropdown').hide();
});
$('.shopDropdown').mouseover(function(event) {
	$('.shopDropdown').show();
});
//Shop Dropdown


// Footer Gallery
var galleryArray = ['img/home/2-2.jpg','img/home/3-3.jpg','img/home/4-4.jpg','img/home/5-5.jpg','img/home/2-2.jpg','img/home/3-3.jpg','img/home/4-4.jpg','img/home/5-5.jpg','img/home/2-2.jpg'];

$(document).ready(function(){
	$('.gallery-img').on('click', function(e){
		$('#modal-img').css('borderRadius', '10px');
		$('#modal').css('display', 'block');
		var val=$(e.target).attr("value");
		$('#modal-img').attr('src', galleryArray[val]);	
	});
	$('body').on('click', function(e){
		var target = e.target.tagName;
		if(e.target.tagName != "IMG"){
			$('#modal-img').css('transform', 'scale(1, 1)');
			$('#modal').css('display', 'none');
		}
	});
});
// Footer Gallery


// Page - BLog List hover
jQuery(document).ready(function() {
	$('.bn-wrap').on('mouseenter', function() {
		var hover = $(this).find('.blogList-hover');
		$(hover).fadeIn('400');
	});
	$('.bn-wrap').on('mouseleave', function() {
		var hover = $(this).find('.blogList-hover');
		$(hover).fadeOut('400');
	});
});
// Page - BLog List hover

// Page - About Us hover
jQuery(document).ready(function($) {
	$('.professors .col-md-4').on('mouseenter', function() {
		var hover = $(this).find('figcaption');
		var btn = $(this).find('.prof-btn');

		$(hover).fadeIn('400');
		$(btn).animate({
			opacity: '1',
			top: '40%'
		}, 400);
	});
	$('.professors .col-md-4').on('mouseleave', function() {
		var hover = $(this).find('figcaption');
		var btn = $(this).find('.prof-btn');

		$(hover).fadeOut('400');
		$(btn).animate({
			opacity: '0',
			top: '-25px'
		}, 400);
	});
});
// Page - About Us hover

// Signup
jQuery(document).ready(function ($) {
    $('#signin').click(function (event) {
        $('.login').hide();
        $('.registration').show();
    });

    $('#signup').click(function (event) {
        $('.registration').hide();
        $('.login').show();
    });
});
// Signup

// Contact US
jQuery(document).ready(function ($) {
    $('.xe').click(function (event) {
        $(this).addClass('active');
        $('.ex').removeClass('active');
        $('#cu-home').show();
        $('#cu-profile').hide();

    });
    $('.ex').click(function (event) {
        $(this).addClass('active');
        $('.xe').removeClass('active');
        $('#cu-profile').show();
        $('#cu-home').hide();

    });
});
// Contact US

