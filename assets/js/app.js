$(document).ready(function(){

	$('.page-popup--form').on('click', function(e){
		e.stopPropagation();
	});
		
	$('.page-popup, .page-open--popup').on("click", function (e) {
		e.preventDefault();
		$('.page-popup').toggle();
	});


	$('#popup').submit(function(e) {
		e.preventDefault();
		$(location).attr('href', location.host + 'index-ok.html');
	});

	console.log(location);

});