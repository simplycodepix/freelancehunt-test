$(document).ready(function(){

	/* FEAROURED CAROUSEL */
	/***********************/
	$(".rj_featured_items").slick({
   autoplay: true,
   arrows: true,
   prevArrow: '<div class="prev_arrow slide_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
   nextArrow: '<div class="next_arrow slide_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
 });

	$('.rj_article__thumb').zoom({
		target: false,
		onZoomIn: true,
		onZoomOut: true,
	});

});