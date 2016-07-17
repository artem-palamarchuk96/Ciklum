window.onload = function() {

	$('#ms-btn-search').on('click', function() {
		$('.ms-form-wrap').slideToggle();		
	});

	$('#ms-store-btn').on('click', function(e) {
		$('.ms-dropdown-sec').hide();
		$('#ms-products-drop').slideUp(200);
		$('#ms-store-drop').stop().slideToggle(200);
		e.preventDefault();
	});

	$('#ms-products-btn').on('click', function(e) {
		$('#ms-store-drop').slideUp(200);
		$('#ms-products-drop').stop().slideToggle(200);
		e.preventDefault();
	});


	$('.ms-dropdown li:eq(0)').hover(function(){
		$('.ms-dropdown-sec').hide();
	});

	$('.ms-dropdown li:eq(1)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('Microsoft Surface').show();
		$('.ms-dropdown-sec-item:eq(1)').text('PCs & tablets').show();
		$('.ms-dropdown-sec-item:eq(2)').text('Xbox').show();
		$('.ms-dropdown-sec-item:eq(3)').text('Microsoft Band').show();
		$('.ms-dropdown-sec-item:eq(4)').text('Microsoft Lumia').show();
		$('.ms-dropdown-sec-item:eq(5)').text('Accessories').show();
	});

	$('.ms-dropdown li:eq(2)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('Office');
		$('.ms-dropdown-sec-item:eq(1)').text('Windows');
		$('.ms-dropdown-sec-item:eq(2)').text('Additional software');
		$('.ms-dropdown-sec-item:eq(3)').hide();
		$('.ms-dropdown-sec-item:eq(4)').hide();
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});
	$('.ms-dropdown li:eq(3)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('All apps');
		$('.ms-dropdown-sec-item:eq(1)').text('Windows apps');
		$('.ms-dropdown-sec-item:eq(2)').text('Windows Phone apps');
		$('.ms-dropdown-sec-item:eq(3)').text('Xbox apps');
		$('.ms-dropdown-sec-item:eq(4)').hide();
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});
	$('.ms-dropdown li:eq(4)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('All games');
		$('.ms-dropdown-sec-item:eq(1)').text('Xbox One games');
		$('.ms-dropdown-sec-item:eq(2)').text('Xbox 360 games');
		$('.ms-dropdown-sec-item:eq(3)').text('Windows games');
		$('.ms-dropdown-sec-item:eq(4)').text('Games for Windows Phone');
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});
	$('.ms-dropdown li:eq(5)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('All entertainment');
		$('.ms-dropdown-sec-item:eq(1)').text('Films & TV');
		$('.ms-dropdown-sec-item:eq(2)').text('Music');
		$('.ms-dropdown-sec-item:eq(3)').hide();
		$('.ms-dropdown-sec-item:eq(4)').hide();
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});
	$('.ms-dropdown li:eq(6)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('Business');
		$('.ms-dropdown-sec-item:eq(1)').text('Student store');
		$('.ms-dropdown-sec-item:eq(2)').hide();
		$('.ms-dropdown-sec-item:eq(3)').hide();
		$('.ms-dropdown-sec-item:eq(4)').hide();
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});
	$('.ms-dropdown li:eq(7)').hover(function(){
		$('.ms-dropdown-sec').show();
		$('.ms-dropdown-sec-item:eq(0)').text('Sales');
		$('.ms-dropdown-sec-item:eq(1)').text('Gift cards');
		$('.ms-dropdown-sec-item:eq(2)').hide();
		$('.ms-dropdown-sec-item:eq(3)').hide();
		$('.ms-dropdown-sec-item:eq(4)').hide();
		$('.ms-dropdown-sec-item:eq(5)').hide();
	});

	$('.ms-dropdown li:eq(8)').hover(function(){
		$('.ms-dropdown-sec').hide();
	});

	$('.ms-dropdown li:eq(9)').hover(function(){
		$('.ms-dropdown-sec').hide();
	});

}