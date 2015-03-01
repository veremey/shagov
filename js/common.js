$(document).ready(function(){



		var overlay = $(".js-overlay");
		$(".js-close-popup").click(function (){
				$(this).parents(".js-popup").show();
				overlay.show();
		});
		overlay.click(function(){
				$(this).hide();
				$(".js-popup").hide();
		});

		$(".js-question").click(function(){
				$(".js-popup-question").show();
				overlay.show();
				return false;
		});
		$(".js-return-link").click(function(){
				$(".js-popup-return").show();
				overlay.show();
				return false;
		});



		function initAccordion() {
    if($('.accordion').length) {
        $('.accordion .opener').on('click', function(e){
            if(!$(this).hasClass('active')) {
                $('.accordion .slide').slideUp();
                $('.accordion .opener').removeClass('active');
                $(this).next('.slide').slideDown();
                $(this).addClass('active');
            } else {
                $(this).next('.slide').slideUp();
                $(this).removeClass('active');
            }
            e.preventDefault();
        })
        $('.accordion .hide').on('click', function(e){
            $(this).parent().slideUp();
            $(this).parent().prev('.opener').removeClass('active');
            e.preventDefault();
        })
    }
}

});