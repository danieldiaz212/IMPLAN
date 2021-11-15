// JavaScript Document
function tasa_alfa(dime, bandera){// tasa de alfabetización
	
	min=cpi[2].subdimension[1].indicador[0].variable[2].min;
	max=cpi[2].subdimension[1].indicador[0].variable[2].max;
	leer_y_escri=cpi[2].subdimension[1].indicador[0].variable[0].valor;
	pobla_may_15=cpi[2].subdimension[1].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		leer_y_escri_modif=document.getElementById("variable0"+dime).value;
		if (pobla_may_15_modif==""){
			pobla_may_15_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (leer_y_escri_modif && leer_y_escri_modif>=0){		
			leer_y_escri_modif=parseFloat(leer_y_escri_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(leer_y_escri_modif,1);
			cpi_mod[2].subdimension[1].indicador[0].variable[0].valor=leer_y_escri_modif;
			cpi_mod[2].subdimension[1].indicador[0].variable[0].x="modificado";
		} else {
	
			leer_y_escri_modif=cpi_mod[2].subdimension[1].indicador[0].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				pobla_may_15_modif=document.getElementById("variable1"+dime).value;
				pobla_may_15_modif=parseFloat(pobla_may_15_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(pobla_may_15_modif,1);
			cpi_mod[2].subdimension[1].indicador[0].variable[1].valor=pobla_may_15_modif;
			cpi_mod[2].subdimension[1].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{

			pobla_may_15_modif=cpi_mod[2].subdimension[1].indicador[0].variable[1].valor;
		}
		
		
			t_alfa=100*(leer_y_escri_modif/pobla_may_15_modif);	

		
			if (t_alfa<=min){
				t_alfa_s=0;
			}
			
			if (t_alfa>=max){
				t_alfa_s=100;
			}
			
			
			if ( min<t_alfa && t_alfa<max){
				
				t_alfa_s=100*((t_alfa-min)/(max-min));		
				}
				
				
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(t_alfa_s,1);
		cpi_mod[2].subdimension[1].indicador[0].valor=t_alfa_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_ci=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ci,1);
		cpi_mod[2].subdimension[1].valor=promedio_ci.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[2].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
		graficar(dime);	
		
		if (proceso2==1){
			cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=pobla_may_15_modif;
			cpi_mod[0].subdimension[3].indicador[1].variable[1].x="modificado";
			rel_emple_pobla(dime,2);
			
	
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		leer_y_escri_modif=cpi_mod[2].subdimension[1].indicador[0].variable[0].valor;
		pobla_may_15_modif=cpi_mod[2].subdimension[1].indicador[0].variable[1].valor;
	
		t_alfa=100*(leer_y_escri_modif/pobla_may_15_modif);	

		
			if (t_alfa<=min){
				t_alfa_s=0;
			}
			
			if (t_alfa>=max){
				t_alfa_s=100;
			}
			
			
			if ( min<t_alfa && t_alfa<max){
				
				t_alfa_s=100*((t_alfa-min)/(max-min));		
				}


	cpi_mod[2].subdimension[1].indicador[0].valor=t_alfa_s.toFixed(2);

	valor_sub=document.getElementById("sudimod12");
	promedio_ci=(parseFloat(cpi_mod[2].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[1].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ci,1);
	cpi_mod[2].subdimension[1].valor=promedio_ci.toFixed(2);
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
	

function tasa_desempleo(dime, bandera) {// Tasa de desempleo

	min=cpi[0].subdimension[3].indicador[0].variable[2].min;
	max=cpi[0].subdimension[3].indicador[0].variable[2].max;
	potencia=cpi[0].subdimension[3].indicador[0].variable[2].otro;
	pobla_may_15_sine=cpi[0].subdimension[3].indicador[0].variable[0].valor;
	pobla_ema_may_15=cpi[0].subdimension[3].indicador[0].variable[1].valor;
	
	if (bandera==1){
	pobla_may_15_sine_modif=document.getElementById("variable0"+dime).value;
	pobla_ema_may_15_modif=document.getElementById("variable1"+dime).value;	
	
	if (pobla_may_15_sine_modif && pobla_may_15_sine_modif>=0){
		pobla_may_15_sine_modif=parseFloat(pobla_may_15_sine_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(pobla_may_15_sine_modif,1);
		cpi_mod[0].subdimension[3].indicador[0].variable[0].valor=pobla_may_15_sine_modif;
		cpi_mod[0].subdimension[3].indicador[0].variable[0].x="modificado";
	} else {
		
		pobla_may_15_sine_modif=cpi_mod[0].subdimension[3].indicador[0].variable[0].valor;
		

	}
	
	if (pobla_ema_may_15_modif && pobla_ema_may_15_modif>0){
		pobla_ema_may_15_modif=parseFloat(pobla_ema_may_15_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(pobla_ema_may_15_modif,1);
		cpi_mod[0].subdimension[3].indicador[0].variable[1].valor=pobla_ema_may_15_modif;
		cpi_mod[0].subdimension[3].indicador[0].variable[1].x="modificado";
	} else{
		pobla_ema_may_15_modif=cpi_mod[0].subdimension[3].indicador[0].variable[1].valor;
		

	}
	}
	if (bandera==2){
		
		pobla_may_15_sine_modif=cpi_mod[0].subdimension[3].indicador[0].variable[0].valor;
		pobla_ema_may_15_modif=cpi_mod[0].subdimension[3].indicador[0].variable[1].valor;	
		
		
	}
	
	
	
	tasa_desemple=100*(pobla_may_15_sine_modif/pobla_ema_may_15_modif);	
	
	
	if (Math.pow(tasa_desemple, potencia)>=Math.pow(max, potencia)){
		tasa_desempleo_s=0;
	}
	
	if (Math.pow(tasa_desemple, potencia)<=Math.pow(min, potencia)){
		tasa_desempleo_s=100;
	}
	
	
	if ( Math.pow(min, potencia)<Math.pow(tasa_desemple, potencia) && Math.pow(tasa_desemple, potencia)<Math.pow(max, potencia)){
		
		tasa_desempleo_s=100*(1-(Math.pow(tasa_desemple, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
		}
	
	if (bandera==1){
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(tasa_desempleo_s,1);
	}
	cpi_mod[0].subdimension[3].indicador[0].valor=tasa_desempleo_s.toFixed(2);
	
	valor_sub=document.getElementById("sudimod3"+dime);
	promedio_empleo=(parseFloat(cpi_mod[0].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[0].subdimension[3].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_empleo,1);
	cpi_mod[0].subdimension[3].valor=promedio_empleo.toFixed(2);
	
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio.toFixed(2);
	calcular_CPI();
	graficar(dime);	
	actualiza_ventanas();	
	
}



function estaciones_monito(dime, bandera) {// Estaciones de monitoreo

	min=cpi[4].subdimension[0].indicador[0].variable[1].min;
	max=cpi[4].subdimension[0].indicador[0].variable[1].max;
	estaciones_monitoreo=cpi[4].subdimension[0].indicador[0].variable[0].valor;

if (bandera == 1){
	estaciones_monitoreo_modif=document.getElementById("variable0"+dime).value;

	
	
	if (estaciones_monitoreo_modif && estaciones_monitoreo_modif>=0){
		estaciones_monitoreo_modif=parseFloat(estaciones_monitoreo_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(estaciones_monitoreo_modif,1);
		cpi_mod[4].subdimension[0].indicador[0].variable[0].valor=estaciones_monitoreo_modif;
		cpi_mod[4].subdimension[0].indicador[0].variable[0].x="modificado";
	} else {
		//valor=document.getElementById("vari_mod0"+dime);
		//valor.innerHTML=estaciones_monitoreo;
		estaciones_monitoreo_modif=cpi_mod[4].subdimension[0].indicador[0].variable[0].valor;
	}
	
}

if (bandera==2) {
	estaciones_monitoreo_modif=cpi_mod[4].subdimension[0].indicador[0].variable[0].valor;
	}
	
		estaciones_monitoreo_cal=estaciones_monitoreo_modif;		
	
			
	
	if (estaciones_monitoreo_cal==min){
		estaciones_monitoreo_s=0;
	}
	
	if (estaciones_monitoreo_cal>=max){
		estaciones_monitoreo_s=100;
	}
	
	
	if (min<estaciones_monitoreo_cal && estaciones_monitoreo_cal<max){
		
		estaciones_monitoreo_s=100*((estaciones_monitoreo_cal-min)/(max-min));		
		}
		
  if (bandera==1){		
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(estaciones_monitoreo_s,1);
  }
	cpi_mod[4].subdimension[0].indicador[0].valor=estaciones_monitoreo_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_calidad_aire=(parseFloat(cpi_mod[4].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[1].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_calidad_aire,1);
	cpi_mod[4].subdimension[0].valor=promedio_calidad_aire.toFixed(2);
	
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
	actualiza_ventanas();	

	
}

function concentraciones_pm(dime, bandera) {// Concentraciones de PM

	x=cpi[4].subdimension[0].indicador[1].variable[1].x;
	concentracionespm=cpi[4].subdimension[0].indicador[1].variable[0].valor;

	if (bandera==1){
	concentracionespm_modif=document.getElementById("variable0"+dime).value;

	
	
	if (concentracionespm_modif && concentracionespm_modif>=0){
		concentracionespm_modif=parseFloat(concentracionespm_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(concentracionespm_modif,1);
		cpi_mod[4].subdimension[0].indicador[1].variable[0].valor=concentracionespm_modif;
		cpi_mod[4].subdimension[0].indicador[1].variable[0].x="modificado";
	} else {
		//valor=document.getElementById("vari_mod0"+dime);
		//valor.innerHTML=concentracionespm;
		concentracionespm_modif=cpi_mod[4].subdimension[0].indicador[1].variable[0].valor;
	}
	
	}
	if (bandera==2){
		concentracionespm_modif=cpi_mod[4].subdimension[0].indicador[1].variable[0].valor;
	}
		
		concentracionespm_cal=concentracionespm_modif;		
	
			
	
	if (concentracionespm_cal>=2*x){
		concentracionespm_s=0;
	}
	
	if (concentracionespm_cal<=x){
		concentracionespm_s=100;
	}
	
	
	if (x<concentracionespm_cal && concentracionespm_cal<2*x){
		
		concentracionespm_s=100*(1-Math.abs((concentracionespm_cal-x)/x));		
		}
	if (bandera==1){
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(concentracionespm_s,1);
	}
	cpi_mod[4].subdimension[0].indicador[1].valor=concentracionespm_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_calidad_aire=(parseFloat(cpi_mod[4].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[1].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_calidad_aire,1);
	cpi_mod[4].subdimension[0].valor=promedio_calidad_aire.toFixed(2);
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
	actualiza_ventanas();	
	
}
function concentraciones_co2(dime, bandera) {// Concentraciones de CO2

	min=cpi[4].subdimension[0].indicador[2].variable[1].min;
	max=cpi[4].subdimension[0].indicador[2].variable[1].max;
	potencia=cpi[4].subdimension[0].indicador[2].variable[1].otro;
	concentracionesCO2=cpi[4].subdimension[0].indicador[2].variable[0].valor;

	if (bandera==1){
	concentracionesCO2_modif=document.getElementById("variable0"+dime).value;

	
	
	if (concentracionesCO2_modif && concentracionesCO2_modif>=0 ){
		concentracionesCO2_modif=parseFloat(concentracionesCO2_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(concentracionesCO2_modif,1);
		cpi_mod[4].subdimension[0].indicador[2].variable[0].valor=concentracionesCO2_modif;
		cpi_mod[4].subdimension[0].indicador[2].variable[0].x="modificado";
	} else {
		//valor=document.getElementById("vari_mod0"+dime);
		//valor.innerHTML=concentracionesCO2;
		concentracionesCO2_modif=cpi_mod[4].subdimension[0].indicador[2].variable[0].valor;
	}
	}
	
	if (bandera==2){
		concentracionesCO2_modif=cpi_mod[4].subdimension[0].indicador[2].variable[0].valor;		
		}
		
	
		concentracionesCO2_cal=concentracionesCO2_modif/112336.538;		
	
			
	
	if (Math.pow(concentracionesCO2_cal, potencia)>=Math.pow(max, potencia)){
		concentracionesCO2_s=0;
	}
	
	if (Math.pow(concentracionesCO2_cal, potencia)<=Math.pow(min, potencia)){
		concentracionesCO2_s=100;
	}
	
	
	if ( Math.pow(min, potencia)<Math.pow(concentracionesCO2_cal, potencia) && Math.pow(concentracionesCO2_cal, potencia)<Math.pow(max, potencia)){
		xx=(Math.pow(concentracionesCO2_cal, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia));
		concentracionesCO2_s=100*(1-((Math.pow(concentracionesCO2_cal, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia))));		
		}
	
	
	if (bandera==1){
	valor=document.getElementById("indica_mod2"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(concentracionesCO2_s,1);
	}
	cpi_mod[4].subdimension[0].indicador[2].valor=concentracionesCO2_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_calidad_aire=(parseFloat(cpi_mod[4].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[1].valor)+parseFloat(cpi_mod[4].subdimension[0].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_calidad_aire,1);
	cpi_mod[4].subdimension[0].valor=promedio_calidad_aire.toFixed(2);
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
	actualiza_ventanas();	
	
}


function tratamiento_aguas(dime, bandera) {//Tratamiento de aguas residuales
	min=cpi[4].subdimension[1].indicador[1].variable[2].min;
	max=cpi[4].subdimension[1].indicador[1].variable[2].max;
	aguas_residuales_t=cpi[4].subdimension[1].indicador[1].variable[0].valor;
	aguas_residuales_p=cpi[4].subdimension[1].indicador[1].variable[1].valor;
	if (bandera ==1){
	aguas_residuales_t_modif=document.getElementById("variable0"+dime).value;
	aguas_residuales_p_modif=document.getElementById("variable1"+dime).value;
	
	
	if (aguas_residuales_t_modif && aguas_residuales_t_modif>0 ){
		aguas_residuales_t_modif=parseFloat(aguas_residuales_t_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(aguas_residuales_t_modif,1);
		cpi_mod[4].subdimension[1].indicador[1].variable[0].valor=aguas_residuales_t_modif;
		cpi_mod[4].subdimension[1].indicador[1].variable[0].x="modificado";
	} else {
		aguas_residuales_t_modif=cpi_mod[4].subdimension[1].indicador[1].variable[0].valor;
		
	}
	
	if (aguas_residuales_p_modif && aguas_residuales_p_modif>=0){
		aguas_residuales_p_modif=parseFloat(aguas_residuales_p_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(aguas_residuales_p_modif,1);
		cpi_mod[4].subdimension[1].indicador[1].variable[1].valor=aguas_residuales_p_modif;
	} else{
		aguas_residuales_p_modif=cpi_mod[4].subdimension[1].indicador[1].variable[1].valor;
		
	}
	}
	
	if (bandera ==2){
		aguas_residuales_t_modif=cpi_mod[4].subdimension[1].indicador[1].variable[0].valor;
		aguas_residuales_p_modif=cpi_mod[4].subdimension[1].indicador[1].variable[1].valor;
	}
	
	tar=100*(aguas_residuales_t_modif/aguas_residuales_p_modif);
			
	
	if (tar<min){
		tar_s=0;
	}
	
	if (tar>max){
		tar_s=100;
	}
	
	
	if (min<tar && tar<max){
		
		tar_s=tar;		
		}
	if (bandera==1){
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(tar_s,1);
	}
	cpi_mod[4].subdimension[1].indicador[1].valor=tar_s.toFixed(2);
	valor_sub=document.getElementById("sudimod1"+dime);
	promedio_manejor=(parseFloat(cpi_mod[4].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[4].subdimension[1].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_manejor,1);
	cpi_mod[4].subdimension[1].valor=promedio_manejor.toFixed(2);
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
	actualiza_ventanas();	

	
}
function energia_renovable(dime, bandera) {// generacion de energia renovable

	min=cpi[4].subdimension[2].indicador[0].variable[2].min;
	max=cpi[4].subdimension[2].indicador[0].variable[2].max;
	electricidad_producida=cpi[4].subdimension[2].indicador[0].variable[0].valor;
	electricidad_total=cpi[4].subdimension[2].indicador[0].variable[1].valor;
	if (bandera==1)
	{
	electricidad_producida_modif=document.getElementById("variable0"+dime).value;
	electricidad_total_modif=document.getElementById("variable1"+dime).value;
	
	
	if (electricidad_producida_modif && electricidad_producida_modif>=0){
		electricidad_producida_modif=parseFloat(electricidad_producida_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(electricidad_producida_modif,1);
		cpi_mod[4].subdimension[2].indicador[0].variable[0].valor=electricidad_producida_modif;
		cpi_mod[4].subdimension[2].indicador[0].variable[0].x="modificado";
	} else {

		electricidad_producida_modif=cpi_mod[4].subdimension[2].indicador[0].variable[0].valor;
	}
	
	if (electricidad_total_modif && electricidad_total_modif>0 ){
		electricidad_total_modif=parseFloat(electricidad_total_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(electricidad_total_modif,1);
		cpi_mod[4].subdimension[2].indicador[0].variable[1].valor=electricidad_total_modif;
		cpi_mod[4].subdimension[2].indicador[0].variable[1].x="modificado";
	} else{

		electricidad_total_modif=cpi_mod[4].subdimension[2].indicador[0].variable[1].valor;
		
	}
	}
	
	if (bandera==2)
		{
		electricidad_producida_modif=cpi_mod[4].subdimension[2].indicador[0].variable[0].valor;
		electricidad_total_modif=cpi_mod[4].subdimension[2].indicador[0].variable[1].valor;
		
		}
	if ( electricidad_total_modif == 0 ){
		
		energiar=0;
	}else{	
		
		energiar=100*(electricidad_producida_modif/electricidad_total_modif);	
	
	}		
	
	if (energiar==min){
		energiar_s=0;
	}
	
	if (energiar>=max){
		energiar_s=100;
	}
	
	
	if (min<energiar && energiar<max){
		
		energiar_s=100*((energiar-min)/(max-min));		
		}
	if (bandera==1)
	{
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(energiar_s,1);
	}
	cpi_mod[4].subdimension[2].indicador[0].valor=energiar_s.toFixed(2);
	valor_sub=document.getElementById("sudimod2"+dime);
	//promedio_manejor=(tar_s+parseFloat(document.getElementById("indica_mod0"+dime).innerHTML))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(energiar_s,1);
	cpi_mod[4].subdimension[2].valor=energiar_s.toFixed(2);
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
	actualiza_ventanas();	

	
}


function velocidad_banda_an(dime, bandera) {// velocidad de banda ancha

	min=cpi[1].subdimension[2].indicador[1].variable[1].min;
	max=cpi[1].subdimension[2].indicador[1].variable[1].max;
	potencia=cpi[1].subdimension[2].indicador[1].variable[1].otro;
	v_banda_ancha=cpi[1].subdimension[2].indicador[1].variable[0].valor;

	if (bandera==0){

	v_banda_ancha_modif=document.getElementById("variable0"+dime).value;

	
	
	if (v_banda_ancha_modif && v_banda_ancha_modif>=0){
		v_banda_ancha_modif=parseFloat(v_banda_ancha_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(v_banda_ancha_modif,1);
		cpi_mod[1].subdimension[2].indicador[1].variable[0].valor=v_banda_ancha_modif;
		cpi_mod[1].subdimension[2].indicador[1].variable[0].x="modificado";
	} else {
		v_banda_ancha_modif=cpi_mod[1].subdimension[2].indicador[1].variable[0].valor;
		

	}
	
	}
	if (bandera==2){
		v_banda_ancha_modif=cpi_mod[1].subdimension[2].indicador[1].variable[0].valor;
	}

	v_banda_ancha_cal=v_banda_ancha_modif;	
	v_banda_ancha_cal_q=Math.pow(v_banda_ancha_cal,potencia);
	
		
		
	if (v_banda_ancha_cal_q<=Math.pow(min, potencia)){
		v_banda_ancha_s=0;
	}
	
	if (v_banda_ancha_cal_q>=Math.pow(max, potencia)){
		v_banda_ancha_s=100;
	}
	
	
	if ( Math.pow(min, potencia)<v_banda_ancha_cal_q && v_banda_ancha_cal_q<Math.pow(max, potencia)){
		xx=(Math.pow(v_banda_ancha_cal, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia));
		v_banda_ancha_s=100*(((Math.pow(v_banda_ancha_cal, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia))));		
		}
	
	
	
	if (bandera==0){
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(v_banda_ancha_s,1);
	}
	cpi_mod[1].subdimension[2].indicador[1].valor=v_banda_ancha_s.toFixed(2);
	valor_sub=document.getElementById("sudimod2"+dime);
	promedio_infra=(parseFloat(cpi_mod[1].subdimension[2].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[2].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_infra,1);
	cpi_mod[1].subdimension[2].valor=promedio_infra.toFixed(2);
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
	actualiza_ventanas();	

	
}



function coefieciente_gini(dime,bandera) {// Coeficiente de Gini

	min=cpi[3].subdimension[0].indicador[0].variable[1].min;
	max=cpi[3].subdimension[0].indicador[0].variable[1].max;
	coeficiente_gini=cpi[3].subdimension[0].indicador[0].variable[0].valor;

if (bandera==1){
	coeficiente_gini_modif=document.getElementById("variable0"+dime).value;

	
	
	if (coeficiente_gini_modif && coeficiente_gini_modif>=0){
		coeficiente_gini_modif=parseFloat(coeficiente_gini_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(coeficiente_gini_modif,1);
		cpi_mod[3].subdimension[0].indicador[0].variable[0].valor=coeficiente_gini_modif;
		cpi_mod[3].subdimension[0].indicador[0].variable[0].x="modificado";
	} else {
		
		coeficiente_gini_modif=cpi_mod[3].subdimension[0].indicador[0].variable[0].valor;
	
	
	}
}
if (bandera ==2) {
	
	coeficiente_gini_modif=cpi_mod[3].subdimension[0].indicador[0].variable[0].valor;
}
	
	coeficiente_gini_cal=coeficiente_gini_modif;
	
	
		
	
	
	if (coeficiente_gini_cal>=max){
		coeficiente_gini_s=0;
	}
	
	if (coeficiente_gini_cal<=min){
		coeficiente_gini_s=100;
	}
	
	
	if ( min<coeficiente_gini_cal && coeficiente_gini_cal<max){
		coeficiente_gini_s=100*(1-((coeficiente_gini_cal-min)/(max-min)));
		}
	
	
	if (bandera ==1) {
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(coeficiente_gini_s,1);
	}
	cpi_mod[3].subdimension[0].indicador[0].valor=coeficiente_gini_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_equidad=(coeficiente_gini_s+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_equidad,1);
	cpi_mod[3].subdimension[0].valor=promedio_equidad.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[3].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl4").innerHTML="Equidad e Inclusi&oacute;n Social (4)*";
	graficar(dime);		
}

function desempleojuvenil(dime, bandera) {// Tasa de desempleo

	min=cpi[3].subdimension[1].indicador[1].variable[2].min;
	max=cpi[3].subdimension[1].indicador[1].variable[2].max;
	potencia=cpi[3].subdimension[1].indicador[1].variable[2].otro;
	pobla_entre_15y64=cpi[3].subdimension[1].indicador[1].variable[0].valor;
	pobla_ema_entre_15y64=cpi[3].subdimension[1].indicador[1].variable[1].valor;

	if (bandera==1){
	pobla_may_15_sine_modif=document.getElementById("variable0"+dime).value;
	pobla_ema_may_15_modif=document.getElementById("variable1"+dime).value;	
	
	
	if (pobla_may_15_sine_modif && pobla_may_15_sine_modif>=0){
		pobla_may_15_sine_modif=parseFloat(pobla_may_15_sine_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(pobla_may_15_sine_modif,1);
		cpi_mod[3].subdimension[1].indicador[1].variable[0].valor=pobla_may_15_sine_modif;
		cpi_mod[3].subdimension[1].indicador[1].variable[0].x="modificado";
	} else {
		pobla_may_15_sine_modif=cpi_mod[3].subdimension[1].indicador[1].variable[0].valor;
	
	}
	
	if (pobla_ema_may_15_modif && pobla_ema_may_15_modif>0){
		pobla_ema_may_15_modif=parseFloat(pobla_ema_may_15_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=(pobla_ema_may_15_modif,1);
		cpi_mod[3].subdimension[1].indicador[1].variable[1].valor=pobla_ema_may_15_modif;
		cpi_mod[3].subdimension[1].indicador[1].variable[1].x="modificado";
	} else{
		pobla_ema_may_15_modif=cpi_mod[3].subdimension[1].indicador[1].variable[1].valor;
		

	}
	}
	
	if (bandera==2)
	{
		pobla_may_15_sine_modif=cpi_mod[3].subdimension[1].indicador[1].variable[0].valor;
		pobla_ema_may_15_modif=cpi_mod[3].subdimension[1].indicador[1].variable[1].valor;
	}
	
	tasa_desempleo_j=100*(pobla_may_15_sine_modif/pobla_ema_may_15_modif);
	
	
	if (Math.pow(tasa_desempleo_j, potencia)>=Math.pow(max, potencia)){
		tasa_desempleo_s=0;
	}
	
	if (Math.pow(tasa_desempleo_j, potencia)<=Math.pow(min, potencia)){
		tasa_desempleo_s=100;
	}
	
	
	if ( Math.pow(min, potencia)<Math.pow(tasa_desempleo_j, potencia) && Math.pow(tasa_desempleo_j, potencia)<Math.pow(max, potencia)){
		
		tasa_desempleo_s=100*(1-(Math.pow(tasa_desempleo_j, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
		}
		
		if (bandera==1){
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(tasa_desempleo_s,1);
		}
	cpi_mod[3].subdimension[1].indicador[1].valor=tasa_desempleo_s.toFixed(2);
	valor_sub=document.getElementById("sudimod1"+dime);
	promedio_empleo=(parseFloat(cpi_mod[3].subdimension[1].indicador[1].valor)+parseFloat(cpi_mod[3].subdimension[1].indicador[0].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_empleo,1);
	cpi_mod[3].subdimension[1].valor=promedio_empleo.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[3].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl4").innerHTML="Equidad e Inclusi&oacute;n Social (4)*";
	graficar(dime);	
	actualiza_ventanas();	

	
}

function esperanza_vida(dime, bandera) {// Esperanza de vida

	min=cpi[2].subdimension[0].indicador[0].variable[1].min;
	max=cpi[2].subdimension[0].indicador[0].variable[1].max;
	esperanza_vid=cpi[2].subdimension[0].indicador[0].variable[0].valor;

	if (bandera==1){
	esperanza_vid_modif=document.getElementById("variable0"+dime).value;

	if (esperanza_vid_modif && esperanza_vid_modif>=0){
	
	
		esperanza_vid_modif=parseFloat(esperanza_vid_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(esperanza_vid_modif,1);
		cpi_mod[2].subdimension[0].indicador[0].variable[0].valor=esperanza_vid_modif;
		cpi_mod[2].subdimension[0].indicador[0].variable[0].x="modificado";
	 }else {
		esperanza_vid_modif=cpi_mod[2].subdimension[0].indicador[0].variable[0].valor;
	}
	
	}	
	if (bandera==2){
		esperanza_vid_modif=cpi_mod[2].subdimension[0].indicador[0].variable[0].valor
	}

		esperanza_vid_cal=esperanza_vid_modif;		
	
			
	
	if (esperanza_vid_cal<min){
		esperanza_vid_s=0;
	}
	
	if (esperanza_vid_cal>=max){
		esperanza_vid_s=100;
	}
	
	
	if (min<esperanza_vid_cal && esperanza_vid_cal<max){
		
		esperanza_vid_s=100*((esperanza_vid_cal-min)/(max-min));		
		}
	if (bandera==1){
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(esperanza_vid_s,1);
	}
	cpi_mod[2].subdimension[0].indicador[0].valor=esperanza_vid_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_esperanza_vid=(parseFloat(cpi_mod[2].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[0].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_esperanza_vid,1);
	cpi_mod[2].subdimension[0].valor=promedio_esperanza_vid.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[2].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
	graficar(dime);	
	actualiza_ventanas();	

	
}

function tasa_mortalidad(dime, bandera) {// Tasa de mortalidad

	min=cpi[2].subdimension[0].indicador[1].variable[2].min;
	max=cpi[2].subdimension[0].indicador[1].variable[2].max;
	mortalidad=cpi[2].subdimension[0].indicador[1].variable[0].valor;
	nacidos=cpi[2].subdimension[0].indicador[1].variable[1].valor;
	if (bandera==1){
	mortalidad_modif=document.getElementById("variable0"+dime).value;
	nacidos_modif=document.getElementById("variable1"+dime).value;	
	
	
	if (mortalidad_modif>=0 && mortalidad_modif){
		mortalidad_modif=parseFloat(mortalidad_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(mortalidad_modif,1);
		cpi_mod[2].subdimension[0].indicador[1].variable[0].valor=mortalidad_modif;
		cpi_mod[2].subdimension[0].indicador[1].variable[0].x="modificado";
	} else {

		mortalidad_modif=cpi_mod[2].subdimension[0].indicador[1].variable[0].valor;
	}
	
	if (nacidos_modif>0){
		nacidos_modif=parseFloat(nacidos_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(nacidos_modif,1);
		cpi_mod[2].subdimension[0].indicador[1].variable[1].valor=nacidos_modif;
		cpi_mod[2].subdimension[0].indicador[1].variable[1].x="modificado";
	} else{

		nacidos_modif=cpi_mod[2].subdimension[0].indicador[1].variable[1].valor;
	}
	}
	
	if (bandera==2){
		mortalidad_modif=cpi_mod[2].subdimension[0].indicador[1].variable[0].valor;
		nacidos_modif=cpi_mod[2].subdimension[0].indicador[1].variable[1].valor;		
		
	}
	tasa_mort=1000*(mortalidad_modif/(nacidos_modif));
	
	if (Math.log(tasa_mort)>=Math.log(max)){
		tasa_mort_s=0;
	}
	
	if (Math.log(tasa_mort)<=Math.log(min)){
		tasa_mort_s=100;
	}
	
	
	if ( Math.log(min)<Math.log(tasa_mort) && Math.log(tasa_mort)<Math.log(max)){
		
		tasa_mort_s=100*(1-(Math.log(tasa_mort)-Math.log(min))/(Math.log(max)-Math.log(min)));		
		}
	
	if (bandera==1){
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(tasa_mort_s,1);
	}
	cpi_mod[2].subdimension[0].indicador[1].valor=tasa_mort_s.toFixed(2);
		
	valor_sub=document.getElementById("sudimod0"+dime);
	promedio_esperanza_vid=(parseFloat(cpi_mod[2].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[0].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_esperanza_vid,1);
	cpi_mod[2].subdimension[0].valor=promedio_esperanza_vid.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
		
	
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[2].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
	graficar(dime);	
	actualiza_ventanas();	
	
}

function particip_electo(dime, bandera) {// Participación electoral
	min=cpi[5].subdimension[0].indicador[0].variable[2].min;
	max=cpi[5].subdimension[0].indicador[0].variable[2].max;
	personas_votaron=cpi[5].subdimension[0].indicador[0].variable[0].valor;
	personas_lista=cpi[5].subdimension[0].indicador[0].variable[1].valor;
	if (bandera ==1)
	{
	personas_votaron_modif=document.getElementById("variable0"+dime).value;
	personas_lista_modif=document.getElementById("variable1"+dime).value;
	
	
	if (personas_votaron_modif>=0 && personas_votaron_modif){
		personas_votaron_modif=parseFloat(personas_votaron_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(personas_votaron_modif,1);
		cpi_mod[5].subdimension[0].indicador[0].variable[0].valor=personas_votaron_modif;
		cpi_mod[5].subdimension[0].indicador[0].variable[0].x="modificado";
	} else {
	
		personas_votaron_modif=cpi_mod[5].subdimension[0].indicador[0].variable[0].valor;
	}
	
	if (personas_lista_modif>0){
		personas_lista_modif=parseFloat(personas_lista_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(personas_lista_modif,1);
		cpi_mod[5].subdimension[0].indicador[0].variable[1].valor=personas_lista_modif;
		cpi_mod[5].subdimension[0].indicador[0].variable[1].x="modificado";
	} else{
		personas_lista_modif=cpi_mod[5].subdimension[0].indicador[0].variable[1].valor;
	}
	}
	
	if (bandera ==2){
		personas_votaron_modif=cpi_mod[5].subdimension[0].indicador[0].variable[0].valor;
		personas_lista_modif=cpi_mod[5].subdimension[0].indicador[0].variable[1].valor;
		
		}
	
	
		p_electoral=100*(personas_votaron_modif/personas_lista_modif);	

		
	
	if (p_electoral<=min){
		p_electoral_s=0;
	}
	
	if (p_electoral>max){
		p_electoral_s=100;
	}
	
	
	if (min<p_electoral && p_electoral<max){
		
		p_electoral_s=p_electoral;		
		}
		
	if (bandera==1)
	{
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(p_electoral_s,1);
	}
	cpi_mod[5].subdimension[0].indicador[0].valor=p_electoral_s.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	//promedio_manejor=(tar_s+parseFloat(document.getElementById("indica_mod0"+dime).innerHTML))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(p_electoral_s,1);
	cpi_mod[5].subdimension[0].valor=p_electoral_s.toFixed(2);
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
	actualiza_ventanas();	

	
}

function eficiencia_gasto(dime, bandera) {// Eficiencia del gasto publico
	x=cpi[5].subdimension[1].indicador[0].variable[2].x;
	gasto_real=cpi[5].subdimension[1].indicador[0].variable[0].valor;
	gasto_estimado=cpi[5].subdimension[1].indicador[0].variable[1].valor;
	if (bandera ==1){
	gasto_real_modif=document.getElementById("variable0"+dime).value;
	gasto_estimado_modif=document.getElementById("variable1"+dime).value;
	
	
	if (gasto_real_modif>=0 && gasto_real_modif){
		gasto_real_modif=parseFloat(gasto_real_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(gasto_real_modif,1);
		cpi_mod[5].subdimension[1].indicador[0].variable[0].valor=gasto_real_modif;
		cpi_mod[5].subdimension[1].indicador[0].variable[0].x="modificado";
	} else {
	
		gasto_real_modif=cpi_mod[5].subdimension[1].indicador[0].variable[0].valor;
	}
	
	if (gasto_estimado_modif>0){
		gasto_estimado_modif=parseFloat(gasto_estimado_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(gasto_estimado_modif,1);
		cpi_mod[5].subdimension[1].indicador[0].variable[1].valor=gasto_estimado_modif;
		cpi_mod[5].subdimension[1].indicador[0].variable[1].x="modificado";
	} else{
		
		gasto_estimado_modif=cpi_mod[5].subdimension[1].indicador[0].variable[1].valor;
	}
	}
	
	if (bandera==2) {
		gasto_real_modif=cpi_mod[5].subdimension[1].indicador[0].variable[0].valor;
		gasto_estimado_modif=cpi_mod[5].subdimension[1].indicador[0].variable[1].valor;
	}
	
		gasto_local=100*(gasto_real_modif/gasto_estimado_modif);	

		
	
	if (gasto_local==0 || gasto_local>=2*x){
		gasto_local_s=0;
	}
	
	if (gasto_local==x){
		gasto_local_s=100;
	}
	
	
	if (0<gasto_local && gasto_local<2*x){
		
		gasto_local_s=100*(1-Math.abs((gasto_local-x)/x));		
		}
	if (bandera==1){
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(gasto_local_s,1);
	}
	cpi_mod[5].subdimension[1].indicador[0].valor=gasto_local_s.toFixed(2);
	valor_sub=document.getElementById("sudimod1"+dime);
	promedio_capacidad=(parseFloat(cpi_mod[5].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[1].valor)+parseFloat(cpi_mod[5].subdimension[1].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_capacidad,1);
	cpi_mod[5].subdimension[1].valor=promedio_capacidad.toFixed(2);
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
	actualiza_ventanas();	

	
}


function inscrip_equitativa(dime, bandera) {// inscripción equitativa
	x=cpi[3].subdimension[2].indicador[0].variable[4].x;
	hombres_sec=cpi[3].subdimension[2].indicador[0].variable[0].valor;
	pobla_hombres=cpi[3].subdimension[2].indicador[0].variable[1].valor;
	mujeres_sec=cpi[3].subdimension[2].indicador[0].variable[2].valor;
	pobla_mujeres=cpi[3].subdimension[2].indicador[0].variable[3].valor;
	
	if (bandera==1) {
	hombres_sec_modif=document.getElementById("variable0"+dime).value;
	pobla_hombres_modif=document.getElementById("variable1"+dime).value;
	mujeres_sec_modif=document.getElementById("variable2"+dime).value;
	pobla_mujeres_modif=document.getElementById("variable3"+dime).value;
	
	
	if (hombres_sec_modif>=0 && hombres_sec_modif){
		hombres_sec_modif=parseFloat(hombres_sec_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(hombres_sec_modif,1);
		cpi_mod[3].subdimension[2].indicador[0].variable[0].valor=hombres_sec_modif;
		cpi_mod[3].subdimension[2].indicador[0].variable[0].x="modificado";
	} else {
	
		hombres_sec_modif=cpi_mod[3].subdimension[2].indicador[0].variable[0].valor;
	}
	
	if (pobla_hombres_modif>0){
		pobla_hombres_modif=parseFloat(pobla_hombres_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(pobla_hombres_modif);
		cpi_mod[3].subdimension[2].indicador[0].variable[1].valor=pobla_hombres_modif;
		cpi_mod[3].subdimension[2].indicador[0].variable[1].x="modificado";
	} else{
	
		pobla_hombres_modif=cpi_mod[3].subdimension[2].indicador[0].variable[1].valor;
	}
	
	if (mujeres_sec_modif>=0 && mujeres_sec_modif){
		mujeres_sec_modif=parseFloat(mujeres_sec_modif);
		valor=document.getElementById("vari_mod2"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(mujeres_sec_modif,1);
		cpi_mod[3].subdimension[2].indicador[0].variable[2].valor=mujeres_sec_modif;
		cpi_mod[3].subdimension[2].indicador[0].variable[2].x="modificado";
	} else {
		
		mujeres_sec_modif=cpi_mod[3].subdimension[2].indicador[0].variable[2].valor;
	}
	
	if (pobla_mujeres_modif>0){
		pobla_mujeres_modif=parseFloat(pobla_mujeres_modif);
		valor=document.getElementById("vari_mod3"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(pobla_mujeres_modif,1);
		cpi_mod[3].subdimension[2].indicador[0].variable[3].valor=pobla_mujeres_modif;
		cpi_mod[3].subdimension[2].indicador[0].variable[3].x="modificado";
	} else{
	
		pobla_mujeres_modif=cpi_mod[3].subdimension[2].indicador[0].variable[3].valor;
	}
	}
	
	if (bandera==2){
		hombres_sec_modif=cpi_mod[3].subdimension[2].indicador[0].variable[0].valor;
		pobla_hombres_modif=cpi_mod[3].subdimension[2].indicador[0].variable[1].valor;
		mujeres_sec_modif=cpi_mod[3].subdimension[2].indicador[0].variable[2].valor;
		pobla_mujeres_modif=cpi_mod[3].subdimension[2].indicador[0].variable[3].valor;
		
		}
	
		inscripcion_equi=((mujeres_sec_modif/pobla_mujeres_modif)/(hombres_sec_modif/pobla_hombres_modif));	

		
	
	if (inscripcion_equi==0 || inscripcion_equi==2*x){
		inscripcion_equi_s=0;
	}
	
	if (inscripcion_equi==x){
		inscripcion_equi_s=100;
	}
	
	
	if (0<inscripcion_equi && inscripcion_equi<2*x){
		
		inscripcion_equi_s=100*(1-Math.abs((inscripcion_equi-x)/x));		
		}
	if (bandera==1){
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(inscripcion_equi_s,1);
	}
	cpi_mod[3].subdimension[2].indicador[0].valor=inscripcion_equi_s.toFixed(2);
	valor_sub=document.getElementById("sudimod2"+dime);
	//promedio_capacidad=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(inscripcion_equi_s,1);
	cpi_mod[3].subdimension[2].valor=inscripcion_equi_s.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[3].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl4").innerHTML="Equidad e Inclusi&oacute;n Social (4)*";
	graficar(dime);	
	actualiza_ventanas();	
	
}


function anios_escolar(dime, bandera){ //promedio de años de escolaridad
	x=cpi[2].subdimension[1].indicador[1].variable[1].x;
	escolaridad=cpi[2].subdimension[1].indicador[1].variable[0].valor;
 if (bandera==1){	
		escolaridad_modif=document.getElementById("variable0"+dime).value;

		
		
		if (escolaridad_modif && escolaridad_modif>=0){		
			escolaridad_modif=parseFloat(escolaridad_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(escolaridad_modif,1);
			cpi_mod[2].subdimension[1].indicador[1].variable[0].valor=escolaridad_modif;
			cpi_mod[2].subdimension[1].indicador[1].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			escolaridad_modif=cpi_mod[2].subdimension[1].indicador[1].variable[0].valor;
		}
    }
	if (bandera==2){
		escolaridad_modif=cpi_mod[2].subdimension[1].indicador[1].variable[0].valor;
	
	}
		
			prom_escolaridad=escolaridad_modif;

		
		if (prom_escolaridad<0){
			prom_escolaridad_s=0;
		}
		
		if (prom_escolaridad>=x){
			prom_escolaridad_s=100;
		}
		
		
		if (0<=prom_escolaridad && prom_escolaridad<x){
			
			prom_escolaridad_s= 100*(1-Math.abs((prom_escolaridad-x)/x));		
				
			}
		 if (bandera==1){
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(prom_escolaridad_s,1);
		 }
		cpi_mod[2].subdimension[1].indicador[1].valor=prom_escolaridad_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_edu=(parseFloat(cpi_mod[2].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[1].indicador[1].valor))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_edu,1);
		cpi_mod[2].subdimension[1].valor=promedio_edu.toFixed(2);
		promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
		if (promedio){
		promedio=parseFloat(promedio);
		}
		valor_dime=document.getElementById("dim_mod"+dime);
		valor_dime.setAttribute("class","columna3");
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[1].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
		graficar(dime);	
		actualiza_ventanas();	
	}
	

function expancion_urb(dime, bandera){ //Expansion urbana
	
	min=cpi[5].subdimension[2].indicador[0].variable[2].min;
	max=cpi[5].subdimension[2].indicador[0].variable[2].max;
	tacarea_urba=cpi[5].subdimension[2].indicador[0].variable[0].valor;
	tacre_pobla=cpi[5].subdimension[2].indicador[0].variable[1].valor;

	if (bandera==1)
	{
		tacarea_urba_modif=document.getElementById("variable0"+dime).value;
		if (sup_urb_mun_modif==""){
		sup_urb_mun_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (tacarea_urba_modif && tacarea_urba_modif>=0){		
			tacarea_urba_modif=parseFloat(tacarea_urba_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(tacarea_urba_modif,1);
			cpi_mod[5].subdimension[2].indicador[0].variable[0].valor=tacarea_urba_modif;
			cpi_mod[5].subdimension[2].indicador[0].variable[0].x="modificado";
		} else {
	
			tacarea_urba_modif=cpi_mod[5].subdimension[2].indicador[0].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			tacre_pobla_modif=document.getElementById("variable1"+dime).value;
			tacre_pobla_modif=parseFloat(tacre_pobla_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(tacre_pobla_modif,1);
			cpi_mod[5].subdimension[2].indicador[0].variable[1].valor=tacre_pobla_modif;
			cpi_mod[5].subdimension[2].indicador[0].variable[1].x="modificado";
		
		} else{

			tacre_pobla_modif=cpi_mod[5].subdimension[2].indicador[0].variable[1].valor;
		}
		
	}
	if (bandera==2)
	{
		tacarea_urba_modif=cpi_mod[5].subdimension[2].indicador[0].variable[0].valor;
		tacre_pobla_modif=cpi_mod[5].subdimension[2].indicador[0].variable[1].valor;
	}
			expancion=Math.abs(tacarea_urba_modif/tacre_pobla_modif);	

		
			if (expancion>=max){
				expancion_s=0;
			}
			
			if (expancion==min){
				expancion_s=100;
			}
			
			
			if ( min<expancion && expancion<max){
				
				expancion_s=100*(1-((expancion-min)/(max-min)));		
				}
				
		if (bandera==1){	
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(expancion_s,1);
		}
		cpi_mod[5].subdimension[2].indicador[0].valor=expancion_s.toFixed(2);
		valor_sub=document.getElementById("sudimod2"+dime);
		//promedio_gu=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(expancion_s,1);
		cpi_mod[5].subdimension[2].valor=expancion_s.toFixed(2);
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
		actualiza_ventanas();	
				
	}


