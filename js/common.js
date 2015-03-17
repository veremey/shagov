$(document).ready(function(){
		var overlay = $(".js-overlay");
		$(".js-close-popup").click(function(){
				$(this).parents(".js-popup").hide();
				overlay.hide();
		});
		$(".cansel").click(function(){
				$(this).parents(".js-popup").hide();
				overlay.hide();
				return false;
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
		$(".js-return-call").click(function(){
				$(".js-popup-return-call").show();
				overlay.show();
				return false;
		});
		$(".js-return-link_futer").click(function(){
				$(".js-popup-return_futer").show();
				overlay.show();
				return false;
		});
		$(".js-photo").click(function(){
				$(".js-popup-photo").show();
				overlay.show();
				return false;
		});
		$(".js-photo2").click(function(){
				$(".js-popup-photo2").show();
				overlay.show();
				return false;
		});


(function($) {

  var allPanels = $('.accordion .slide').hide();

  $('.accordion__link').click(function() {
    allPanels.slideUp();
    $(this).next().slideDown();
    return false;
  });

})(jQuery);


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


    $(".fancybox").fancybox();
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});

});

