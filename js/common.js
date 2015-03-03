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

 function tab() {
        $(".js-tab").each(function(){

            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();

            tab_link.bind("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).slideDown("fast");
                return false;
            });
        });
    }
    tab();



});



