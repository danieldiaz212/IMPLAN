// JavaScript Document 

//ecuaciones de la variable Superficie Urbana Municipal

var sup_urb_mun_modif;

	function densidad_poblacional(dime, bandera){ //densidad de población
	
	x=cpi[1].subdimension[0].indicador[3].variable[2].x ;
	poblacion_urb_mun=cpi[1].subdimension[0].indicador[3].variable[0].valor;
	sup_urb_mun=cpi[1].subdimension[0].indicador[3].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		poblacion_urb_mun_modif=document.getElementById("variable0"+dime).value;
		if (sup_urb_mun_modif==""){
		sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (poblacion_urb_mun_modif && poblacion_urb_mun_modif>=0){		
			poblacion_urb_mun_modif=parseFloat(poblacion_urb_mun_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_urb_mun_modif,1);
			cpi_mod[1].subdimension[0].indicador[3].variable[0].valor=poblacion_urb_mun_modif;
			cpi_mod[1].subdimension[0].indicador[3].variable[0].x="modificado";
		} else {
	
			poblacion_urb_mun_modif=cpi_mod[1].subdimension[0].indicador[3].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			sup_urb_mun_modif=document.getElementById("variable1"+dime).value;
			sup_urb_mun_modif=parseFloat(sup_urb_mun_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(sup_urb_mun_modif,1);
			cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
			proceso2=1;
		} else{

			sup_urb_mun_modif=cpi_mod[1].subdimension[0].indicador[3].variable[1].valor;
		}
		
		
			den_poblacional=(poblacion_urb_mun_modif/sup_urb_mun_modif);	

		
			if (den_poblacional<=0 || den_poblacional>=2*x){
				den_poblacional_s=0;
			}
			
			if (den_poblacional==x){
				den_poblacional_s=100;
			}
			
			
			if ( 0<den_poblacional && den_poblacional<2*x){
				
				den_poblacional_s=100*(1-Math.abs((den_poblacional-x)/x));		
				}
				
				
		valor=document.getElementById("indica_mod3"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(den_poblacional_s,1);
		cpi_mod[1].subdimension[0].indicador[3].valor=den_poblacional_s.toFixed(2);
		valor_sub=document.getElementById("sudimod0"+dime);
		promedio_iv=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod3"+dime).innerHTML))/4;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_iv,1);
		cpi_mod[1].subdimension[0].valor=promedio_iv.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML)+parseFloat(document.getElementById("sudimod4"+dime).innerHTML))/5;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[1].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
		graficar(dime);	
		
		if (proceso2==1){
		cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
		densidad_economica(dime,2);
		
		cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[0].variable[1].x="modificado";
		densidad_inter_vial(dime,2);
		
		cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[1].variable[1].x="modificado";
		densidad_vial(dime,2);
		cpi_mod[1].subdimension[4].indicador[2].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[2].variable[1].x="modificado";
		super_des_vias(dime,2);
		
		cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
		acce_espa_pub(dime,2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		poblacion_urb_mun_modif=cpi_mod[1].subdimension[0].indicador[3].variable[0].valor;
		sup_urb_mun_modif=cpi_mod[1].subdimension[0].indicador[3].variable[1].valor;
	
		
		den_poblacional=(poblacion_urb_mun_modif/sup_urb_mun_modif);	

		
			if (den_poblacional<=0 || den_poblacional>=2*x){
				den_poblacional_s=0;
			}
			
			if (den_poblacional==x){
				den_poblacional_s=100;
			}
			
			
			if ( 0<den_poblacional && den_poblacional<2*x){
				
				den_poblacional_s=100*(1-Math.abs((den_poblacional-x)/x));		
				}
				


	cpi_mod[1].subdimension[0].indicador[3].valor=den_poblacional_s.toFixed(2);

	valor_sub=document.getElementById("sudimod01");
	promedio_iv=(parseFloat(cpi_mod[1].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[0].indicador[1].valor)+parseFloat(cpi_mod[1].subdimension[0].indicador[2].valor)+parseFloat(cpi_mod[1].subdimension[0].indicador[3].valor))/4;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_iv,1);
	cpi_mod[1].subdimension[0].valor=promedio_iv.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod01").innerHTML)+parseFloat(document.getElementById("sudimod11").innerHTML)+parseFloat(document.getElementById("sudimod21").innerHTML)+parseFloat(document.getElementById("sudimod31").innerHTML)+parseFloat(document.getElementById("sudimod41").innerHTML))/5;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod1");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[1].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
	graficar(1);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}
	
	
	function densidad_inter_vial(dime, bandera){ // densidad de interconexion vial
		
		x=cpi[1].subdimension[4].indicador[0].variable[2].x;
		intersecciones=cpi[1].subdimension[4].indicador[0].variable[0].valor;
		sup_urb_mun=cpi[1].subdimension[4].indicador[0].variable[1].valor;



		if (bandera==1){//viene de la llamada principal
			proceso2=0;
			
			
			intersecciones_modif=document.getElementById("variable0"+dime).value;
			if (sup_urb_mun_modif==""){
			sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
			}
			
			if (intersecciones_modif && intersecciones_modif>=0){		
				intersecciones_modif=parseFloat(intersecciones_modif);
				valor=document.getElementById("vari_mod0"+dime);
				valor.setAttribute("class","columna33");
				valor.innerHTML=number_format(intersecciones_modif,1);
				cpi_mod[1].subdimension[4].indicador[0].variable[0].valor=intersecciones_modif;
				cpi_mod[1].subdimension[4].indicador[0].variable[0].x="modificado";
			} else {
		
				intersecciones_modif=cpi_mod[1].subdimension[4].indicador[0].variable[0].valor;
			}
			

				
				if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				sup_urb_mun_modif=document.getElementById("variable1"+dime).value;
				sup_urb_mun_modif=parseFloat(sup_urb_mun_modif);
				valor=document.getElementById("vari_mod1"+dime);
				valor.setAttribute("class","columna33");
				valor.innerHTML=number_format(sup_urb_mun_modif,1);
				cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=sup_urb_mun_modif;
				cpi_mod[1].subdimension[4].indicador[0].variable[1].x="modificado";
				proceso2=1;
			} else{

				sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[0].variable[1].valor;
			}
			
			
				den_inter_vial=(intersecciones_modif/sup_urb_mun_modif);	

			
				if (den_inter_vial<0){
					den_inter_vial_s=0;
				}
				
				if (den_inter_vial>=x){
					den_inter_vial_s=100;
				}
				
				
				if ( 0<=den_inter_vial && den_inter_vial<x){
					
					den_inter_vial_s=100*(1-Math.abs((den_inter_vial-x)/x));		
					}
					
					
			valor=document.getElementById("indica_mod0"+dime);
			valor.setAttribute("class","columna3");
			valor.innerHTML=number_format(den_inter_vial_s,1);
			cpi_mod[1].subdimension[4].indicador[0].valor=den_inter_vial_s.toFixed(2);
			valor_sub=document.getElementById("sudimod4"+dime);
			promedio_fu=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
			valor_sub.setAttribute("class","columna3");
			valor_sub.innerHTML=number_format(promedio_fu,1);
			cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
			promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML)+parseFloat(document.getElementById("sudimod4"+dime).innerHTML))/5;
			if (promedio){
			promedio=parseFloat(promedio);
			}
			valor_dime=document.getElementById("dim_mod"+dime);
			valor_dime.setAttribute("class","columna3");
			valor_dime.innerHTML=number_format(promedio,1);
			cpi_mod[1].valor=promedio.toFixed(2);
			calcular_CPI();
			tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
			graficar(dime);	
			
			if (proceso2==1){
			cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
			densidad_economica(dime,2);
			cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
			densidad_poblacional(dime,2);
			cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[4].indicador[1].variable[1].x="modificado";
			densidad_vial(dime,2);
			cpi_mod[1].subdimension[4].indicador[2].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[4].indicador[2].variable[1].x="modificado";
			super_des_vias(dime,2);
			cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
			acce_espa_pub(dime,2);
			}
			
		}



		if (bandera==2){//viene de alguna otra llamada 
			
			intersecciones_modif=cpi_mod[1].subdimension[4].indicador[0].variable[0].valor;
			sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[0].variable[1].valor;
		
			
			den_inter_vial=(intersecciones_modif/sup_urb_mun_modif);	

			
			if (den_inter_vial<0){
				den_inter_vial_s=0;
			}
			
			if (den_inter_vial>=x){
				den_inter_vial_s=100;
			}
			
			
			if ( 0<=den_inter_vial && den_inter_vial<x){
				
				den_inter_vial_s=100*(1-Math.abs((den_inter_vial-x)/x));		
				}
					


		cpi_mod[1].subdimension[4].indicador[0].valor=den_inter_vial_s.toFixed(2);

		valor_sub=document.getElementById("sudimod41");
		promedio_fu=(parseFloat(cpi_mod[1].subdimension[4].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[1].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[2].valor))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_fu,1);
		cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod01").innerHTML)+parseFloat(document.getElementById("sudimod11").innerHTML)+parseFloat(document.getElementById("sudimod21").innerHTML)+parseFloat(document.getElementById("sudimod31").innerHTML)+parseFloat(document.getElementById("sudimod41").innerHTML))/5;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod1");
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[1].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
		graficar(1);
		
		//subDimensiones(3);

		}
		actualiza_ventanas();	
		}


	
function densidad_vial(dime, bandera){ //densidad vial
		
		x=cpi[1].subdimension[4].indicador[1].variable[2].x;
		km_vias=cpi[1].subdimension[4].indicador[1].variable[0].valor;
		sup_urb_mun=cpi[1].subdimension[4].indicador[1].variable[1].valor;



		if (bandera==1){//viene de la llamada principal
			
			proceso2=0;
			
			km_vias_modif=document.getElementById("variable0"+dime).value;
			if (sup_urb_mun_modif==""){
			sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
			}
			
			if (km_vias_modif && km_vias_modif>=0){		
				km_vias_modif=parseFloat(km_vias_modif);
				valor=document.getElementById("vari_mod0"+dime);
				valor.setAttribute("class","columna33");
				valor.innerHTML=number_format(km_vias_modif,1);
				cpi_mod[1].subdimension[4].indicador[1].variable[0].valor=km_vias_modif;
				cpi_mod[1].subdimension[4].indicador[1].variable[0].x="modificado";
			} else {
		
				km_vias_modif=cpi_mod[1].subdimension[4].indicador[1].variable[0].valor;
			}
			

				
				if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				sup_urb_mun_modif=document.getElementById("variable1"+dime).value;
				sup_urb_mun_modif=parseFloat(sup_urb_mun_modif);
				valor=document.getElementById("vari_mod1"+dime);
				valor.setAttribute("class","columna33");
				valor.innerHTML=number_format(sup_urb_mun_modif,1);
				cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=sup_urb_mun_modif;
				cpi_mod[1].subdimension[4].indicador[1].variable[1].x="modificado";
				proceso2=1;
			} else{

				sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[1].variable[1].valor;
			}
			
			
				den_vial=(km_vias_modif/sup_urb_mun_modif);	

			
				if (den_vial<0){
					den_vial_s=0;
				}
				
				if (den_vial>=x){
					den_vial_s=100;
				}
				
				
				if ( 0<=den_vial && den_vial<x){
					
					den_vial_s=100*(1-Math.abs((den_vial-x)/x));		
					}
					
					
			valor=document.getElementById("indica_mod1"+dime);
			valor.setAttribute("class","columna3");
			valor.innerHTML=number_format(den_vial_s,1);
			cpi_mod[1].subdimension[4].indicador[1].valor=den_vial_s.toFixed(2);
			valor_sub=document.getElementById("sudimod4"+dime);
			promedio_fu=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
			valor_sub.setAttribute("class","columna3");
			valor_sub.innerHTML=number_format(promedio_fu,1);
			cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
			promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML)+parseFloat(document.getElementById("sudimod4"+dime).innerHTML))/5;
			if (promedio){
			promedio=parseFloat(promedio);
			}
			valor_dime=document.getElementById("dim_mod"+dime);
			valor_dime.setAttribute("class","columna3");
			valor_dime.innerHTML=number_format(promedio,1);
			cpi_mod[1].valor=promedio.toFixed(2);
			calcular_CPI();
			tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
			graficar(dime);	
			
			if (proceso2==1){
			cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
			densidad_economica(dime,2);
			cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
			densidad_poblacional(dime,2);
			cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[4].indicador[0].variable[1].x="modificado";
			densidad_inter_vial(dime,2);
			cpi_mod[1].subdimension[4].indicador[2].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[4].indicador[2].variable[1].x="modificado";
			super_des_vias(dime,2);
			cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
			acce_espa_pub(dime,2);
			}
		}



		if (bandera==2){//viene de alguna otra llamada 
			
			km_vias_modif=cpi_mod[1].subdimension[4].indicador[1].variable[0].valor;
			sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[1].variable[1].valor;
		
			den_vial=(km_vias_modif/sup_urb_mun_modif);	

			
			if (den_vial<0){
				den_vial_s=0;
			}
			
			if (den_vial>=x){
				den_vial_s=100;
			}
			
			
			if ( 0<=den_vial && den_vial<x){
				
				den_vial_s=100*(1-Math.abs((den_vial-x)/x));		
				}
		


		cpi_mod[1].subdimension[4].indicador[1].valor=den_vial_s.toFixed(2);

		valor_sub=document.getElementById("sudimod41");
		promedio_fu=(parseFloat(cpi_mod[1].subdimension[4].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[1].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[2].valor))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_fu,1);
		cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod01").innerHTML)+parseFloat(document.getElementById("sudimod11").innerHTML)+parseFloat(document.getElementById("sudimod21").innerHTML)+parseFloat(document.getElementById("sudimod31").innerHTML)+parseFloat(document.getElementById("sudimod41").innerHTML))/5;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod1");
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[1].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
		graficar(1);
		
		//subDimensiones(3);

		}
		actualiza_ventanas();	
		}


function super_des_vias(dime, bandera){ //superficie destinada a vias
	min=cpi[1].subdimension[4].indicador[2].variable[2].min;
	max=cpi[1].subdimension[4].indicador[2].variable[2].max;
	superficie_via=cpi[1].subdimension[4].indicador[2].variable[0].valor;
	sup_urb_mun=cpi[1].subdimension[4].indicador[2].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		
		proceso2=0;
		superficie_via_modif=document.getElementById("variable0"+dime).value;
		if (sup_urb_mun_modif==""){
		sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (superficie_via_modif && superficie_via_modif>=0){		
			superficie_via_modif=parseFloat(superficie_via_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(superficie_via_modif,1);
			cpi_mod[1].subdimension[4].indicador[2].variable[0].valor=superficie_via_modif;
			cpi_mod[1].subdimension[4].indicador[2].variable[0].x="modificado";
		} else {
	
			superficie_via_modif=cpi_mod[1].subdimension[4].indicador[2].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			sup_urb_mun_modif=document.getElementById("variable1"+dime).value;
			sup_urb_mun_modif=parseFloat(sup_urb_mun_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(sup_urb_mun_modif,1);
			cpi_mod[1].subdimension[4].indicador[2].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[1].subdimension[4].indicador[2].variable[1].x="modificado";
			proceso2=1;
		} else{

			sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[2].variable[1].valor;
		}
		
		
			superficie_dv=100*(superficie_via_modif/sup_urb_mun_modif);	

		
			if (superficie_dv<=min){
				superficie_dv_s=0;
			}
			
			if (superficie_dv>=max){
				superficie_dv_s=100;
			}
			
			
			if ( min<superficie_dv && superficie_dv<max){
				
				superficie_dv_s=100*(((superficie_dv-min)/(max-min)));		
				}
				
				
		valor=document.getElementById("indica_mod2"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(superficie_dv_s,1);
		cpi_mod[1].subdimension[4].indicador[2].valor=superficie_dv_s.toFixed(2);
		valor_sub=document.getElementById("sudimod4"+dime);
		promedio_fu=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_fu,1);
		cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML)+parseFloat(document.getElementById("sudimod4"+dime).innerHTML))/5;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[1].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
		graficar(dime);	
		
		if (proceso2==1){
		cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
		densidad_economica(dime,2);
		cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
		densidad_poblacional(dime,2);
		cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[0].variable[1].x="modificado";
		densidad_inter_vial(dime,2);
		cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[1].variable[1].x="modificado";
		densidad_vial(dime,2);
		cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
		acce_espa_pub(dime,2);
		}
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		superficie_via_modif=cpi_mod[1].subdimension[4].indicador[2].variable[0].valor;
		sup_urb_mun_modif=cpi_mod[1].subdimension[4].indicador[2].variable[1].valor;
	
		superficie_dv=100*(superficie_via_modif/sup_urb_mun_modif);	

		
		if (superficie_dv<=min){
			superficie_dv_s=0;
		}
		
		if (superficie_dv>=max){
			superficie_dv_s=100;
		}
		
		
		if ( min<superficie_dv && superficie_dv<max){
			
			superficie_dv_s=100*(((superficie_dv-min)/(max-min)));		
			}
	


	cpi_mod[1].subdimension[4].indicador[2].valor=superficie_dv_s.toFixed(2);

	valor_sub=document.getElementById("sudimod41");
	promedio_fu=(parseFloat(cpi_mod[1].subdimension[4].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[1].valor)+parseFloat(cpi_mod[1].subdimension[4].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_fu,1);
	cpi_mod[1].subdimension[4].valor=promedio_fu.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod01").innerHTML)+parseFloat(document.getElementById("sudimod11").innerHTML)+parseFloat(document.getElementById("sudimod21").innerHTML)+parseFloat(document.getElementById("sudimod31").innerHTML)+parseFloat(document.getElementById("sudimod41").innerHTML))/5;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod1");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[1].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
	graficar(1);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}


function acce_espa_pub(dime, bandera){ //acceso a espacios publicos
	
	min=cpi[2].subdimension[3].indicador[0].variable[2].min;
	max=cpi[2].subdimension[3].indicador[0].variable[2].max;
	area_urbana=cpi[2].subdimension[3].indicador[0].variable[0].valor;
	sup_urb_mun=cpi[2].subdimension[3].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		area_urbana_modif=document.getElementById("variable0"+dime).value;
		if (sup_urb_mun_modif==""){
		sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (area_urbana_modif && area_urbana_modif>=0){		
			area_urbana_modif=parseFloat(area_urbana_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(area_urbana_modif,1);
			cpi_mod[2].subdimension[3].indicador[0].variable[0].valor=area_urbana_modif;
			cpi_mod[2].subdimension[3].indicador[0].variable[0].x="modificado";
		} else {
	
			area_urbana_modif=cpi_mod[2].subdimension[3].indicador[0].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			sup_urb_mun_modif=document.getElementById("variable1"+dime).value;
			sup_urb_mun_modif=parseFloat(sup_urb_mun_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(sup_urb_mun_modif,1);
			cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
			cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{

			sup_urb_mun_modif=cpi_mod[2].subdimension[3].indicador[0].variable[1].valor;
		}
		
		
			accesibilidad=100*(area_urbana_modif/sup_urb_mun_modif);	

		
			if (accesibilidad<=min){
				accesibilidad_s=0;
			}
			
			if (accesibilidad>=max){
				accesibilidad_s=100;
			}
			
			
			if ( min<accesibilidad && accesibilidad<max){
				
				accesibilidad_s=accesibilidad;		
				}
				
				
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(accesibilidad_s,1);
		cpi_mod[2].subdimension[3].indicador[0].valor=accesibilidad_s.toFixed(2);
		valor_sub=document.getElementById("sudimod3"+dime);
		promedio_ep=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ep,1);
		cpi_mod[2].subdimension[3].valor=promedio_ep.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[2].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
		graficar(dime);	
		
		if (proceso2==1){
		cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
		densidad_economica(dime,2);
		cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
		densidad_poblacional(dime,2);
		cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[0].variable[1].x="modificado";
		densidad_inter_vial(dime,2);
		cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[1].subdimension[4].indicador[1].variable[1].x="modificado";
		densidad_vial(dime,2);
		cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=sup_urb_mun_modif;
		cpi_mod[2].subdimension[3].indicador[0].variable[1].x="modificado";
		super_des_vias(dime,2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		area_urbana_modif=cpi_mod[2].subdimension[3].indicador[0].variable[0].valor;
		sup_urb_mun_modif=cpi_mod[2].subdimension[3].indicador[0].variable[1].valor;
	
		accesibilidad=100*(area_urbana_modif/sup_urb_mun_modif);	

		
		if (accesibilidad<=min){
			accesibilidad_s=0;
		}
		
		if (accesibilidad>=max){
			accesibilidad_s=100;
		}
		
		
		if ( min<accesibilidad && accesibilidad<max){
			
			accesibilidad_s=accesibilidad;		
			}
	


	cpi_mod[2].subdimension[3].indicador[0].valor=accesibilidad_s.toFixed(2);

	valor_sub=document.getElementById("sudimod32");
	promedio_ep=(parseFloat(cpi_mod[2].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[3].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ep,1);
	cpi_mod[2].subdimension[3].valor=promedio_ep.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod02").innerHTML)+parseFloat(document.getElementById("sudimod12").innerHTML)+parseFloat(document.getElementById("sudimod22").innerHTML)+parseFloat(document.getElementById("sudimod32").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod2");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[2].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
	graficar(2);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	

	}

