//particlesJS.load('particles', 'assets/particles.json');

// handle loading animation
$(document).ready(function($) {
	$("#preloader-wrap").animate({opacity: 0}, 400);
	setTimeout(function() {$("#loading").animate({opacity: 0}, 200);}, 400);
	setTimeout(function() {$("#loading").remove();}, 600);
});

function showMenu() {
	$("#burger").addClass("cross");
	$("#menu").addClass("open");
	$("#content").addClass("content_hidden");
	$("#fadeout").addClass("fadeout_hidden");
	$("header").addClass("console_mode");

	$("#title_cursor").css("visibility", "visible");
	$("body").css("background-color", "rgba(0, 0, 0, 1.0)");
}

function hideMenu() {
	$("#burger").removeClass("cross");
	$("#menu").removeClass("open");
	$("#content").removeClass("content_hidden");
	$("#fadeout").removeClass("fadeout_hidden");
	$("header").removeClass("console_mode");

	$("#title_cursor").css("visibility", "hidden");
	$("body").css("background-color", "rgba(255, 255, 255, 1.0)");
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
$("#content").click(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});

// hide menu if user scrolls
$(window).scroll(function() {
  if($("#burger").hasClass("cross")) hideMenu();
});
