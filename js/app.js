//particlesJS.load('particles', 'assets/particles.json');

// handle loading animation
$(document).ready(function($) {
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);

	$('.motd').each( function() {
		var ticker = new Ticker($(this)).reset();
		$(this).data('ticker', ticker );
	});

});

function showMenu() {
	$("#nav_curtain").removeClass("hidden");
	$("#burger").addClass("cross");
	$("#menu").addClass("open");
	$("#menu").css("display", "block");
	$("#fadeout").addClass("hidden");
	$("header").addClass("console_mode");
	//$("section").addClass("content_hidden");
	//$("body").css("background-color", "rgba(0, 0, 0, 1.0)");
}

function hideMenu() {
	$("#nav_curtain").addClass("hidden");
	$("#burger").removeClass("cross");
	$("#menu").removeClass("open");
	$("#menu").css("display", "none");
	$("#fadeout").removeClass("hidden");
	$("header").removeClass("console_mode");
	//$("section").removeClass("content_hidden");
	//$("body").css("background-color", "rgba(255, 255, 255, 1.0)");
}

// menu animation
$("#burger").click(function() {
  if(!$(this).hasClass("cross")) {
		showMenu();
	} else {
		hideMenu();
	}
});

// hide menu if user clicks on content? need to improve.
$("section").click(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});

// hide menu if user scrolls
$(window).scroll(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});
