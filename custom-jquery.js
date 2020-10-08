$(function(){
	$(".menu-btn").click(function(){
		$(".menu").slideToggle(500);
	})
})
$(function(){
	var get_header = $(".header").outerHeight();
	//console.log(get_header);
	$(".menu a").click(function(e) {
		/* Act on the event */
		e.preventDefault();
		var a = $(this).attr("href");
		//console.log(a);
		$("html, body").animate({
			scrollTop:$(a).offset().top -get_header
		},1000)
		$(".menu a li").removeAttr('class');
		$(this).find('li').attr('class', 'active');
	})
})