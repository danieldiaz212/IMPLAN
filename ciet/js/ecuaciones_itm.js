// JavaScript Document 

//ecuaciones de Ingresos Totales del Municipio

var ing_tot_mun_modif;
function recauda_propios(dime, bandera){ //Recaudacion de ingresos propios
	
	min=cpi[5].subdimension[1].indicador[1].variable[2].min;
	max=cpi[5].subdimension[1].indicador[1].variable[2].max;
	ingresos_p=cpi[5].subdimension[1].indicador[1].variable[0].valor;
	ing_tot_mun=cpi[5].subdimension[1].indicador[1].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		ingresos_p_modif=document.getElementById("variable0"+dime).value;
		if (ing_tot_mun==""){
			ing_tot_mun=document.getElementById("variable1"+dime).value;	
		}
		
		if (ingresos_p_modif && ingresos_p_modif>=0){		
			ingresos_p_modif=parseFloat(ingresos_p_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(ingresos_p_modif,1);
			cpi_mod[5].subdimension[1].indicador[1].variable[0].valor=ingresos_p_modif;
			cpi_mod[5].subdimension[1].indicador[1].variable[0].x="modificado";
		} else {
	
			ingresos_p_modif=cpi_mod[5].subdimension[1].indicador[1].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				ing_tot_mun_modif=document.getElementById("variable1"+dime).value;
				ing_tot_mun_modif=parseFloat(ing_tot_mun_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(ing_tot_mun_modif,1);
			cpi_mod[5].subdimension[1].indicador[1].variable[1].valor=ing_tot_mun_modif;
			cpi_mod[5].subdimension[1].indicador[1].variable[1].x="modificado";
			proceso2=1;
		} else{

			ing_tot_mun_modif=cpi_mod[5].subdimension[1].indicador[1].variable[1].valor;
		}
		
		
			recauda=100*(ingresos_p_modif/ing_tot_mun_modif);	

		
			if (recauda<=min){
				recauda_s=0;
			}
			
			if (recauda>=max){
				recauda_s=100;
			}
			
			
			if ( min<recauda && recauda<max){
				
				recauda_s=100*((recauda-min)/(max-min));		
				}
				
				
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(recauda_s,1);
		cpi_mod[5].subdimension[1].indicador[1].valor=recauda_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_ci=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ci,1);
		cpi_mod[5].subdimension[1].valor=promedio_ci.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[5].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl6").innerHTML="Gobernanza y Legislaci&oacute;n (6)*";
		graficar(dime);	
		
		if (proceso2==1){
			cpi_mod[5].subdimension[1].indicador[2].variable[1].valor=ing_tot_mun_modif;
			cpi_mod[5].subdimension[1].indicador[2].variable[1].x="modificado";
			deuda_sub(dime,2);
	
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		ingresos_p_modif=cpi_mod[5].subdimension[1].indicador[1].variable[0].valor;
		ing_tot_mun_modif=cpi_mod[5].subdimension[1].indicador[1].variable[1].valor;
	
		recauda=100*(ingresos_p_modif/ing_tot_mun_modif);	

		
		if (recauda<=min){
			recauda_s=0;
		}
		
		if (recauda>=max){
			recauda_s=100;
		}
		
		
		if ( min<recauda && recauda<max){
			
			recauda_s=100*((recauda-min)/(max-min));		
			}
			


	cpi_mod[5].subdimension[1].indicador[1].valor=recauda_s.toFixed(2);

	valor_sub=document.getElementById("sudimod15");
	promedio_ci=(parseFloat(cpi_mod[5].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[1].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ci,1);
	cpi_mod[5].subdimension[1].valor=promedio_ci.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod05").innerHTML)+parseFloat(document.getElementById("sudimod15").innerHTML)+parseFloat(document.getElementById("sudimod25").innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod5");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[5].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl6").innerHTML="Gobernanza y Legislaci&oacute;n (6)*";
	graficar(5);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}


function deuda_sub(dime, bandera){//deuda sub nacional
	
	x=cpi[5].subdimension[1].indicador[2].variable[2].x;
	deuda_mun=cpi[5].subdimension[1].indicador[2].variable[0].valor;
	ing_tot_mun=cpi[5].subdimension[1].indicador[2].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		deuda_mun_modif=document.getElementById("variable0"+dime).value;
		if (ing_tot_mun==""){
			ing_tot_mun=document.getElementById("variable1"+dime).value;	
		}
		
		if (deuda_mun_modif && deuda_mun_modif>=0){		
			deuda_mun_modif=parseFloat(deuda_mun_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(deuda_mun_modif,1);
			cpi_mod[5].subdimension[1].indicador[2].variable[0].valor=deuda_mun_modif;
			cpi_mod[5].subdimension[1].indicador[2].variable[0].x="modificado";
		} else {
	
			deuda_mun_modif=cpi_mod[5].subdimension[1].indicador[2].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				ing_tot_mun_modif=document.getElementById("variable1"+dime).value;
				ing_tot_mun_modif=parseFloat(ing_tot_mun_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(ing_tot_mun_modif,1);
			cpi_mod[5].subdimension[1].indicador[2].variable[1].valor=ing_tot_mun_modif;
			cpi_mod[5].subdimension[1].indicador[2].variable[1].x="modificado";
			proceso2=1;
		} else{

			ing_tot_mun_modif=cpi_mod[5].subdimension[1].indicador[2].variable[1].valor;
		}
		
		
			deuda=100*(deuda_mun_modif/ing_tot_mun_modif);	

		
			if (deuda>=2*x){
				deuda_s=0;
			}
			
			if (deuda<=x){
				deuda_s=100;
			}
			
			
			if ( x<deuda && deuda<2*x){
				
				deuda_s=100*(1-Math.abs(((deuda-x)/x)));		
				}
				
				
		valor=document.getElementById("indica_mod2"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(deuda_s,1);
		cpi_mod[5].subdimension[1].indicador[2].valor=deuda_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_ci=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ci,1);
		cpi_mod[5].subdimension[1].valor=promedio_ci.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[5].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl6").innerHTML="Gobernanza y Legislaci&oacute;n (6)*";
		graficar(dime);	
		
		if (proceso2==1){
		cpi_mod[5].subdimension[1].indicador[1].variable[1].valor=ing_tot_mun_modif;
		cpi_mod[5].subdimension[1].indicador[1].variable[1].x="modificado";
		recauda_propios(dime,2);

	
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		deuda_mun_modif=cpi_mod[5].subdimension[1].indicador[2].variable[0].valor;
		ing_tot_mun_modif=cpi_mod[5].subdimension[1].indicador[2].variable[1].valor;

		
		deuda=100*(deuda_mun_modif/ing_tot_mun_modif);	

		
		if (deuda>=2*x){
			deuda_s=0;
		}
		
		if (deuda<=x){
			deuda_s=100;
		}
		
		
		if ( x<deuda && deuda<2*x){
			
			deuda_s=100*(1-Math.abs(((deuda-x)/x)));		
			}
			


	cpi_mod[5].subdimension[1].indicador[2].valor=deuda_s.toFixed(2);

	valor_sub=document.getElementById("sudimod15");
	promedio_ci=(parseFloat(cpi_mod[5].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[1].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ci,1);
	cpi_mod[5].subdimension[1].valor=promedio_ci.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod05").innerHTML)+parseFloat(document.getElementById("sudimod15").innerHTML)+parseFloat(document.getElementById("sudimod25").innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod5");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[5].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl6").innerHTML="Gobernanza y Legislaci&oacute;n (6)*";
	graficar(5);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}

