// JavaScript Document 

//ecuaciones de Viviendas Particulares Habitadas

var viv_par_hab_modif;

function vivienda_durable(dime, bandera){ //vivienda durable
	
	min=cpi[1].subdimension[0].indicador[0].variable[2].min;
	max=cpi[1].subdimension[0].indicador[0].variable[2].max;
	viv_piso_fir=cpi[1].subdimension[0].indicador[0].variable[0].valor;
	viv_par_hab=cpi[1].subdimension[0].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		viv_piso_fir_modif=document.getElementById("variable0"+dime).value;
		if (viv_par_hab_modif==""){
		viv_par_hab_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (viv_piso_fir_modif && viv_piso_fir_modif>=0){		
			viv_piso_fir_modif=parseFloat(viv_piso_fir_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_piso_fir_modif,1);
			cpi_mod[1].subdimension[0].indicador[0].variable[0].valor=viv_piso_fir_modif;
			cpi_mod[1].subdimension[0].indicador[0].variable[0].x="modificado";
		} else {
	
			viv_piso_fir_modif=cpi_mod[1].subdimension[0].indicador[0].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				viv_par_hab_modif=document.getElementById("variable1"+dime).value;
				viv_par_hab_modif=parseFloat(viv_par_hab_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_par_hab_modif,1);
			cpi_mod[1].subdimension[0].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{

			viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[0].variable[1].valor;
		}
		
		
			viv_durable=100*(viv_piso_fir_modif/viv_par_hab_modif);	

		
			if (viv_durable<=min){
				viv_durable_s=0;
			}
			
			if (viv_durable>=max){
				viv_durable_s=100;
			}
			
			
			if ( min<viv_durable && viv_durable<max){
				
				viv_durable_s=100*((viv_durable-min)/(max-min));		
				}
				
				
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(viv_durable_s,1);
		cpi_mod[1].subdimension[0].indicador[0].valor=viv_durable_s.toFixed(2);
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
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
		calcular_CPI();
		graficar(dime);	
		
		if (proceso2==1){
			cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[1].variable[1].x="modificado";
			agua_mejorada(dime,2);
			cpi_mod[1].subdimension[0].indicador[2].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[2].variable[1].x="modificado";
			espacio_habitable(dime,2);
			cpi_mod[4].subdimension[1].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[4].subdimension[1].indicador[0].variable[1].x="modificado";
			rec_residuos(dime,2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		viv_piso_fir_modif=cpi_mod[1].subdimension[0].indicador[0].variable[0].valor;
		viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[0].variable[1].valor;
	
		viv_durable=100*(viv_piso_fir_modif/viv_par_hab_modif);	

		
		if (viv_durable<=min){
			viv_durable_s=0;
		}
		
		if (viv_durable>=max){
			viv_durable_s=100;
		}
		
		
		if ( min<viv_durable && viv_durable<max){
			
			viv_durable_s=100*((viv_durable-min)/(max-min));		
			}
			
	


	cpi_mod[1].subdimension[0].indicador[0].valor=viv_durable_s.toFixed(2);

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
	cpi_mod[1].valor=promedio;
	tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo (2)*";
	calcular_CPI();
	graficar(1);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	
	}


function agua_mejorada(dime, bandera){  // agua mejorada
	
	min=cpi[1].subdimension[0].indicador[1].variable[2].min;
	max=cpi[1].subdimension[0].indicador[1].variable[2].max;
	viv_acce_agua=cpi[1].subdimension[0].indicador[1].variable[0].valor;
	viv_par_hab=cpi[1].subdimension[0].indicador[1].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		viv_acce_agua_modif=document.getElementById("variable0"+dime).value;
		if (viv_par_hab_modif==""){
			viv_par_hab_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (viv_acce_agua_modif && viv_acce_agua_modif>=0){		
			viv_acce_agua_modif=parseFloat(viv_acce_agua_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_acce_agua_modif,1);
			cpi_mod[1].subdimension[0].indicador[1].variable[0].valor=viv_acce_agua_modif;
			cpi_mod[1].subdimension[0].indicador[1].variable[0].x="modificado";
		} else {
	
			viv_acce_agua_modif=cpi_mod[1].subdimension[0].indicador[1].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				viv_par_hab_modif=document.getElementById("variable1"+dime).value;
				viv_par_hab_modif=parseFloat(viv_par_hab_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_par_hab_modif,1);
			cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[1].variable[1].x="modificado";
			proceso2=1;
		} else{

			viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[1].variable[1].valor;
		}
		
		
			agua_mejor=100*(viv_acce_agua_modif/viv_par_hab_modif);	

		
			if (agua_mejor<=min){
				agua_mejor_s=0;
			}
			
			if (agua_mejor>max){
				agua_mejor_s=100;
			}
			
			
			if ( min<agua_mejor && agua_mejor<=max){
				
				agua_mejor_s=100*((agua_mejor-min)/(max-min));		
				}
				
				
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(agua_mejor_s,1);
		cpi_mod[1].subdimension[0].indicador[1].valor=agua_mejor_s.toFixed(2);
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
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
		calcular_CPI();
		graficar(dime);	
		
		if (proceso2==1){
			cpi_mod[1].subdimension[0].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[0].variable[1].x="modificado";
			vivienda_durable(dime,2);
			cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[1].variable[1].x="modificado";
			espacio_habitable(dime,2);
			cpi_mod[4].subdimension[1].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[4].subdimension[1].indicador[0].variable[1].x="modificado";
			rec_residuos(dime,2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		viv_acce_agua_modif=cpi_mod[1].subdimension[0].indicador[1].variable[0].valor;
		viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[1].variable[1].valor;
	
		agua_mejor=100*(viv_acce_agua_modif/viv_par_hab_modif);	

		
		if (agua_mejor<=min){
			agua_mejor_s=0;
		}
		if (agua_mejor>max){
			agua_mejor_s=100;
		}

		
		if ( min<agua_mejor && agua_mejor<=max){
			
			agua_mejor_s=100*((agua_mejor-min)/(max-min));		
			}
	


	cpi_mod[1].subdimension[0].indicador[1].valor=agua_mejor_s.toFixed(2);

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
	cpi_mod[1].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
	graficar(1);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	
	}


function espacio_habitable(dime, bandera){ //Espacio habitable suficiente
	
	min=cpi[1].subdimension[0].indicador[2].variable[2].min;
	max=cpi[1].subdimension[0].indicador[2].variable[2].max;
	potencia=cpi[1].subdimension[0].indicador[2].variable[2].otro;
	viv_tug=cpi[1].subdimension[0].indicador[2].variable[0].valor;
	viv_par_hab=cpi[1].subdimension[0].indicador[2].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		viv_tug_modif=document.getElementById("variable0"+dime).value;
		if (viv_par_hab_modif==""){
			viv_par_hab_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (viv_tug_modif && viv_tug_modif>=0){		
			viv_tug_modif=parseFloat(viv_tug_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_tug_modif,1);
			cpi_mod[1].subdimension[0].indicador[2].variable[0].valor=viv_tug_modif;
			cpi_mod[1].subdimension[0].indicador[2].variable[0].x="modificado";
		} else {
	
			viv_tug_modif=cpi_mod[1].subdimension[0].indicador[2].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				viv_par_hab_modif=document.getElementById("variable1"+dime).value;
				viv_par_hab_modif=parseFloat(viv_par_hab_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_par_hab_modif,1);
			cpi_mod[1].subdimension[0].indicador[2].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[2].variable[1].x="modificada";
			proceso2=1;
		} else{

			viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[2].variable[1].valor;
		}
		
		
			espacio_suficiente=100*(viv_tug_modif/viv_par_hab_modif);	
			
			
			
			
			
			if (Math.pow(espacio_suficiente, potencia)<=Math.pow(min, potencia)){
				espacio_suficiente_s=0;
			}
			
			if (Math.pow(espacio_suficiente, potencia)>=Math.pow(max, potencia)){
				espacio_suficiente_s=100;
			}
			
			
			if ( Math.pow(min, potencia)<Math.pow(espacio_suficiente, potencia) && Math.pow(espacio_suficiente, potencia)<Math.pow(max, potencia)){
				
				espacio_suficiente_s=100*((Math.pow(espacio_suficiente, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
				}

		
		
				
				
		valor=document.getElementById("indica_mod2"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(espacio_suficiente_s,1);
		cpi_mod[1].subdimension[0].indicador[2].valor=espacio_suficiente_s.toFixed(2);
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
		tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
		graficar(dime);	
		
		if (proceso2==1){
			cpi_mod[1].subdimension[0].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[0].variable[1].x="modificado";
			vivienda_durable(dime,2);
			cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=viv_par_hab_modif;
			cpi_mod[1].subdimension[0].indicador[1].variable[1].x="modificado";
			agua_mejorada(dime,2);
			cpi_mod[4].subdimension[1].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[4].subdimension[1].indicador[0].variable[1].x="modificado";
			rec_residuos(dime,2);
			
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		viv_tug_modif=cpi_mod[1].subdimension[0].indicador[2].variable[0].valor;
		viv_par_hab_modif=cpi_mod[1].subdimension[0].indicador[2].variable[1].valor;
	
		espacio_suficiente=100*(viv_tug_modif/viv_par_hab_modif);	
		
		
		
		
		
		if (Math.pow(espacio_suficiente, potencia)<=Math.pow(min, potencia)){
			espacio_suficiente_s=0;
		}
		
		if (Math.pow(espacio_suficiente, potencia)>=Math.pow(max, potencia)){
			espacio_suficiente_s=100;
		}
		
		
		if ( Math.pow(min, potencia)<Math.pow(espacio_suficiente, potencia) && Math.pow(espacio_suficiente, potencia)<Math.pow(max, potencia)){
			
			espacio_suficiente_s=100*((Math.pow(espacio_suficiente, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
			}

	


	cpi_mod[1].subdimension[0].indicador[2].valor=espacio_suficiente_s.toFixed(2);

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
	cpi_mod[1].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl2").innerHTML="Infraestructura de Desarrollo  (2)*";
	graficar(1);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	
	}


function rec_residuos(dime, bandera){//recoleccion de residuos
	
	min=cpi[4].subdimension[1].indicador[0].variable[2].min;
	max=cpi[4].subdimension[1].indicador[0].variable[2].max;
	viv_rec_res=cpi[4].subdimension[1].indicador[0].variable[0].valor;
	viv_par_hab=cpi[4].subdimension[1].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		viv_rec_res_modif=document.getElementById("variable0"+dime).value;
		if (viv_par_hab_modif==""){
			viv_par_hab_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (viv_rec_res_modif && viv_rec_res_modif>=0){		
			viv_rec_res_modif=parseFloat(viv_rec_res_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_rec_res_modif,1);
			cpi_mod[4].subdimension[1].indicador[0].variable[0].valor=viv_rec_res_modif;
			cpi_mod[4].subdimension[1].indicador[0].variable[0].x="modificado";
		} else {
	
			viv_rec_res_modif=cpi_mod[4].subdimension[1].indicador[0].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				viv_par_hab_modif=document.getElementById("variable1"+dime).value;
				viv_par_hab_modif=parseFloat(viv_par_hab_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viv_par_hab_modif,1);
			cpi_mod[4].subdimension[1].indicador[0].variable[1].valor=viv_par_hab_modif;
			cpi_mod[4].subdimension[1].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{

			viv_par_hab_modif=cpi_mod[4].subdimension[1].indicador[0].variable[1].valor;
		}
		
		
			recoleccion=100*(viv_rec_res_modif/viv_par_hab_modif);	

		
			if (recoleccion<=min){
				recoleccion_s=0;
			}
			
			if (recoleccion>max){
				recoleccion_s=100;
			}
			
			
			if ( min<recoleccion && recoleccion<=max){
				
				recoleccion_s=recoleccion;		
				}
				
				
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(recoleccion_s,1);
		cpi_mod[4].subdimension[1].indicador[0].valor=recoleccion_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_mr=(parseFloat(cpi_mod[4].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[1].indicador[1].valor))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_mr,1);
		cpi_mod[1].subdimension[0].valor=promedio_mr.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[4].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl5").innerHTML="Sostenibilidad Ambiental (5)*";
		graficar(dime);	
		
		if (proceso2==1){
		cpi_mod[1].subdimension[0].indicador[0].variable[1].valor=viv_par_hab_modif;
		cpi_mod[1].subdimension[0].indicador[0].variable[1].x="modificado";
		vivienda_durable(dime,2);
		cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=viv_par_hab_modif;
		cpi_mod[1].subdimension[0].indicador[1].variable[1].x="modificado";
		agua_mejorada(dime,2);
		cpi_mod[1].subdimension[0].indicador[2].variable[1].valor=viv_par_hab_modif;
		cpi_mod[1].subdimension[0].indicador[2].variable[1].x="modificado";
		espacio_habitable(dime,2);
	
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		viv_rec_res_modif=cpi_mod[4].subdimension[1].indicador[0].variable[0].valor;
		viv_par_hab_modif=cpi_mod[4].subdimension[1].indicador[0].variable[1].valor;
	
		recoleccion=100*(viv_rec_res_modif/viv_par_hab_modif);	

		
		if (recoleccion<=min){
			recoleccion_s=0;
		}
		
		if (recoleccion>max){
			recoleccion_s=100;
		}
		
		
		if ( min<recoleccion && recoleccion<=max){
			
			recoleccion_s=recoleccion;		
			}


	cpi_mod[4].subdimension[1].indicador[0].valor=recoleccion_s.toFixed(2);

	valor_sub=document.getElementById("sudimod14");
	promedio_mr=(parseFloat(cpi_mod[4].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[1].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_mr,1);
	cpi_mod[4].subdimension[1].valor=promedio_mr.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod04").innerHTML)+parseFloat(document.getElementById("sudimod14").innerHTML)+parseFloat(document.getElementById("sudimod24").innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod4");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[4].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl5").innerHTML="Sostenibilidad Ambiental (5)*";
	graficar(4);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	
	}


