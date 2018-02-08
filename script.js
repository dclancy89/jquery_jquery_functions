$(document).ready(function() {



	// .click function
	$('#click').click(function() {
		$('.section:first-child p.hidden').show();
	});

	// .hide function
	$('#hide').click(function() {
		$('#pimple').hide();
	});

	// .show function
	$('#show').click(function() {
		$('#iphone').show();
		$('.section:nth-child(3) p:last-child').show();
	});

});