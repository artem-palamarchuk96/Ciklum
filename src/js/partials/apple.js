	$("#apple-accordion .apple-item ul").hide().prev().click(function() {
		$(this).parents("#apple-accordion")
		.find(".apple-item ul")
		.not(this)
		.slideUp()
		.prev()
		.removeClass("active");
		$(this).next()
		.not(":visible")
		.slideDown()
		.prev()
		.addClass("active");
	});

