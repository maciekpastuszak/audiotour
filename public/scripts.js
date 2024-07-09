$(function(){
	/* USTAWIANIE DATY W STOPCE */
	$('#copyright').html('&copy; Audiotour.pl '+ (new Date).getFullYear());

	/* OBSLUGA NAWIGACJI MOBILNEJ */
	$('#mobile-menu-toggle-button').click(function(e){
		e.preventDefault();
		$('nav#mobile').slideToggle(300); 
		$('div#mobile-menu-dark-bg').fadeToggle(300);
	});

	$('div#mobile-menu-dark-bg').click(function(e){
		$('nav#mobile').slideUp(300); 
		$('div#mobile-menu-dark-bg').fadeOut(300);
	});
})

document.addEventListener("touchstart", function(){}, true);

/* zakomentowane, Damian */
//~ $(function(){ 
	//~ $('nav#main').mousemove(function(){
		//~ var technologyPosiotion = $('#technology-parent').offset();
		//~ $('ul#technology').css('left', technologyPosiotion.left-12);
		//~ var writingPosiotion = $('#writing-parent').offset();
		//~ $('ul#writing').css('left', writingPosiotion.left-12);
		//~ var portfolioPosiotion = $('#portfolio-parent').offset();
		//~ $('ul#portfolio').css('left', portfolioPosiotion.left-12);
	//~ });
	//~ $('#writing-parent').hover(function(){
		//~ $('ul#writing').stop().slideDown(200);
	//~ },
	//~ function(){
		//~ $('ul#writing').stop().slideUp(200);
	//~ });
	//~ $('#technology-parent').hover(function(){
		//~ $('ul#technology').stop().slideDown(200);
	//~ },
	//~ function(){
		//~ $('ul#technology').stop().slideUp(200);
	//~ });
	//~ $('#portfolio-parent').hover(function(){
		//~ $('ul#portfolio').stop().slideDown(200);
	//~ },
	//~ function(){
		//~ $('ul#portfolio').stop().slideUp(200);
	//~ });
//~ })

/* menu rozwijane, uniwersalne, Damian */
$(document).ready(function() {
	$("#main ul.nav-main li").hover(function () {
		if ($(this).find("ul").length==1) { $(this).find("ul").stop().slideDown(200); }
	}, function() {
		if ($(this).find("ul").length==1) { $(this).find("ul").slideUp(200); }
	});
});
