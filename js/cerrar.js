$(".submenu .action").click(function(event){
			 var submenu = $(this).parents(".submenu");
			 var children = $(children).find(".children");
			 
			 $(".children").not($(children)).slideUp("slow").addClass("opacity");
			 $(".open").not($(submenu)).removeClass("open");

			 $(submenu).toggleClass("open");
			 $(children).slideToggle("slow").toggleClass("opacity");

			 return false;
			});

            