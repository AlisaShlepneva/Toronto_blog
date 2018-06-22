$(function(){
	$('.fa-bars').on('click', function(){
			// toggle class show on the menu
	   $('.header-nav').addClass('show');
	});

	// write a function that listens to a click on the exit icon

	$('.fa-times').on('click',function(){
		$('.header-nav').removeClass('show');
	})
});