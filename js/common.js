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



});