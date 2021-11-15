// JavaScript Document 

//ecuaciones de la variable de Poblacion >= 15 anios 

var pobla_may_15_modif;

function relacion_dep_3_edad(dime,bandera) {// Relacion de dependencia de la tercera edad

	min=cpi[0].subdimension[1].indicador[0].variable[2].min;
	max=cpi[0].subdimension[1].indicador[0].variable[2].max;
	pobla_entre_15y64=cpi[0].subdimension[1].indicador[0].variable[1].valor;
	pobla_may_65=cpi[0].subdimension[1].indicador[0].variable[0].valor;


	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
	
	poblaentre_modif=document.getElementById("variable1"+dime).value;
	pobla_may_65_modif=document.getElementById("variable0"+dime).value;	
	
	
	if (pobla_may_65_modif && pobla_may_65_modif>=0){
		pobla_may_65_modif=parseFloat(pobla_may_65_modif);
		valor=document.getElementById("vari_mod0"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(pobla_may_65_modif,1);
		cpi_mod[0].subdimension[1].indicador[0].variable[0].valor=pobla_may_65_modif;
		cpi_mod[0].subdimension[1].indicador[0].variable[0].x="modificado";
	} else {
		
		pobla_may_65_modif=cpi_mod[0].subdimension[1].indicador[0].variable[0].valor;
			

	}
	
	if (poblaentre_modif && poblaentre_modif>0 ){
		poblaentre_modif=parseFloat(poblaentre_modif);
		valor=document.getElementById("vari_mod1"+dime);
		valor.setAttribute("class","columna33");
		valor.innerHTML=number_format(poblaentre_modif,1);
		cpi_mod[0].subdimension[1].indicador[0].variable[1].valor=poblaentre_modif;
		cpi_mod[0].subdimension[1].indicador[0].variable[1].x="modificado";
		//proceso2=1;
	} else{
		poblaentre_modif=cpi_mod[0].subdimension[1].indicador[0].variable[1].valor;
		

	}
	
	
		relacion_3edad=100*(pobla_may_65_modif/poblaentre_modif);
		relacion_3edad_ln=Math.log(relacion_3edad);
	
	if (relacion_3edad_ln>=Math.log(max)){
		relacion_3edad_s=0;
	}
	
	if (relacion_3edad_ln<=Math.log(min)){
		relacion_3eadad_s=100;
	}
	
	if(Math.log(min)<relacion_3edad_ln && relacion_3edad_ln<Math.log(max)){
	
		relacion_3edad_s=100*(1-(Math.log(relacion_3edad)-Math.log(min))/(Math.log(max)-Math.log(min)));		
	}	
	

	
	valor=document.getElementById("indica_mod0"+dime);
	valor.setAttribute("class","columna3");
	valor.innerHTML=number_format(relacion_3edad_s,1);
	cpi_mod[0].subdimension[1].indicador[0].valor=relacion_3edad_s.toFixed(2);
	valor_sub=document.getElementById("sudimod1"+dime);
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(relacion_3edad_s,1);
	cpi_mod[0].subdimension[1].valor=relacion_3edad_s.toFixed(2);
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
	//if (proceso2==1){
	//	cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=poblaentre_modif;
	//	cpi_mod[0].subdimension[3].indicador[1].variable[1].x="modificado";
	//	rel_emple_pobla(dime,2);

	//}
	
	}
	
	if (bandera==2){//viene de alguna otra llamada 
		
		pobla_may_65_modif=cpi_mod[0].subdimension[1].indicador[0].variable[0].valor;
		poblaentre_modif=cpi_mod[0].subdimension[1].indicador[0].variable[1].valor;
		
		relacion_3edad=100*(pobla_may_65_modif/poblaentre_modif);
		relacion_3edad_ln=Math.log(relacion_3edad);
	
	if (relacion_3edad_ln>=Math.log(max)){
		relacion_3edad_s=0;
	}
	
	if (relacion_3edad_ln<=Math.log(min)){
		relacion_3eadad_s=100;
	}
	
	if(Math.log(min)<relacion_3edad_ln && relacion_3edad_ln<Math.log(max)){
	
		relacion_3edad_s=100*(1-(Math.log(relacion_3edad)-Math.log(min))/(Math.log(max)-Math.log(min)));		
	}	
	cpi_mod[0].subdimension[1].indicador[0].valor=relacion_3edad_s.toFixed(2);
	valor_sub=document.getElementById("sudimod10");
	promedio_ce=relacion_3edad_s;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_ce,1);
	cpi_mod[0].subdimension[1].valor=promedio_ce.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod00").innerHTML)+parseFloat(document.getElementById("sudimod10").innerHTML)+parseFloat(document.getElementById("sudimod20").innerHTML)+parseFloat(document.getElementById("sudimod30").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod0");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
	graficar(0);
	}
	actualiza_ventanas();	
	
}

	
	function rel_emple_pobla(dime, bandera) {// Relacion Empleo Poblacion

	min=cpi[0].subdimension[3].indicador[1].variable[2].min;
	max=cpi[0].subdimension[3].indicador[1].variable[2].max;
	pobla_15_empleo=cpi[0].subdimension[3].indicador[1].variable[0].valor;
	pobla_may_15_mun=cpi[0].subdimension[3].indicador[1].variable[1].valor;



	if (bandera==1){//viene de la llamada principal
		
		proceso2=0;
		
		pobla_15_empleo_modif=document.getElementById("variable0"+dime).value;
		if (pobla_may_15_modif==""){
			pobla_may_15_modif=document.getElementById("variable1"+dime).value;	
		}
		
		if (pobla_15_empleo_modif && pobla_15_empleo_modif>=0){		
			pobla_15_empleo_modif=parseFloat(pobla_15_empleo_modif);
			valor=document.getElementById("vari_mod0"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(pobla_15_empleo_modif,1);
			cpi_mod[0].subdimension[3].indicador[1].variable[0].valor=leer_y_escri_modif;
			cpi_mod[0].subdimension[3].indicador[1].variable[0].x="modificado";
		} else {
	
			pobla_15_empleo_modif=cpi_mod[0].subdimension[3].indicador[1].variable[0].valor;
		}
		

			
			if (document.getElementById("variable1"+dime).value>0 && document.getElementById("variable1"+dime).value ){
				pobla_may_15_modif=document.getElementById("variable1"+dime).value;
				pobla_may_15_modif=parseFloat(pobla_may_15_modif);
			valor=document.getElementById("vari_mod1"+dime);
			valor.setAttribute("class","columna33");
			valor.innerHTML=number_format(pobla_may_15_modif,1);
			cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=pobla_may_15_modif;
			cpi_mod[0].subdimension[3].indicador[1].variable[1].x="modificado";
			proceso2=1;
		} else{

			pobla_may_15_modif=cpi_mod[0].subdimension[3].indicador[1].variable[1].valor;
		}
		
		
			rel_empl_pobla=100*(pobla_15_empleo_modif/pobla_may_15_modif);	

		
			if (rel_empl_pobla<=min){
				rel_empl_pobla_s=0;
			}
			
			if (rel_empl_pobla>=max){
				rel_empl_pobla_s=100;
			}
			
			
			if ( min<rel_empl_pobla && rel_empl_pobla<max){
				
				rel_empl_pobla_s=100*((rel_empl_pobla-min)/(max-min));		
				}
				
				
		valor=document.getElementById("indica_mod1"+dime);
		valor.setAttribute("class","columna3");
		valor.innerHTML=number_format(rel_empl_pobla_s,1);
		cpi_mod[0].subdimension[3].indicador[1].valor=rel_empl_pobla_s.toFixed(2);
		valor_sub=document.getElementById("sudimod3"+dime);
		promedio_em=(parseFloat(document.getElementById("indica_mod0"+dime).innerHTML)+parseFloat(document.getElementById("indica_mod1"+dime).innerHTML))/2;
		valor_sub.setAttribute("class","columna3");
		valor_sub.innerHTML=number_format(promedio_em,1);
		cpi_mod[0].subdimension[3].valor=promedio_em.toFixed(2);
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
		
		if (proceso2==1){
	
			cpi_mod[2].subdimension[1].indicador[0].variable[1].valor=pobla_may_15_modif;
			cpi_mod[2].subdimension[1].indicador[0].variable[1].x="modificado";
			tasa_alfa(dime,2);
	
		}
		
	}



	if (bandera==2){//viene de alguna otra llamada 
		pobla_15_empleo_modif=cpi_mod[0].subdimension[3].indicador[1].variable[0].valor;
		pobla_may_15_modif=cpi_mod[0].subdimension[3].indicador[1].variable[1].valor;
	
		
			rel_empl_pobla=100*(pobla_15_empleo_modif/pobla_may_15_modif);	

		
			if (rel_empl_pobla<=min){
				rel_empl_pobla_s=0;
			}
			
			if (rel_empl_pobla>=max){
				rel_empl_pobla_s=100;
			}
			
			
			if ( min<rel_empl_pobla && rel_empl_pobla<max){
				
				rel_empl_pobla_s=100*((rel_empl_pobla-min)/(max-min));		
				}


	cpi_mod[0].subdimension[3].indicador[1].valor=rel_empl_pobla_s.toFixed(2);

	valor_sub=document.getElementById("sudimod30");
	promedio_em=(parseFloat(cpi_mod[0].subdimension[3].indicador[0].valor)+parseFloat(cpi_mod[0].subdimension[3].indicador[1].valor))/2;
	valor_sub.setAttribute("class","columna3");
	valor_sub.innerHTML=number_format(promedio_em,1);
	cpi_mod[0].subdimension[3].valor=promedio_em.toFixed(2);
	promedio=(parseFloat(document.getElementById("sudimod00").innerHTML)+parseFloat(document.getElementById("sudimod10").innerHTML)+parseFloat(document.getElementById("sudimod20").innerHTML)+parseFloat(document.getElementById("sudimod30").innerHTML))/4;
	if (promedio){
	promedio=parseFloat(promedio);
	}
	valor_dime=document.getElementById("dim_mod0");
	valor_dime.setAttribute("class","columna3");
	valor_dime.innerHTML=number_format(promedio,1);
	cpi_mod[0].valor=promedio;
	calcular_CPI();
	tab=document.getElementById("lbl1").innerHTML="Productividad (1)*";
	graficar(0);
	
	//subDimensiones(3);

	}
	actualiza_ventanas();	

	}
	