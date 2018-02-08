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

	// .toggle function
	$('#toggle').click(function(){
		$('#lightbulb').toggle();
	});

	// .slidedown function
	$('#slidedown').click(function(){
		$('#slide').slideDown();
	});

	// .slideup function
	$('#slideup').click(function(){
		$('#slide2').slideUp();
	});

	// .slidetoggle function
	$('#slidetoggle').click(function(){
		$('#blinds').slideToggle();
	});

	// .fadein function
	$('#fadein').click(function(){
		$('#wizard').fadeIn();
	});

	// .fadeout function
	$('#fadeout').click(function(){
		$('#wizard2').fadeOut(2000);
	});

	// .addclass function
	$('#addclass').click(function() {
		$('.section:nth-child(10)').addClass('pizazz');
	});

	// .before function
	$('#before').click(function() {
		$('#line').before('<img src="images/cutter.jpg" alt="cutter" class="inline-block" />');
	});

	// .after function
	$('#after').click(function() {
		$('#line2').after('<img src="images/niceguy.jpg" alt="nice guy" class="inline-block" id="niceguy"/>');
	});

	// .append function
	$('#append').click(function() {
		$('#bank').append("00");
		$('.section:nth-child(13) p:last-child').show();
	});

	// .html function
	$('#html').click(function() {
		$('.section:nth-child(14) p:first-of-type').html('<span class="large">HAHAHA I LIED. I DIDNT GET ANY CONTENT!</span>');
	});

	// .attr function
	$('#attr').click(function() {
		$('p.output').html($('#mystery').attr('href'));
	});

	// .val
	$('#val').click(function(){
		$('p.output2').text($('#password').val());
	});

	// .text
	$('#text').click(function() {
		$('p.text').text("WORDS ARE APPEARING FROM NOWHERE!");
	});

	// .data
	$('#setdata').click(function() {
		$('#storage').data({"first_name":"Dave", "last_name":"Grohl"});
		alert("First and Last name data set successfully!");
		$('#showdata').removeClass('hidden');	
	});

	$('#showdata').click(function() {
		var dataString = '<p>';
		var $first_name = $('#storage').data('first_name')
		var $last_name = $('#storage').data('last_name')

		if(typeof $first_name !== 'undefined') {
			dataString += "Storage Div first name: " + $first_name + '<br />';
		}

		if(typeof $last_name !== 'undefined') {
			dataString += "Storage Div last name: " + $last_name + '<br />';
		}

		dataString += '</p>';

		$('#showdata').after(dataString);
	});






});




