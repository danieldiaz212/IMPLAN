// JavaScript Document
$(document).ready(main);
	var descens = new Array();
var numdescens;
var idclic;
 
function ObtenDescens(idpadre,tagdescen)
{  
   
 
    descens=document.getElementById(idpadre).getElementsByTagName(tagdescen);
     
    numdescens=descens.length;
   
//alert("num descendientes "+tagdescen+": " + numdescens);
 
   
           
       
}
 
function replegar()
{                                                                              
                                                                               
   ObtenDescens(this.id,"ul")
 
 
     document.getElementById(descens[0].id).style.display="none";
   
}
function desplegar()
{                                                                              
                                                                             
   ObtenDescens(this.id ,"ul")
   
   
    document.getElementById(descens[0].id).style.display="block";
   
   
   
}
 

	 

 
 
window.onload = function()
{

   	
 
     ObtenDescens("menu","li");
     
     for(i=0;i<numdescens;i++)
                {
                    document.getElementById(descens[i].id).onmouseover = desplegar;
                    document.getElementById(descens[i].id).onmouseout = replegar;
					document.getElementById('calendar').src = "";
				
                   
                }
				
			
     
   
    ObtenDescens("menu","ul");
   
    for(i=0;i<numdescens;i++)
                {
                    document.getElementById(descens[i].id).style.display="none";
                }
				
				
    ObtenDescens("menudos","ul");
   
    for(i=0;i<numdescens;i++)
                {
                    document.getElementById(descens[i].id).style.display="none";
                }
				
					  ObtenDescens("menudos","li");
     
     for(i=0;i<numdescens;i++)
                {
                    document.getElementById(descens[i].id).onmouseover = desplegar;
                    document.getElementById(descens[i].id).onmouseout = replegar;
					document.getElementById('calendar').src = "";
				
                   
                }
       
     
   
}

