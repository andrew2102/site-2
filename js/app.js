$(function () {
	//  Burger menu
	$('.burger').click(function (event) {
		$('.burger,.burger__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.nav__item').click(function (event) {
		$('.burger,.burger__menu').removeClass('active');
		$('body').removeClass('lock');
	});

	/* Visible Logo */
	let scrollOffset = $(window).scrollTop();
	checkScroll(scrollOffset);

	$(window).on('scroll', function () {
		scrollOffset = $(window).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= 150) {
			$('.header__logo').addClass('hidden');
		} else {
			$('.header__logo').removeClass('hidden');
		}
	}

	// Slider
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		easing: 'ease',
	});

	$('.inside').slick({
		// arrows: false,
		// dots: true,
		slidesToShow: 4,
		easing: 'ease',
	});

	// Smooth Scroll
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$('html, body').animate(
			{
				scrollTop: elementOffset,
			},
			700
		);
	});
});
