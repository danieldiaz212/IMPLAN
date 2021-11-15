$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
				contador = 0;
				//alert("entro");
			$('nav').animate({
				left: '10%'
			});
			
		
			
		} else  {
			
			$('nav').animate({
				left: '150%'
			});	
			contador = 1;
			
			
		}
		
	});
	
	$(window).resize(function(){
  if(window.innerWidth > 680) {
   $("nav").removeAttr("style");
   contadorventana = 1;
  }
 
	// Mostramos y ocultamos submenus
	$('.padres').click(function(){
		$(this).children('.children').slideToggle();
	});
	
	
 });
}