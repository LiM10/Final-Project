//Course Dropdown
$('.course a').hover(function() {
	$('.courseDropdown').show('700');
	$('.courseDropdown').css('z-index',20);
});
$('.course').mouseleave(function(event) {
	$('.courseDropdown').hide('700');
});
$('.courseDropdown').mouseover(function(event) {
	$('.courseDropdown').show('700');
});
//Course Dropdown

//Event Dropdown
$('.event a').hover(function() {
	$('.eventDropdown').show('700');
	$('.eventDropdown').css('z-index',20);
});
$('.event').mouseleave(function(event) {
	$('.eventDropdown').hide('700');
});
$('.eventDropdown').mouseover(function(event) {
	$('.eventDropdown').show('700');
});
//Event Dropdown

//Dashboard Dropdown
$('.dashboard a').hover(function() {
	$('.dashboardDropdown').show('700');
	$('.dashboardDropdown').css('z-index',20);
});
$('.dashboard').mouseleave(function(event) {
	$('.dashboardDropdown').hide('700');
});
$('.dashboardDropdown').mouseover(function(event) {
	$('.dashboardDropdown').show('700');
});
//Dashboard Dropdown

//Pages Dropdown
$('.pages a').hover(function() {
	$('.pagesDropdown').show('700');
	$('.pagesDropdown').css('z-index',20);
});
$('.pages').mouseleave(function(event) {
	$('.pagesDropdown').hide('700');
});
$('.pagesDropdown').mouseover(function(event) {
	$('.pagesDropdown').show('700');
});
//Pages Dropdown

//Shop Dropdown
$('.shop a').hover(function() {
	$('.shopDropdown').show('700');
	$('.shopDropdown').css('z-index',20);
});
$('.shop').mouseleave(function(event) {
	$('.shopDropdown').hide('700');
});
$('.shopDropdown').mouseover(function(event) {
	$('.shopDropdown').show('700');
});
//Shop Dropdown


// Footer Gallery
var galleryArray = ['img/home/2-2.jpg','img/home/3-3.jpg','img/home/4-4.jpg','img/home/5-5.jpg','img/home/2-2.jpg','img/home/3-3.jpg','img/home/4-4.jpg','img/home/5-5.jpg','img/home/2-2.jpg'];

$(document).ready(function(){
	$('.gallery-img').on('click', function(e){
		$('.modal-img').css('borderRadius', '10px');
		$('.modal').css('display', 'block');
		var val=$(e.target).attr("value");
		$('.modal-img').attr('src', galleryArray[val]);	
	});
	$('body').on('click', function(e){
		var target = e.target.tagName;
		if(e.target.tagName != "IMG"){
			$('.modal-img').css('transform', 'scale(1, 1)');
			$('.modal').css('display', 'none');
		}
	});
});
// Footer Gallery