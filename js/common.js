$(document).ready(function(){
		var overlay = $(".js-overlay");
		$(".js-close-popup").click(function(){
				$(this).parents(".js-popup").hide();
				overlay.hide();
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
		$(".js-photo").click(function(){
				$(".js-popup-photo").show();
				overlay.show();
				return false;
		});


$(".accordion__link").click(function (){
	$(this).next(".slide").toggle();
	$(this).children().toggleClass(".is-active").toggleClass(".is-hide")
	return false;
});

});



