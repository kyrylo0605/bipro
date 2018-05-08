$(document).ready(function(){

	$(".videoInner>img").on("click" , function(){
			$("#myModal").modal("show");
	});


	$(".moreBlock").on("click" , function(e){
		e.preventDefault();
		if ($(this).hasClass("activeButon")) {
			$(this).removeClass("activeButon");
			$(this).find("img").css("transform" , "rotate(0deg)");
			$(this).find("a").text("Показать больше");
			$(this).prev().slideToggle(700);
		} else {
			$(this).addClass("activeButon");
			$(this).find("img").css("transform" , "rotate(180deg)");
			$(this).find("a").text("Скрыть");
			$(this).prev().slideToggle(700);
		}
	});



	$(".burgerMenu").on("click" ,  function(){
		$('.menu-overlay').fadeIn(300);
		$(".smallopenmenu").css("left" ,  "0px");
	});
	$('.menu-overlay').on("click" , function(){
		$(this).fadeOut(300);
		$(".smallopenmenu").css("left" , "-500px");
	});



		jQuery("input[type='file']").click(function(e){
  e.stopPropagation();
});		
	$(".fileGroup").on("click" , function(){
		$("#scanfile").trigger("click");
	});

});
