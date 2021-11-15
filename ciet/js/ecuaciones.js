// JavaScript Document
// Ecuaciones con la variable Población
var poblacion_modif;
var vacb_modif;
var poblaentre_modif;
var pobla_may_65_modif;
var sup_urb_munc_modif;
var densi_medicos_s;


function calcular_CPI(){ //calcula en valor general del CPI
	
	cpi_modificado= (parseFloat(valor_dime=document.getElementById("dim_mod0").innerHTML)+parseFloat(valor_dime=document.getElementById("dim_mod1").innerHTML)+parseFloat(valor_dime=document.getElementById("dim_mod2").innerHTML)+parseFloat(valor_dime=document.getElementById("dim_mod3").innerHTML)+parseFloat(valor_dime=document.getElementById("dim_mod4").innerHTML)+parseFloat(valor_dime=document.getElementById("dim_mod5").innerHTML))/6;
	valor_cpi=document.getElementById("cpi_mod1");
	valor_cpi.setAttribute("class","columna3");
	valor_cpi.innerHTML=number_format(cpi_modificado,1);
	
}

function producto_urb_per_capita(dime, bandera) { //producto interno bruto
	var proceso1=0;
	var proceso2=0;
	
	min=cpi[0].subdimension[0].indicador[0].variable[2].min;
	max=cpi[0].subdimension[0].indicador[0].variable[2].max;
	otro=cpi[0].subdimension[0].indicador[0].variable[2].otro;
	poblacion=cpi[0].subdimension[0].indicador[0].variable[1].valor;
	vacb=cpi[0].subdimension[0].indicador[0].variable[0].valor;

	if (bandera==1){
	
	poblacion_modif=document.getElementById("variable1"+dime).value;
	vacb_modif=document.getElementById("variable0"+dime).value;	
	
	
	if (poblacion_modif && poblacion_modif>0 ){
		poblacion_modif=parseFloat(poblacion_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(poblacion_modif,1);
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		proceso2=2;
	} else {
		poblacion_modif=cpi_mod[0].subdimension[0].indicador[0].variable[1].valor;
		//poblacion_modif=parseFloat(document.getElementById("vari_mod1"+dime).innerHTML);
	}
	
	if (vacb_modif && vacb_modif>=0){
		vacb_modif=parseFloat(vacb_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(vacb_modif,1);
		cpi_mod[0].subdimension[0].indicador[0].variable[0].valor=vacb_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[0].x="modificado";
		proceso1=1;
	} else{
		vacb_modif=cpi_mod[0].subdimension[0].indicador[0].variable[0].valor;
		//vacb_modif=parseFloat(document.getElementById("vari_mod0"+dime).innerHTML);		
	}
	
	X=(vacb_modif*1000000/poblacion_modif)/otro;
	


		
	if (Math.log(X)<= Math.log(min)){
		pp=0;		
	}
	
	if (Math.log(X)>= Math.log(max)){
		pp=100;		
	}
	
	if (Math.log(min)<Math.log(X) && Math.log(X)<Math.log(max)){
		pp=100*((Math.log(X)-Math.log(min))/(Math.log(max)-Math.log(min)));
		
	}
	
	
	
	if (proceso1==1){
		cpi_mod[0].subdimension[2].indicador[0].variable[0].valor=vacb_modif;
		cpi_mod[0].subdimension[2].indicador[0].variable[0].x="modificado";
		densidad_economica(dime,2);	
	}
	if (proceso2==2){
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
	
		
	}
		
	valor=document.getElementById("indica_mod0"+dime);
	
	//valor.setAttribute("class","columna2");
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(pp,1);
	cpi_mod[0].subdimension[0].indicador[0].valor=pp.toFixed(2);
	valor_sub=document.getElementById("sudimod0"+dime);
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(pp,1);
	cpi_mod[0].subdimension[0].valor=pp.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
	graficar(dime);
	
	}
	
	if (bandera==2){
		
		vacb_modif=cpi_mod[0].subdimension[0].indicador[0].variable[0].valor;
		poblacion_modif=cpi_mod[0].subdimension[0].indicador[0].variable[1].valor;
		
		X=(vacb_modif*1000000/poblacion_modif)/otro;

	
	
	if (Math.log(X)<= Math.log(min)){
		pp=0;		
	}
	
	if (Math.log(X)>= Math.log(max)){
		pp=100;		
	}
	
	if (Math.log(min)<Math.log(X) && Math.log(X)<Math.log(max)){
		pp=100*((Math.log(X)-Math.log(min))/(Math.log(max)-Math.log(min)));
		
	}
	
	
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=pp.toFixed(2);
	cpi_mod[0].subdimension[0].indicador[0].valor=pp.toFixed(2);
	valor_sub=document.getElementById("sudimod00");
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(pp,1);
	cpi_mod[0].subdimension[0].valor=pp.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod00").innerHTML)+parseFloat(document.getElementById("sudimod10").innerHTML)+parseFloat(document.getElementById("sudimod20").innerHTML)+parseFloat(document.getElementById("sudimod30").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio.toFixed(2);
	calcular_CPI();
	graficar(0);
	tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
	
	
	
		
		
	}
	
actualiza_ventanas();	
	
}


function Densidad_Medicos(dime,bandera){ //densidad de medicos
	
	
	
	min=cpi[1].subdimension[1].indicador[0].variable[2].min;
	max=cpi[1].subdimension[1].indicador[0].variable[2].max;
	Num_medicos=cpi[1].subdimension[1].indicador[0].variable[0].valor;
	poblacion=cpi[1].subdimension[1].indicador[0].variable[1].valor;
	
	
	
	if (bandera==1){//viene de la llamada principal
		
		var proceso1=0;
		var proceso2=0;
		
		Num_medicos_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		
		if (Num_medicos_modif && Num_medicos_modif>=0){		
			Num_medicos_modif=parseFloat(Num_medicos_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(Num_medicos_modif,1);
			cpi_mod[1].subdimension[1].indicador[0].variable[0].valor=Num_medicos_modif;
			cpi_mod[1].subdimension[1].indicador[0].variable[0].x="modificado";
		} else {

			Num_medicos_modif=cpi_mod[1].subdimension[1].indicador[0].variable[0].valor;
			
		}
		

			
			if (document.getElementById("variable1"+dime).value>=0 && document.getElementById("variable1"+dime).value ){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
			cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{

			poblacion_modif=cpi_mod[1].subdimension[1].indicador[0].variable[1].valor;
			
		}
		
		
			densi_medicos=1000*(Num_medicos_modif/poblacion_modif);	

		
		if (Math.sqrt(densi_medicos)<=Math.sqrt(min)){
			densi_medicos_s=0;
		}
		
		if (Math.sqrt(densi_medicos)>=Math.sqrt(max)){
			densi_medicos_s=100;
		}
		
		
		if (Math.sqrt(min)<Math.sqrt(densi_medicos) && Math.sqrt(densi_medicos)<Math.sqrt(max)){
			
			densi_medicos_s= 100*((Math.sqrt(densi_medicos)-Math.sqrt(min))/(Math.sqrt(max)-Math.sqrt(min)));		
				
			}
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(densi_medicos_s,1);
		cpi_mod[1].subdimension[1].indicador[0].valor=densi_medicos_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		//promedio_is=(rel_emp_pobla_s+parseFloat(document.getElementById("indica_mod0"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(densi_medicos_s,1);
		cpi_mod[1].subdimension[1].valor=densi_medicos_s.toFixed(2);
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
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificar";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificar";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificar";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
	}
	
	
	
	if (bandera==2){//viene de alguna otra llamada 
	
		Num_medicos_modif=cpi_mod[1].subdimension[1].indicador[0].variable[0].valor;
		poblacion_modif=cpi_mod[1].subdimension[1].indicador[0].variable[1].valor;
				densi_medicos=1000*(Num_medicos_modif/poblacion_modif);	
			
			
			if (Math.sqrt(densi_medicos)<=Math.sqrt(min)){
				densi_medicos_s=0;
			}
			
			if (Math.sqrt(densi_medicos)>=Math.sqrt(max)){
				densi_medicos_s=100;
			}
			
			
			if (Math.sqrt(min)<Math.sqrt(densi_medicos) && Math.sqrt(densi_medicos)<Math.sqrt(max)){
				
				densi_medicos_s= 100*((Math.sqrt(densi_medicos)-Math.sqrt(min))/(Math.sqrt(max)-Math.sqrt(min)));		
					
				}
			
	
	
	cpi_mod[1].subdimension[1].indicador[0].valor=densi_medicos_s.toFixed(2);
	//infra_social= 100*(Math.sqrt(Num_medicos*1000/poblacion_modif)-Math.sqrt(min)/Math.sqrt(max)-Math.sqrt(min));
	valor_dime=document.getElementById("sudimod11");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(densi_medicos_s,1);
	cpi_mod[1].subdimension[1].valor=densi_medicos_s.toFixed(2);
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
	}
	
	actualiza_ventanas();	
	
	
	}



function densidad_economica(dime,bandera){ // densidad economica
	
	X_ref=cpi[0].subdimension[2].indicador[0].variable[2].x;
	otro=cpi[0].subdimension[2].indicador[0].variable[2].otro;
	vacb=cpi[0].subdimension[2].indicador[0].variable[0].valor;
	sup_urb_munc=cpi[0].subdimension[2].indicador[0].variable[1].valor;	
	
	proceso1=0;
	proceso2=0;
	
	if (bandera==1){//viene de la llamada principal
		
		
		vacb_modif=document.getElementById("variable0"+dime).value;
		if (sup_urb_munc_modif==""){
			sup_urb_munc_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (vacb_modif && vacb_modif>=0){		
			vacb_modif=parseFloat(vacb_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(vacb_modif,1);			
			cpi_mod[0].subdimension[2].indicador[0].variable[0].valor=vacb_modif;
			cpi_mod[0].subdimension[2].indicador[0].variable[0].x="modificado";
			proceso1=1;
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			vacb_modif=cpi_mod[0].subdimension[2].indicador[0].variable[0].valor;
			
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				sup_urb_munc_modif=document.getElementById("variable1"+dime).value;
				sup_urb_munc_modif=parseFloat(sup_urb_munc_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(sup_urb_munc_modif,1);
			cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=sup_urb_munc_modif;
			cpi_mod[0].subdimension[2].indicador[0].variable[1].x="modificado";
			proceso2=1
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			sup_urb_munc_modif=cpi_mod[0].subdimension[2].indicador[0].variable[1].valor;
			
		}
		
		
			densi_economica= (vacb_modif/sup_urb_munc_modif);
				
			
			if (densi_economica<0){
				densi_economica_s=0;
			}
			
			if (densi_economica>=X_ref){
				densi_economica_s=100;
			}
			
			if(0<=densi_economica && densi_economica<X_ref){		
				densi_economica_s=(100*(1-Math.abs(((densi_economica/otro)-X_ref)/X_ref)))*1000000;		
			}
			
			valor=document.getElementById("indica_mod0"+dime);
			valor.setAttribute("class","columna3");
			valor.innerHTML=number_format(densi_economica_s,1);
			cpi_mod[0].subdimension[2].indicador[0].valor=densi_economica_s.toFixed(2);
			valor_sub=document.getElementById("sudimod2"+dime);
			//promedio_ep=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
			valor_sub.setAttribute("class","columna3");
			valor_sub.innerHTML=number_format(densi_economica_s,1);
			cpi_mod[0].subdimension[2].valor=densi_economica_s.toFixed(2);
			promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML))/4;
			if (promedio){
			promedio=parseFloat(promedio);
			}
			valor_dime=document.getElementById("dim_mod"+dime);
			valor_dime.setAttribute("class","columna3");
			valor_dime.innerHTML=number_format(promedio,1);
			cpi_mod[0].valor=promedio.toFixed(2);
			calcular_CPI();
			tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
			graficar(dime);	
			
			if (proceso1==1){
			cpi_mod[0].subdimension[0].indicador[0].variable[0].valor=vacb_modif;
			cpi_mod[0].subdimension[0].indicador[0].variable[0].x="modificado";
			producto_urb_per_capita(dime, 2);
			}
		
			if (proceso2==1){
				cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=sup_urb_munc_modif;
				cpi_mod[1].subdimension[0].indicador[3].variable[1].x="modificado";
				densidad_poblacional(dime,2);
				
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
				
				//densidad_economica
				//densidad_poblacion
				//densidad_inter
				//densidad_vial
				//superficie_vias
				//accesibiliad_ep
				
				//producto_urb_per_capita(dime, 2);
				}
			
		
	}
	
		
	if (bandera==2){//viene de la llamada con vacb de otra llamada
		
		vacb_modif=cpi_mod[0].subdimension[2].indicador[0].variable[0].valor;
		sup_urb_munc_modif=cpi_mod[0].subdimension[2].indicador[0].variable[1].valor;
	
		densi_economica= vacb_modif/sup_urb_munc_modif;
		
		if (densi_economica<0){
			densi_economica_s=0;
		}
		
		if (densi_economica>=X_ref){
			densi_economica_s=100;
		}
		
		if(0<=densi_economica && densi_economica<X_ref){		
			densi_economica_s=(100*(1-Math.abs(((densi_economica/otro)-X_ref)/X_ref)))*1000000;			
		}
	
	
	cpi_mod[0].subdimension[2].indicador[0].valor=densi_economica_s.toFixed(2);
	valor_sub=document.getElementById("sudimod20");
	//promedio_ep=(parseFloat(cpi_mod[2].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[2].subdimension[3].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(densi_economica_s,1);
	cpi_mod[0].subdimension[2].valor=densi_economica_s.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod00").innerHTML)+parseFloat(document.getElementById("sudimod10").innerHTML)+parseFloat(document.getElementById("sudimod20").innerHTML)+parseFloat(document.getElementById("sudimod30").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod0");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
	graficar(0);
	
	
	
}
	
actualiza_ventanas();	

}



function acceso_a_internet(dime,bandera){ //viviendas con acceso a internet
	
	min=cpi[1].subdimension[2].indicador[0].variable[2].min;
	max=cpi[1].subdimension[2].indicador[0].variable[2].max;
	viviendas_inter=cpi[1].subdimension[2].indicador[0].variable[0].valor;
	poblacion=cpi[1].subdimension[2].indicador[0].variable[1].valor;

	
	
	
	if (bandera==1){//viene de la llamada principal
		proceso1=0;
		proceso2=0;		
		viviendas_inter_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (viviendas_inter_modif && viviendas_inter_modif>=0){		
			viviendas_inter_modif=parseFloat(viviendas_inter_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(viviendas_inter_modif,1);
			cpi_mod[1].subdimension[2].indicador[0].variable[0].valor=viviendas_inter_modif;
			cpi_mod[1].subdimension[2].indicador[0].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=viviendas_inter;
			//viviendas_inter_modif=viviendas_inter;
			viviendas_inter_modif=cpi_mod[1].subdimension[2].indicador[0].variable[0].valor;
			
		}
		
		//if (poblacion_modif>0){
			
			if (document.getElementById("variable1"+dime).value>=0 && document.getElementById("variable1"+dime).value){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
			cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			poblacion_modif=cpi_mod[1].subdimension[2].indicador[0].variable[1].valor;
			
		}
		
		
			acceso_internet=100*(viviendas_inter_modif/poblacion_modif);	

		
		if (acceso_internet<=min){
			acceso_internet_s=0;
		}
		
		if (acceso_internet>=max){
			acceso_internet_s=100;
		}
		
		
		if (min<acceso_internet && acceso_internet<max){
			
			acceso_internet_s=acceso_internet;		
				
			}
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(acceso_internet_s,1);
		cpi_mod[1].subdimension[2].indicador[0].valor=acceso_internet_s.toFixed(2);
		valor_sub=document.getElementById("sudimod2"+dime);
		promedio_ic=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ic,1);
		cpi_mod[1].subdimension[2].valor=promedio_ic.toFixed(2);
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

		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);

		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
	}
	
	
	
	if (bandera==2){//viene de alguna otra llamada 
	
	viviendas_inter_mod=cpi_mod[1].subdimension[2].indicador[0].variable[0].valor;
	poblacion_modif=cpi_mod[1].subdimension[2].indicador[0].variable[1].valor;
	acceso_internet=100*(viviendas_inter_mod/poblacion_modif);	

	
	if (acceso_internet<=min){
		acceso_internet_s=0;
	}
	
	if (acceso_internet>=max){
		acceso_internet_s=100;
	}
	
	
	if (min<acceso_internet && acceso_internet<max){
		
		acceso_internet_s=acceso_internet;		
			
		}
			
	
	
	cpi_mod[1].subdimension[2].indicador[0].valor=acceso_internet_s.toFixed(2);

	valor_sub=document.getElementById("sudimod21");
	promedio_ic=(parseFloat(cpi_mod[1].subdimension[2].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[2].indicador[1].valor))/2;
	valor_sub.innerHTML=number_format(promedio_ic,1);
	cpi_mod[1].subdimension[2].valor=promedio_ic.toFixed(2);

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
	}
	actualiza_ventanas();	
	}

function fatalidades_transito(dime, bandera){ //fatalidades de transito
min=cpi[1].subdimension[3].indicador[1].variable[2].min;
max=cpi[1].subdimension[3].indicador[1].variable[2].max;
Num_fatalidades=cpi[1].subdimension[3].indicador[1].variable[0].valor;
poblacion=cpi[1].subdimension[3].indicador[1].variable[1].valor;



if (bandera==1){//viene de la llamada principal
	
	proceso1=0;
	proceso2=0;
	
	Num_fatalidades_modif=document.getElementById("variable0"+dime).value;
	if (poblacion_modif==""){
	poblacion_modif=document.getElementById("variable1"+dime).value;	
	}
	
	if (Num_fatalidades_modif && Num_fatalidades_modif>=0){		
		Num_fatalidades_modif=parseFloat(Num_fatalidades_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(Num_fatalidades_modif,1);
		cpi_mod[1].subdimension[3].indicador[1].variable[0].valor=Num_fatalidades_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[0].x="modificado";
	} else {
		//valor=document.getElementById("vari_mod0"+dime);
		//valor.innerHTML=Num_medicos;
		//Num_medicos_modif=Num_medicos;
		Num_fatalidades_modif=cpi_mod[1].subdimension[3].indicador[1].variable[0].valor;
		
	}
	
	//if (poblacion_modif>0){
		
		if (document.getElementById("variable1"+dime).value>=0 && document.getElementById("variable1"+dime).value ){
		poblacion_modif=document.getElementById("variable1"+dime).value;
		poblacion_modif=parseFloat(poblacion_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(poblacion_modif,1);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		proceso2=1;
	} else{
		//valor=document.getElementById("vari_mod1"+dime);
		//valor.innerHTML=poblacion;
		//poblacion_modif=poblacion;
		poblacion_modif=cpi_mod[1].subdimension[3].indicador[1].variable[1].valor;
		
	}
	
	
		fatalidades=100000*(Num_fatalidades_modif/poblacion_modif);	

	
	if (fatalidades>=max){
		fatalidades_s=0;
	}
	
	if (fatalidades<=min){
		fatalidades_s=100;
	}
	
	
	if (min<fatalidades && fatalidades<max){
		
		fatalidades_s= 100*(1-((fatalidades-min)/(max-min)));		
			
		}
	valor=document.getElementById("indica_mod1"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(fatalidades_s,1);
	cpi_mod[1].subdimension[3].indicador[1].valor=fatalidades_s.toFixed(2);
	valor_sub=document.getElementById("sudimod3"+dime);
	promedio_mu=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_mu,1);
	cpi_mod[1].subdimension[3].valor=promedio_mu.toFixed(2);
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
	cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
	producto_urb_per_capita(dime, 2);
	cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
	Densidad_Medicos(dime,2);
	cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
	acceso_a_internet(dime,2);
	
	
	//Vehiculos_Transporte_Publico_Habitante(dime);		
	//Promedio_Anios_Escolaridad(dime);
	cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
	tasa_homicidios(dime,2);
	cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
	cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
	areas_verdes_per(dime,2);
	cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
	cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
	tasa_pobreza(dime,2);
	cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
	viviendas_tug(dime, 2);
	cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
	cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
	transporte_mas(dime, 2);
	}
	
	
	
}



if (bandera==2){//viene de alguna otra llamada 
	
	Num_fatalidades_modif=cpi_mod[1].subdimension[3].indicador[1].variable[0].valor;
	poblacion_modif=cpi_mod[1].subdimension[3].indicador[1].variable[1].valor;

	fatalidades=100000*(Num_fatalidades_modif/poblacion_modif);	

	
	if (fatalidades>=max){
		fatalidades_s=0;
	}
	
	if (fatalidades<=min){
		fatalidades_s=100;
	}
	
	
	if (min<fatalidades && fatalidades<max){
		
		fatalidades_s= 100*(1-((fatalidades-min)/(max-min)));		
			
		}
		


cpi_mod[1].subdimension[3].indicador[1].valor=fatalidades_s.toFixed(2);

valor_sub=document.getElementById("sudimod31");
promedio_mu=(parseFloat(cpi_mod[1].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[3].indicador[1].valor))/2;
valor_sub.setAttribute("class","columna3");
valor_sub.innerHTML=number_format(promedio_mu,1);
cpi_mod[1].subdimension[3].valor=promedio_mu.toFixed(2);
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

}
actualiza_ventanas();	
}

function tasa_homicidios(dime, bandera){ //tasa de homicidios 
	min=cpi[2].subdimension[2].indicador[0].variable[2].min;
	max=cpi[2].subdimension[2].indicador[0].variable[2].max;
	Num_homicidios=cpi[2].subdimension[2].indicador[0].variable[0].valor;
	poblacion=cpi[2].subdimension[2].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		proceso1=0;
		proceso2=0;
		
		Num_homicidios_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (Num_homicidios_modif && Num_homicidios_modif>=0){		
			Num_homicidios_modif=parseFloat(Num_homicidios_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(Num_homicidios_modif,1);
			cpi_mod[2].subdimension[2].indicador[0].variable[0].valor=Num_homicidios_modif;
			cpi_mod[2].subdimension[2].indicador[0].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			Num_homicidios_modif=cpi_mod[2].subdimension[2].indicador[0].variable[0].valor;
			
		}
		
		//if (poblacion_modif>0){
			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
			cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			poblacion_modif=cpi_mod[2].subdimension[2].indicador[0].variable[1].valor;
			
		}
		
		
			tasa_hom=100000*(Num_homicidios_modif/poblacion_modif);	

		
		if (Math.log(tasa_hom)>=Math.log(max)){
			tasa_hom_s=0;
		}
		
		if (Math.log(tasa_hom)<=Math.log(min)){
			tasa_hom_s=100;
		}
		
		
		if (Math.log(min)<Math.log(tasa_hom) && Math.log(tasa_hom)<Math.log(max)){
			
			tasa_hom_s= 100*(1-((Math.log(tasa_hom)-Math.log(min))/(Math.log(max)-Math.log(min))));		
				
			}
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(tasa_hom_s,1);
		cpi_mod[2].subdimension[2].indicador[0].valor=tasa_hom_s.toFixed(2);
		valor_sub=document.getElementById("sudimod2"+dime);
		//promedio_syp=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod2"+dime).innerHTML))/3;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(tasa_hom_s,1);
		cpi_mod[2].subdimension[2].valor=tasa_hom_s.toFixed(2);
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
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);

		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificada";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		Num_homicidios_modif=cpi_mod[2].subdimension[2].indicador[0].variable[0].valor;
		poblacion_modif=cpi_mod[2].subdimension[2].indicador[0].variable[1].valor;

		tasa_hom=100000*(Num_homicidios_modif/poblacion_modif);	

		
		if (Math.log(tasa_hom)>=Math.log(max)){
			tasa_hom_s=0;
		}
		
		if (Math.log(tasa_hom)<=Math.log(min)){
			tasa_hom_s=100;
		}
		
		
		if (Math.log(min)<Math.log(tasa_hom) && Math.log(tasa_hom)<Math.log(max)){
			
			tasa_hom_s= 100*(1-((Math.log(tasa_hom)-Math.log(min))/(Math.log(max)-Math.log(min))));		
				
			}
			


	cpi_mod[2].subdimension[2].indicador[0].valor=tasa_hom_s.toFixed(2);

	valor_sub=document.getElementById("sudimod22");
	//promedio_mu=(parseFloat(cpi_mod[1].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[3].indicador[1].valor)+parseFloat(cpi_mod[1].subdimension[3].indicador[2].valor))/3;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(tasa_hom_s,1);
	cpi_mod[2].subdimension[2].valor=tasa_hom_s.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod02").innerHTML)+parseFloat(document.getElementById("sudimod12").innerHTML)+parseFloat(document.getElementById("sudimod22").innerHTML)+parseFloat(document.getElementById("sudimod32").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod2");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[2].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
	graficar(2);

	}
		actualiza_ventanas();	
	}


function areas_verdes_per(dime, bandera){ //areas verdes per capita
	x=cpi[2].subdimension[3].indicador[1].variable[2].x;
	superficie=cpi[2].subdimension[3].indicador[1].variable[0].valor;
	poblacion=cpi[2].subdimension[3].indicador[1].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		proceso2=0;
		
		superficie_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (superficie_modif && superficie_modif>=0){		
			superficie_modif=parseFloat(superficie_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(superficie_modif,1);
			cpi_mod[2].subdimension[3].indicador[1].variable[0].valor=superficie_modif;
			cpi_mod[2].subdimension[3].indicador[1].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			superficie_modif=cpi_mod[2].subdimension[3].indicador[1].variable[0].valor;
			
		}
		
		//if (poblacion_modif>0){
			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
			cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
			proceso2=1;
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			poblacion_modif=cpi_mod[2].subdimension[3].indicador[1].variable[1].valor;
			
		}
		
		
			areas_verdes=1000000*(superficie_modif/poblacion_modif);	

		
		if (areas_verdes<0){
			areas_verdes_s=0;
		}
		
		if (areas_verdes>=x){
			areas_verdes_s=100;
		}
		
		
		if (0<=areas_verdes && areas_verdes<x){
			
			areas_verdes_s= 100*(1-Math.abs((areas_verdes-x)/x));		
				
			}
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(areas_verdes_s,1);
		cpi_mod[2].subdimension[3].indicador[1].valor=areas_verdes_s.toFixed(2);
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
		valor_dime.innerHTML=number_format(promedio,1);
		cpi_mod[2].valor=promedio.toFixed(2);
		calcular_CPI();
		tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
		graficar(dime);	
		
		if (proceso2==1){

		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);

		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		superficie_modif=cpi_mod[2].subdimension[3].indicador[1].variable[0].valor;
		poblacion_modif=cpi_mod[2].subdimension[3].indicador[1].variable[1].valor;

		areas_verdes=1000000*(superficie_modif/poblacion_modif);		

		
		if (areas_verdes<0){
			areas_verdes_s=0;
		}
		
		if (areas_verdes>=x){
			areas_verdes_s=100;
		}
		
		
		if (0<=areas_verdes && areas_verdes<x){
			
			areas_verdes_s= 100*(1-Math.abs((areas_verdes-x)/x));		
				
			}
			


	cpi_mod[2].subdimension[3].indicador[1].valor=areas_verdes_s.toFixed(2);

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
	cpi_mod[2].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl3").innerHTML="Calidad de Vida (3)*";
	graficar(2);

	}
		actualiza_ventanas();	
	}


function tasa_pobreza(dime, bandera){ //tasa de pobreza
	min=cpi[3].subdimension[0].indicador[1].variable[2].min;
	max=cpi[3].subdimension[0].indicador[1].variable[2].max;
	potencia=cpi[3].subdimension[0].indicador[1].variable[2].otro;
	poblacion_ingre_m=cpi[3].subdimension[0].indicador[1].variable[0].valor;
	poblacion=cpi[3].subdimension[0].indicador[1].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		proceso2=0;
		poblacion_ingre_m_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (poblacion_ingre_m_modif && poblacion_ingre_m_modif>=0){		
			poblacion_ingre_m_modif=parseFloat(poblacion_ingre_m_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_ingre_m_modif,1);
			cpi_mod[3].subdimension[0].indicador[1].variable[0].valor=poblacion_ingre_m_modif;
			cpi_mod[3].subdimension[0].indicador[1].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			poblacion_ingre_m_modif=cpi_mod[3].subdimension[0].indicador[1].variable[0].valor;
			
		}
		
		//if (poblacion_modif>0){
			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
			cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
			proceso2=1;
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			poblacion_modif=cpi_mod[3].subdimension[0].indicador[1].variable[1].valor;
			
		}
		
		
			tasa_pobre=100*(poblacion_ingre_m_modif/poblacion_modif);	

		
			if (Math.pow(tasa_pobre, potencia)>=Math.pow(max, potencia)){
				tasa_pobre_s=0;
			}
			
			if (Math.pow(tasa_pobre, potencia)<=Math.pow(min, potencia)){
				tasa_pobre_s=100;
			}
			
			
			if ( Math.pow(min, potencia)<Math.pow(tasa_pobre, potencia) && Math.pow(tasa_pobre, potencia)<Math.pow(max, potencia)){
				
				tasa_pobre_s=100*(1-(Math.pow(tasa_pobre, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
				}
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(tasa_pobre_s,1);
		cpi_mod[3].subdimension[0].indicador[1].valor=tasa_pobre_s.toFixed(2);
		valor_sub=document.getElementById("sudimod0"+dime);
		promedio_ee=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_ee,1);
		cpi_mod[3].subdimension[0].valor=promedio_ee.toFixed(2);
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
		if (proceso2==1){
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);

		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		poblacion_ingre_m_modif=cpi_mod[3].subdimension[0].indicador[1].variable[0].valor;
		poblacion_modif=cpi_mod[3].subdimension[0].indicador[1].variable[1].valor;
		tasa_pobre=100*(poblacion_ingre_m_modif/poblacion_modif);	

		
		if (Math.pow(tasa_pobre, potencia)>=Math.pow(max, potencia)){
			tasa_pobre_s=0;
		}
		
		if (Math.pow(tasa_pobre, potencia)<=Math.pow(min, potencia)){
			tasa_pobre_s=100;
		}
		
		
		if ( Math.pow(min, potencia)<Math.pow(tasa_pobre, potencia) && Math.pow(tasa_pobre, potencia)<Math.pow(max, potencia)){
			
			tasa_pobre_s=100*(1-(Math.pow(tasa_pobre, potencia)-Math.pow(min, potencia))/(Math.pow(max, potencia)-Math.pow(min, potencia)));		
			}


	cpi_mod[3].subdimension[0].indicador[1].valor=tasa_pobre_s.toFixed(2);

	valor_sub=document.getElementById("sudimod03");
	promedio_ee=(parseFloat(cpi_mod[3].subdimension[0].indicador[0].valor)+parseFloat(cpi_mod[3].subdimension[0].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ee,1);
	cpi_mod[3].subdimension[0].valor=promedio_ee.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod03").innerHTML)+parseFloat(document.getElementById("sudimod13").innerHTML)+parseFloat(document.getElementById("sudimod23").innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod3");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[3].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl4").innerHTML="Equidad e Inclusi&oacute;n Social (4)*";
	graficar(3);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}


function viviendas_tug(dime, bandera){ // viviendas en tugurios
	min=cpi[3].subdimension[1].indicador[0].variable[2].min;
	max=cpi[3].subdimension[1].indicador[0].variable[2].max;
	personas_hab=cpi[3].subdimension[1].indicador[0].variable[0].valor;
	poblacion=cpi[3].subdimension[1].indicador[0].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		proceso2=0;
		personas_hab_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (personas_hab_modif && personas_hab_modif>=0){		
			personas_hab_modif=parseFloat(personas_hab_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(personas_hab_modif,1);
			cpi_mod[3].subdimension[1].indicador[0].variable[0].valor=personas_hab_modif;
			cpi_mod[3].subdimension[1].indicador[0].variable[0].x="modificado";
		} else {
			//valor=document.getElementById("vari_mod0"+dime);
			//valor.innerHTML=Num_medicos;
			//Num_medicos_modif=Num_medicos;
			personas_hab_modif=cpi_mod[3].subdimension[1].indicador[0].variable[0].valor;
			
		}
		
		//if (poblacion_modif>0){
			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
			poblacion_modif=document.getElementById("variable1"+dime).value;
			poblacion_modif=parseFloat(poblacion_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(poblacion_modif,1);
			cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
			cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
			proceso2=1;
		} else{
			//valor=document.getElementById("vari_mod1"+dime);
			//valor.innerHTML=poblacion;
			//poblacion_modif=poblacion;
			poblacion_modif=cpi_mod[3].subdimension[1].indicador[0].variable[1].valor;
			
		}
		
		
			viv_tug=100*(personas_hab_modif/poblacion_modif);	

		
			if (viv_tug>=max){
				viv_tug_s=0;
			}
			
			if (viv_tug<=min){
				viv_tug_s=100;
			}
			
			
			if ( min<viv_tug && viv_tug<max){
				
				viv_tug_s=100*(1-(viv_tug-min)/(max-min));		
				}
		valor=document.getElementById("indica_mod0"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(viv_tug_s,1);
		cpi_mod[3].subdimension[1].indicador[0].valor=tasa_pobre_s.toFixed(2);
		valor_sub=document.getElementById("sudimod1"+dime);
		promedio_is=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_is,1);
		cpi_mod[3].subdimension[1].valor=promedio_is.toFixed(2);
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
		
		if(proceso2==1){
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x="modificado";
		transporte_mas(dime, 2);
		}
		
		
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		
		personas_hab_modif=cpi_mod[3].subdimension[1].indicador[0].variable[0].valor;
		poblacion_modif=cpi_mod[3].subdimension[1].indicador[0].variable[1].valor;
		viv_tug=100*(personas_hab_modif/poblacion_modif);	

		
		if (viv_tug>=max){
			viv_tug_s=0;
		}
		
		if (viv_tug<=min){
			viv_tug_s=100;
		}
		
		
		if ( min<viv_tug && viv_tug<max){
			
			viv_tug_s=100*(1-(viv_tug-min)/(max-min));		
			}


	cpi_mod[3].subdimension[1].indicador[0].valor=viv_tug_s.toFixed(2);

	valor_sub=document.getElementById("sudimod13");
	promedio_is=(parseFloat(cpi_mod[3].subdimension[1].indicador[0].valor)+parseFloat(cpi_mod[3].subdimension[1].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_is,1);
	cpi_mod[3].subdimension[1].valor=promedio_is.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod03").innerHTML)+parseFloat(document.getElementById("sudimod13").innerHTML)+parseFloat(document.getElementById("sudimod23").innerHTML))/3;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod3");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[3].valor=promedio.toFixed(2);
	calcular_CPI();
	tab=document.getElementById("lbl4").innerHTML="Equidad e Inclusi&oacute;n Social (4)*";
	graficar(3);
	
	//subDimensiones(3);

	}
		actualiza_ventanas();	
	}



function transporte_mas(dime, bandera) {// transporte masivo km

	x=cpi[1].subdimension[3].indicador[0].variable[2].x;
	transprte_km=cpi[1].subdimension[3].indicador[0].variable[0].valor;
	poblacion=cpi[1].subdimension[3].indicador[0].variable[1].valor;
	
	
	if (bandera==1){//viene de la llamada principal
		proceso2=0;
		transprte_km_modif=document.getElementById("variable0"+dime).value;
		if (poblacion_modif==""){
		poblacion_modif=document.getElementById("variable1"+dime).value;	
		}

	if (transprte_km_modif && transprte_km_modif>0){
		transprte_km_modif=parseFloat(transprte_km_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(transprte_km_modif,1);
		cpi_mod[1].subdimension[3].indicador[0].variable[0].valor=transprte_km_modif;
		cpi_mod[1].subdimension[3].indicador[0].variable[0].x="modificado";
	} else {
		//valor=document.getElementById("vari_mod0"+dime);
		//valor.innerHTML=transprte_km;
		transprte_km_modif=cpi_mod[1].subdimension[3].indicador[0].variable[0].valor;
		
	}
	
	if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
		poblacion_modif=document.getElementById("variable1"+dime).value;
		poblacion_modif=parseFloat(poblacion_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(poblacion_modif,1);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		proceso2=1;
	} else{
		//valor=document.getElementById("vari_mod1"+dime);
		//valor.innerHTML=poblacion;
		//poblacion_modif=poblacion;
		poblacion_modif=cpi_mod[3].subdimension[1].indicador[0].variable[1].valor;
		
	}
	
	
	
		
		transprte_km_cal=1000000*(transprte_km_modif/poblacion_modif);		

			
	
	if (transprte_km_cal<0){
		transprte_km_s=0;
	}
	
	if (transprte_km_cal>=x){
		transprte_km_s=100;
	}
	
	
	if (0<=transprte_km_cal && transprte_km_cal<x){
		
		transprte_km_s=100*(1-Math.abs((transprte_km_cal-x)/x));		
		}
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(transprte_km_s,1);
	cpi_mod[1].subdimension[3].indicador[0].valor=transprte_km_s.toFixed(2);
	valor_sub=document.getElementById("sudimod3"+dime);
	promedio_mov=(transprte_km_s+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_mov,1);
	cpi_mod[1].subdimension[3].valor=promedio_mov.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod0"+dime).innerHTML)+parseFloat(document.getElementById("sudimod1"+dime).innerHTML)+parseFloat(document.getElementById("sudimod2"+dime).innerHTML)+parseFloat(document.getElementById("sudimod3"+dime).innerHTML)+parseFloat(document.getElementById("sudimod4"+dime).innerHTML))/5;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod"+dime);
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[1].valor=promedio.toFixed(2);
	calcular_CPI();
	graficar(dime);	
	
	if(proceso2==1){
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x="modificado";
		producto_urb_per_capita(dime, 2);
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x="modificado";
		Densidad_Medicos(dime,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x="modificado";
		acceso_a_internet(dime,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x="modificado";
		fatalidades_transito(dime,2);
		
		//Vehiculos_Transporte_Publico_Habitante(dime);		
		//Promedio_Anios_Escolaridad(dime);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x="modificado";
		tasa_homicidios(dime,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x="modificado";
		areas_verdes_per(dime,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[0].indicador[1].variable[1].x="modificado";
		tasa_pobreza(dime,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=poblacion_modif;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x="modificado";
		viviendas_tug(dime, 2);
	
		
		
		
		}
	
	
	
  }
	

	if (bandera==2){//viene de alguna otra llamada 
		
		transprte_km_modif=cpi_mod[1].subdimension[3].indicador[0].variable[0].valor;
		poblacion_modif=cpi_mod[1].subdimension[3].indicador[0].variable[1].valor;
		

		
		transprte_km_cal=1000000*(transprte_km_modif/poblacion_modif);		

		
		
		if (transprte_km_cal<0){
			transprte_km_s=0;
		}
		
		if (transprte_km_cal>=x){
			transprte_km_s=100;
		}
		
		
		if (0<=transprte_km_cal && transprte_km_cal<x){
			
			transprte_km_s=100*(1-Math.abs((transprte_km_cal-x)/x));		
			}


	cpi_mod[1].subdimension[3].indicador[0].valor=transprte_km_s;

	valor_sub=document.getElementById("sudimod31");
	promedio_mu=(parseFloat(cpi_mod[1].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[1].subdimension[3].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_mu,1);
	cpi_mod[1].subdimension[3].valor=promedio_mu.toFixed(2);
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

