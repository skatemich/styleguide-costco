$(document).ready(function() {

		// Init AOS
    AOS.init();

	$('.menu').click(function() {
		$(this).toggleClass('active');
    $('.styleguide-body').css('overflow', 'visible');
		$('.menu').not(this).toggleClass('non-active');
		$('.fixed-menu').toggleClass('display');
		$('.scrolldown').toggleClass('scrolldisplay');
	  });


	$('.menu:after').click(function() {
		$('.menu').removeClass('active, non-active');
		$('.main').removeClass('display');
		$('.fixed-menu').toggleClass('display');
		$('.scrolldown').toggleClass('scrolldisplay');
	  });


	$('#buttons').click(function () {
		$('#section-buttons').toggleClass('display');
		AOS.refresh();
	});

	$('#logo-menu, #logo').click(function() {
		$('.main').removeClass('display');
		$('.logo').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#logo').toggleClass('active');
		$('.menu').not('#logo').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#colour-menu, #colour').click(function() {
		$('.main').removeClass('display');
		$('.colour').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#colour').toggleClass('active');
		$('.menu').not('#colour').toggleClass('non-active');

		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#buttons-menu, #buttons').click(function() {
		$('.main').removeClass('display');
		$('.buttons').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#buttons').toggleClass('active');
		$('.menu').not('#buttons').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#typography-menu, #typography').click(function() {
		$('.main').removeClass('display');
		$('.typography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#typography').toggleClass('active');
		$('.menu').not('#typography').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#iconography-menu, #iconography').click(function() {
		$('.main').removeClass('display');
		$('.iconography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#iconography').toggleClass('active');
		$('.menu').not('#iconography').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#imagery-menu, #imagery').click(function() {
		$('.main').removeClass('display');
		$('.imagery').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#imagery').toggleClass('active');
		$('.menu').not('#imagery').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#layout-menu, #layout').click(function() {
		$('.main').removeClass('display');
		$('.layout').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#layout').toggleClass('active');
		$('.menu').not('#layout').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	var wheight = $(window).height();
	$('.scrolldown').click(function() {
		$('html, body').animate({
	      scrollTop: wheight
	  	}, 500);	
	});
	
});
