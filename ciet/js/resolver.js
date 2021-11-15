/**
 * 
 */

function resuelve(){
	
		var delayInMilliseconds = 5000; //1 second
		
		//elemento = document.getElementById("espere");
 		//elemento.style.display = "block";
		
		document.getElementById("bgventana").style.visibility="visible";
		vtit=document.getElementById("tit");
		vtit.innerHTML="";
		vdef=document.getElementById("definicion");
		vdef.innerHTML='<div style="width: 100%; high: 50%; text-align: center !important;"><img style="width: 60%;" src="imagenes/source.gif"></div>';
		

		setTimeout(function() {
		//*********************************** funcion resuelve
		anio_prono=parseInt(document.getElementById("a_pronos").options[ document.getElementById("a_pronos").selectedIndex ].value);
	if (anio_prono>=2016) // si no seleciona año limpiar variables
	{
		//document.getElementById("anio_variables").setAttribute("class","columna33");
		document.getElementById("anio_variables").innerHTML="Valores pronosticados al año "+anio_prono;
		document.getElementById("anio_variables2").innerHTML="Valores pronosticados al año "+anio_prono;
		document.getElementById("anio_variables3").innerHTML="Valores pronosticados al año "+anio_prono;
		document.getElementById("anio_variables4").innerHTML="Valores pronosticados al año "+anio_prono;
		document.getElementById("anio_variables5").innerHTML="Valores pronosticados al año "+anio_prono;
		document.getElementById("anio_variables6").innerHTML="Valores pronosticados al año "+anio_prono;
	}
	
	y1=document.getElementById("variable0000").value; // Indicadores a calcular para la variable Producto Interno Bruto

	
	formato=verifica_capturado("variable0000");
	cpi_mod[0].subdimension[0].indicador[0].variable[0].x=formato;
	cpi_mod[0].subdimension[2].indicador[0].variable[0].x=formato;
	
	y1 = y1.replace(/,/g, "");
	y1=Number(y1);
	if (y1 && y1>=0){
		cpi_mod[0].subdimension[0].indicador[0].variable[0].valor=y1;
		producto_urb_per_capita(0,2);
		cpi_mod[0].subdimension[2].indicador[0].variable[0].valor=y1;
		densidad_economica(0,2);	
	}
	
	
	
	y=document.getElementById("variable0001").value; // Indicadores a calcular para la variable Población
	formato=verifica_capturado("variable0001");

	y = y.replace(/,/g, "");
	y=Number(y);
	if (y && y>0){
		cpi_mod[0].subdimension[0].indicador[0].variable[1].valor=y;
		cpi_mod[0].subdimension[0].indicador[0].variable[1].x=formato;
		producto_urb_per_capita(0,2);		
		cpi_mod[1].subdimension[1].indicador[0].variable[1].valor=y;
		cpi_mod[1].subdimension[1].indicador[0].variable[1].x=formato;

		Densidad_Medicos(0,2);
		cpi_mod[1].subdimension[2].indicador[0].variable[1].valor=y;
		cpi_mod[1].subdimension[2].indicador[0].variable[1].x=formato;
		acceso_a_internet(0,2);
		cpi_mod[1].subdimension[3].indicador[1].variable[1].valor=y;
		cpi_mod[1].subdimension[3].indicador[1].variable[1].x=formato;
		fatalidades_transito(0,2);
		cpi_mod[2].subdimension[2].indicador[0].variable[1].valor=y;
		cpi_mod[2].subdimension[2].indicador[0].variable[1].x=formato;
		tasa_homicidios(0,2);
		cpi_mod[2].subdimension[3].indicador[1].variable[1].valor=y;
		cpi_mod[2].subdimension[3].indicador[1].variable[1].x=formato;
		areas_verdes_per(0,2);
		cpi_mod[3].subdimension[0].indicador[1].variable[1].valor=y;
		tasa_pobreza(0,2);
		cpi_mod[3].subdimension[1].indicador[0].variable[1].valor=y;
		cpi_mod[3].subdimension[1].indicador[0].variable[1].x=formato;
		viviendas_tug(0, 2);
		cpi_mod[1].subdimension[3].indicador[0].variable[1].valor=y;
		cpi_mod[1].subdimension[3].indicador[0].variable[1].x=formato;
		transporte_mas(0, 2);
	}
	
		
		y =cpi_mod[0].subdimension[0].indicador[0].variable[1].valor;
		

	y2=document.getElementById("variable0100").value; // Indicadores a calcular para la variable Población >=65 años
	formato=verifica_capturado("variable0100");
	y2 = y2.replace(/,/g, "");
	y2=Number(y2);
	if (y2>y)
	{ y2=y;
	   document.getElementById("variable0100").value=y;
	   cambiar_formato2("variable0100");
	}
	if (y2 && y2>=0){
		cpi_mod[0].subdimension[1].indicador[0].variable[0].valor=y2;
		cpi_mod[0].subdimension[1].indicador[0].variable[0].x=formato;
		relacion_dep_3_edad(0,2);
	}
	
	
	y3=document.getElementById("variable0101").value; // Indicadores a calcular para la variable Población entre 15 y 64 años
	formato=verifica_capturado("variable0101");
	y3 = y3.replace(/,/g, "");
	y3=Number(y3);
	if (y3>y)
	{ y3=y;
	  document.getElementById("variable0101").value=y;
	  cambiar_formato2("variable0101");}
	if (y3 && y3>0){
		cpi_mod[0].subdimension[1].indicador[0].variable[1].valor=y3;
		cpi_mod[0].subdimension[1].indicador[0].variable[1].x=formato;
		relacion_dep_3_edad(0,2);
		//cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=y3;
		//cpi_mod[0].subdimension[3].indicador[1].variable[1].x=formato;
		//rel_emple_pobla(0,2);
	}
	
	y4=document.getElementById("variable0200").value; // Indicadores a calcular para la variable Superficie urbana municipal
	formato=verifica_capturado("variable0200");
	y4 = y4.replace(/,/g, "");
	y4=Number(y4);
	if (y4 && y4>=0){
		cpi_mod[0].subdimension[2].indicador[0].variable[1].valor=y4;
		cpi_mod[0].subdimension[2].indicador[0].variable[1].x =formato;
		densidad_economica(0,2);	
		cpi_mod[1].subdimension[0].indicador[3].variable[1].valor=y4;
		cpi_mod[1].subdimension[0].indicador[3].variable[1].x=formato;
		densidad_poblacional(0,2);		
		cpi_mod[1].subdimension[4].indicador[0].variable[1].valor=y4;
		cpi_mod[1].subdimension[4].indicador[0].variable[1].x=formato;
		densidad_inter_vial(0,2);		
		cpi_mod[1].subdimension[4].indicador[1].variable[1].valor=y4;
		cpi_mod[1].subdimension[4].indicador[1].variable[1].x=formato;
		densidad_vial(0,2);		
		cpi_mod[1].subdimension[4].indicador[2].variable[1].valor=y4;
		cpi_mod[1].subdimension[4].indicador[2].variable[1].x=formato;
		super_des_vias(0,2);		
		cpi_mod[2].subdimension[3].indicador[0].variable[1].valor=y4;
		cpi_mod[2].subdimension[3].indicador[0].variable[1].x=formato;
		acce_espa_pub(0,2);
	}
	
	y5=document.getElementById("variable0300").value; // Indicadores a calcular para la variable Población >15 sin empleo
	formato=verifica_capturado("variable0300");
	y5 = y5.replace(/,/g, "");
	y5=Number(y5);
	if (y5>y)
	{ y5=y;
	  document.getElementById("variable0300").value=y;
	  cambiar_formato2("variable0300");}
	if (y5 && y5>=0){
		cpi_mod[0].subdimension[3].indicador[0].variable[0].valor=y5;
		cpi_mod[0].subdimension[3].indicador[0].variable[0].x=formato;
		tasa_desempleo(0,2);

	}
	
	y6=document.getElementById("variable0301").value; // Indicadores a calcular para la variable Población >15 economicamenteactiva
	formato=verifica_capturado("variable0301");
	y6 = y6.replace(/,/g, "");
	y6=Number(y6);
	if (y6>y)
	{ y6=y;
	document.getElementById("variable0301").value=y;
	cambiar_formato2("variable0301");}
	if (y6 && y6>0){
		cpi_mod[0].subdimension[3].indicador[0].variable[1].valor=y6;
		cpi_mod[0].subdimension[3].indicador[0].variable[1].x=formato;
		tasa_desempleo(0,2);

	}
	
	y7=document.getElementById("variable0310").value; // Indicadores a calcular para la variable Población >=15 con empleo
	formato=verifica_capturado("variable0310");
	y7 = y7.replace(/,/g, "");
	y7=Number(y7);
	if (y7>y)
	{ y7=y;
	  document.getElementById("variable0310").value=y;
	  cambiar_formato2("variable0310");}
	if (y7 && y7>0){
		cpi_mod[0].subdimension[3].indicador[1].variable[0].valor=y7;
		cpi_mod[0].subdimension[3].indicador[1].variable[0].x=formato;
		rel_emple_pobla(0,2);

	}
	
	y77=document.getElementById("variable0311").value; // Indicadores a calcular para la variable Población >=15 
	formato=verifica_capturado("variable0311");
	y77 = y77.replace(/,/g, "");
	y77=Number(y77);
	if (y77>y)
	{ y77=y;
	  document.getElementById("variable0311").value=y;
	  cambiar_formato2("variable0311");}
	if (y77 && y77>0){
		cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=y77;
		cpi_mod[0].subdimension[3].indicador[1].variable[1].x=formato;
		rel_emple_pobla(0,2);

	}
	
	
	y9=document.getElementById("variable1001").value; // Indicadores a calcular para la variable viviendas particulares habitadas
	formato=verifica_capturado("variable1001");
	y9 = y9.replace(/,/g, "");
	y9=Number(y9);
	if (y9 && y9>0){
		cpi_mod[1].subdimension[0].indicador[0].variable[1].valor=y9;
		cpi_mod[1].subdimension[0].indicador[0].variable[1].x=formato;
		vivienda_durable(0,2);
		cpi_mod[1].subdimension[0].indicador[1].variable[1].valor=y9;
		cpi_mod[1].subdimension[0].indicador[1].variable[1].x=formato;
		agua_mejorada(0,2);
		cpi_mod[1].subdimension[0].indicador[2].variable[1].valor=y9;
		cpi_mod[1].subdimension[0].indicador[2].variable[1].x=formato;
		espacio_habitable(0,2);
		cpi_mod[4].subdimension[1].indicador[0].variable[1].valor=y9;
		cpi_mod[4].subdimension[1].indicador[0].variable[1].x=formato;
		rec_residuos(0,2);
		
	}
	y9=cpi_mod[1].subdimension[0].indicador[0].variable[1].valor;
	
	y8=document.getElementById("variable1000").value; // Indicadores a calcular para la variable Viviendas particulares habitadas durables
	formato=verifica_capturado("variable1000");
	y8 = y8.replace(/,/g, "");
	y8=Number(y8);
	if (y8>y9)
	{ y8=y9;
	  document.getElementById("variable1000").value=y9;
	  cambiar_formato2("variable1000");}
	if (y8 && y8>=0){
		cpi_mod[1].subdimension[0].indicador[0].variable[0].valor=y8;
		cpi_mod[1].subdimension[0].indicador[0].variable[0].x=formato;
		vivienda_durable(0,2);

	}
	
	
	
	y10=document.getElementById("variable1010").value; // Indicadores a calcular para la variable viviendas con acceso a agua potable dentro o fuera del predio
	formato=verifica_capturado("variable1010");
	y10 = y10.replace(/,/g, "");
	y10=Number(y10);
	if (y10>y9)
	{ y10=y9;
	  document.getElementById("variable1010").value=y9;
	  cambiar_formato2("variable1010");}
	if (y10 && y10>=0){
		cpi_mod[1].subdimension[0].indicador[1].variable[0].valor=y10;
		cpi_mod[1].subdimension[0].indicador[1].variable[0].x=formato;
		agua_mejorada(0,2);

	}
	
	y11=document.getElementById("variable1020").value; // Indicadores a calcular para la variable viviendas con menos de  3 personas por habitación
	formato=verifica_capturado("variable1020");
	y11 = y11.replace(/,/g, "");
	y11=Number(y11);
	if (y11>y9)
	{ y11=y9;
	  document.getElementById("variable1020").value=y9;
	  
	  cambiar_formato2("variable1020");}
	if (y11 && y11>=0){
		cpi_mod[1].subdimension[0].indicador[2].variable[0].valor=y11;
		cpi_mod[1].subdimension[0].indicador[2].variable[0].x=formato;
		espacio_habitable(0,2);

	}
	
	y12=document.getElementById("variable1030").value; // Indicadores a calcular para la variable Población Urbana municipal
	formato=verifica_capturado("variable1030");
	y12 = y12.replace(/,/g, "");
	y12=Number(y12);
	if (y12>y)
	{ y12=y;
	  document.getElementById("variable1030").value=y;
	  cambiar_formato2("variable1030");}
	if (y12 && y12>=0){
		cpi_mod[1].subdimension[0].indicador[3].variable[0].valor=y12;
		cpi_mod[1].subdimension[0].indicador[3].variable[0].x=formato;
		densidad_poblacional(0,2);

	}
	
	y13=document.getElementById("variable1100").value; // Indicadores a calcular para la variable numero de medicos en el municipio
	formato=verifica_capturado("variable1100");
	y13 = y13.replace(/,/g, "");
	y13=Number(y13);
	if (y13 && y13>=0){
		cpi_mod[1].subdimension[1].indicador[0].variable[0].valor=y13;
		cpi_mod[1].subdimension[1].indicador[0].variable[0].x=formato;
		Densidad_Medicos(0,2);

	}
	
	y14=document.getElementById("variable1200").value; // Indicadores a calcular para la variable población en viviendas particulares con  acceso a internet
	formato=verifica_capturado("variable1200");
	y14 = y14.replace(/,/g, "");
	y14=Number(y14);
	if (y14>y)
	{ y14=y;
	  document.getElementById("variable1200").value=y;
	  cambiar_formato2("variable1200");}
	if (y14 && y14>=0){
		cpi_mod[1].subdimension[2].indicador[0].variable[0].valor=y14;
		cpi_mod[1].subdimension[2].indicador[0].variable[0].x=formato;
		acceso_a_internet(0,2);

	}
	
	y15=document.getElementById("variable1210").value; // Indicadores a calcular para la variable velocidad promedio Kbps en municipio
	formato=verifica_capturado("variable1210");
	y15 = y15.replace(/,/g, "");
	y15=Number(y15);
	if (y15 && y15>=0){
		cpi_mod[1].subdimension[2].indicador[1].variable[0].valor=y15;
		cpi_mod[1].subdimension[2].indicador[1].variable[0].x=formato;
		velocidad_banda_an(1,2);

	}
	
	y16=document.getElementById("variable1300").value; // Indicadores a calcular para la variable longuitud Km transporte masivo 
	formato=verifica_capturado("variable1300");
	y16 = y16.replace(/,/g, "");
	y16=Number(y16 );
	if (y16 && y16>=0){
		cpi_mod[1].subdimension[3].indicador[0].variable[0].valor=y16;
		cpi_mod[1].subdimension[3].indicador[0].variable[0].x=formato;
		transporte_mas(1, 2);
	}

	y17=document.getElementById("variable1310").value; // Indicadores a calcular para la variable numero anual de fatalidades de transito muertes
	formato=verifica_capturado("variable1310");
	y17 = y17.replace(/,/g, "");
	y17=Number(y17);
	if (y17>y)
	{ y17=y;
	  document.getElementById("variable1310").value=y;
	  cambiar_formato2("variable1310");}
	if (y17 && y17>=0){
		cpi_mod[1].subdimension[3].indicador[1].variable[0].valor=y17;
		cpi_mod[1].subdimension[3].indicador[1].variable[0].x=formato;
		fatalidades_transito(1,2);
	}
	
	y18=document.getElementById("variable1400").value; // Indicadores a calcular para la variable numero de intersecciónes viales existentes municipio 
	formato=verifica_capturado("variable1400");
	y18 = y18.replace(/,/g, "");
	y18=Number(y18);
	if (y18 && y18>=0){
		cpi_mod[1].subdimension[4].indicador[0].variable[0].valor=y18;
		cpi_mod[1].subdimension[4].indicador[0].variable[0].x=formato;
		densidad_inter_vial(1,2);		
	}
	
	y19=document.getElementById("variable1410").value; // Indicadores a calcular para la variable numero de kilometros vias urbanas
	formato=verifica_capturado("variable1410");
	y19 = y19.replace(/,/g, "");
	y19=Number(y19);
	if (y19 && y19>=0){
		cpi_mod[1].subdimension[4].indicador[1].variable[0].valor=y19;
		cpi_mod[1].subdimension[4].indicador[1].variable[0].x=formato;
		densidad_vial(1,2);		
	}
	
	y20=document.getElementById("variable1420").value; // Indicadores a calcular para la variable superficie de vialidades
	formato=verifica_capturado("variable1420");
	y20 = y20.replace(/,/g, "");
	y20=Number(y20);
	if (y20 && y20>=0){
		cpi_mod[1].subdimension[4].indicador[2].variable[0].valor=y20;
		cpi_mod[1].subdimension[4].indicador[2].variable[0].x=formato;
		super_des_vias(1,2);	
	}
	
	y21=document.getElementById("variable2000").value; // Indicadores a calcular para la variable esperanza de vida
	formato=verifica_capturado("variable2000");
	y21 = y21.replace(/,/g, "");
	y21=Number(y21);
	if (y21 && y21>=0){
		cpi_mod[2].subdimension[0].indicador[0].variable[0].valor=y21;
		cpi_mod[2].subdimension[0].indicador[0].variable[0].x=formato;
		esperanza_vida(2,2);	
	}
	
	y22=document.getElementById("variable2010").value; // Indicadores a calcular para la variable mortalidad infantil
	formato=verifica_capturado("variable2010");
	y22 = y22.replace(/,/g, "");
	y22=Number(y22);
	if (y22>y)
	{ y22=y;
	  document.getElementById("variable2010").value=y;
	  cambiar_formato2("variable2010");}
	if (y22 && y22>=0){
		cpi_mod[2].subdimension[0].indicador[1].variable[0].valor=y22;
		cpi_mod[2].subdimension[0].indicador[1].variable[0].x=formato;
		tasa_mortalidad(2,2);	
	}
	
	y23=document.getElementById("variable2011").value; // Indicadores a calcular para la variable nacidos vivos ocurridos
	formato=verifica_capturado("variable2011");
	y23 = y23.replace(/,/g, "");
	y23=Number(y23);
	if (y23 && y23>=0){
		cpi_mod[2].subdimension[0].indicador[1].variable[1].valor=y23;
		cpi_mod[2].subdimension[0].indicador[1].variable[1].x=formato;
		tasa_mortalidad(2,2);	
	}
	
	y24=document.getElementById("variable2100").value; // Indicadores a calcular para la variable población >=15 que puede leer y escribir 
	formato=verifica_capturado("variable2100");
	y24 = y24.replace(/,/g, "");
	y24=Number(y24);
	if (y24>y)
	{ y24=y;
	  document.getElementById("variable2100").value=y;
	  cambiar_formato2("variable2100");}
	if (y24 && y24>=0){
		cpi_mod[2].subdimension[1].indicador[0].variable[0].valor=y24;
		cpi_mod[2].subdimension[1].indicador[0].variable[0].x=formato;
		tasa_alfa(2,2);	
	}
	
	y25=document.getElementById("variable2101").value; // Indicadores a calcular para la variable población >=15
	formato=verifica_capturado("variable2101");
	y25 = y25.replace(/,/g, "");
	y25=Number(y25);
	if (y25>y)
	{ y25=y;
	  document.getElementById("variable2101").value=y;
	  cambiar_formato2("variable2101");}
	if (y25 && y25>=0){
		cpi_mod[2].subdimension[1].indicador[0].variable[1].valor=y25;
		cpi_mod[2].subdimension[1].indicador[0].variable[1].x=formato;
		tasa_alfa(2,2);	
		cpi_mod[0].subdimension[3].indicador[1].variable[1].valor=y3;
		cpi_mod[0].subdimension[3].indicador[1].variable[1].x=formato;
		rel_emple_pobla(0,2);
	}

	
	y26=document.getElementById("variable2110").value; // Indicadores a calcular para la variable años escolaridad poblacion de 25 años o mas
	formato=verifica_capturado("variable2110");
	y26 = y26.replace(/,/g, "");
	y26=Number(y26);
	if (y26 && y26>=0){
		cpi_mod[2].subdimension[1].indicador[1].variable[0].valor=y26;
		cpi_mod[2].subdimension[1].indicador[1].variable[0].x=formato;
		anios_escolar(2,2);	
	}

	y27=document.getElementById("variable2200").value; // Indicadores a calcular para la variable numero de homicidios
	formato=verifica_capturado("variable2200");
	y27 = y27.replace(/,/g, "");
	y27=Number(y27);
	if (y27 && y27>=0){
		cpi_mod[2].subdimension[2].indicador[0].variable[0].valor=y27;
		cpi_mod[2].subdimension[2].indicador[0].variable[0].x=formato;
		tasa_homicidios(2,2);
	}
	
	y28=document.getElementById("variable2300").value; // Indicadores a calcular para la variable area urbana 
	formato=verifica_capturado("variable2300");
	y28 = y28.replace(/,/g, "");
	y28=Number(y28);
	if (y28 && y28>=0){
		cpi_mod[2].subdimension[3].indicador[0].variable[0].valor=y28;
		cpi_mod[2].subdimension[3].indicador[0].variable[0].x=formato;
		acce_espa_pub(2,2);
	}
	
	y29=document.getElementById("variable2310").value; // // Indicadores a calcular para la variable superficie de area verde
	formato=verifica_capturado("variable2310");
	y29 = y29.replace(/,/g, "");
	y29=Number(y29);
	if (y29 && y29>=0){
		cpi_mod[2].subdimension[3].indicador[1].variable[0].valor=y29;
		cpi_mod[2].subdimension[3].indicador[1].variable[0].x=formato;
		areas_verdes_per(2,2);
	}
	
	y30=document.getElementById("variable3000").value; // Indicadores a calcular para la variable coeficiente de gini
	formato=verifica_capturado("variable3000");
	y30 = y30.replace(/,/g, "");
	y30=Number(y30);
	if (y30 && y30>=0){
		cpi_mod[3].subdimension[0].indicador[0].variable[0].valor=y30;
		cpi_mod[3].subdimension[0].indicador[0].variable[0].x=formato;
		coefieciente_gini(3,2);
	}
	
	y31=document.getElementById("variable3010").value; // Indicadores a calcular para la variable población pon ingresos inferior a 2.7 us
	formato=verifica_capturado("variable3010");
	y31 = y31.replace(/,/g, "");
	y31=Number(y31);
	if (y31>y)
	{ y31=y;
	  document.getElementById("variable3010").value=y;
	  cambiar_formato2("variable3010");}
	if (y31 && y31>=0){
		cpi_mod[3].subdimension[0].indicador[1].variable[0].valor=y31;
		cpi_mod[3].subdimension[0].indicador[1].variable[0].x=formato;
		tasa_pobreza(3,2);
	}
	
	y32=document.getElementById("variable3100").value; // Indicadores a calcular para la variable población en tugurio
	formato=verifica_capturado("variable3100");
	y32 = y32.replace(/,/g, "");
	y32=Number(y32);
	if (y32>y)
	{ y32=y;
	  document.getElementById("variable3100").value=y;
	  cambiar_formato2("variable3100");}
	if (y32 && y32>=0){
		cpi_mod[3].subdimension[1].indicador[0].variable[0].valor=y32;
		cpi_mod[3].subdimension[1].indicador[0].variable[0].x=formato;
		viviendas_tug(3,2);
	}
	
	y33=document.getElementById("variable3110").value; // Indicadores a calcular para la variable población entre 15 y 24 años desempleada 
	formato=verifica_capturado("variable3110");
	y33 = y33.replace(/,/g, "");
	y33=Number(y33);
	if (y33>y)
	{ y33=y;
	  document.getElementById("variable3110").value=y;
	  cambiar_formato2("variable3110");}
	if (y33 && y33>=0){
		cpi_mod[3].subdimension[1].indicador[1].variable[0].valor=y33;
		cpi_mod[3].subdimension[1].indicador[1].variable[0].x=formato;
		desempleojuvenil(3,2);
	}
	
	y34=document.getElementById("variable3111").value; // Indicadores a calcular para la variable población economicamenteactiva entre 15 y 24 años
	formato=verifica_capturado("variable3111");
	y34 = y34.replace(/,/g, "");
	y34=Number(y34);
	if (y34>y)
	{ y34=y;
	  document.getElementById("variable3111").value=y;
	  cambiar_formato2("variable3111");}
	if (y34 && y34>=0){
		cpi_mod[3].subdimension[1].indicador[1].variable[1].valor=y34;
		cpi_mod[3].subdimension[1].indicador[1].variable[1].x=formato;
		desempleojuvenil(3,2);
	}
	
	y35=document.getElementById("variable3200").value; // Indicadores a calcular para la variable población hombres entre 12 y 15 inscrita en secundaria
	formato=verifica_capturado("variable3200");
	y35 = y35.replace(/,/g, "");
	y35=Number(y35);
	if (y35>y)
	{ y35=y;
	  document.getElementById("variable3200").value=y;
	  cambiar_formato2("variable3200");}
	if (y35 && y35>=0){
		cpi_mod[3].subdimension[2].indicador[0].variable[0].valor=y35;
		cpi_mod[3].subdimension[2].indicador[0].variable[0].x=formato;
		inscrip_equitativa(3,2);
	}
	
	y36=document.getElementById("variable3201").value; // Indicadores a calcular para la variable población hombres entre 12 y 15 
	formato=verifica_capturado("variable3201");
	y36= y36.replace(/,/g, "");
	y36=Number(y36);
	if (y36>y)
	{ y36=y;
	  document.getElementById("variable3201").value=y;
	  cambiar_formato2("variable3201");}
	if (y36 && y36>0){
		cpi_mod[3].subdimension[2].indicador[0].variable[1].valor=y36;
		cpi_mod[3].subdimension[2].indicador[0].variable[1].x=formato;
		inscrip_equitativa(3,2);
	}
	
	y37=document.getElementById("variable3202").value; // Indicadores a calcular para la variable población mujeres entre 12 y 15 inscrita en secundaria 
	formato=verifica_capturado("variable3202");
	y37 = y37.replace(/,/g, "");
	y37=Number(y37);
	if (y37>y)
	{ y37=y;
	  document.getElementById("variable3202").value=y;
	  cambiar_formato2("variable3202");}
	if (y37 && y37>=0){
		cpi_mod[3].subdimension[2].indicador[0].variable[2].valor=y37;
		cpi_mod[3].subdimension[2].indicador[0].variable[2].x=formato;
		inscrip_equitativa(3,2);
	}
	
	y38=document.getElementById("variable3203").value; // Indicadores a calcular para la variable población mujeres entre 12 y 15 
	formato=verifica_capturado("variable3203");
	y38 = y38.replace(/,/g, "");
	y38=Number(y38);
	if (y38>y)
	{ y38=y;
	  document.getElementById("variable3203").value=y;
	  cambiar_formato2("variable3203");}
	if (y38 && y38>0){
		cpi_mod[3].subdimension[2].indicador[0].variable[3].valor=y38;
		cpi_mod[3].subdimension[2].indicador[0].variable[3].x=formato;
		inscrip_equitativa(3,2);
	}
	
	y39=document.getElementById("variable4000").value; // Indicadores a calcular para la variable numero de estaciones de monitoreo
	formato=verifica_capturado("variable4000");
	y39 = y39.replace(/,/g, "");
	y39=Number(y39);
	if (y39 && y39>=0){
		cpi_mod[4].subdimension[0].indicador[0].variable[0].valor=y39;
		cpi_mod[4].subdimension[0].indicador[0].variable[0].x=formato;
		estaciones_monito(4,2);
	}
	
	y40=document.getElementById("variable4010").value; // Indicadores a calcular para la variable concentracion media diaria anual de PM 2.5 
	formato=verifica_capturado("variable4010");
	y40 = y40.replace(/,/g, "");
	y40=Number(y40);
	if (y40 && y40>=0){
		cpi_mod[4].subdimension[0].indicador[1].variable[0].valor=y40;
		cpi_mod[4].subdimension[0].indicador[1].variable[0].x=formato;
		concentraciones_pm(4,2);
	}
	
	y41=document.getElementById("variable4020").value; // Indicadores a calcular para la variable toneladas de CO2 por habitante
	formato=verifica_capturado("variable4020");
	y41 = y41.replace(/,/g, "");
	y41=Number(y41);
	if (y41 && y41>=0){
		cpi_mod[4].subdimension[0].indicador[2].variable[0].valor=y41;
		cpi_mod[4].subdimension[0].indicador[2].variable[0].x=formato;
		concentraciones_co2(4,2);
	}
	
	y42=document.getElementById("variable4100").value; // Indicadores a calcular para la variable viviendas con recoleccion de residuos 
	formato=verifica_capturado("variable4100");
	y42 = y42.replace(/,/g, "");
	y42=Number(y42);
	if (y42>y9)
	{ y42=y9;
	  document.getElementById("variable4100").value=y9;
	  cambiar_formato2("variable4100");}
	if (y42 && y42>=0){
		cpi_mod[4].subdimension[1].indicador[0].variable[0].valor=y42;
		cpi_mod[4].subdimension[1].indicador[0].variable[0].x=formato;
		rec_residuos(4,2);
	}
	
	y43=document.getElementById("variable4110").value; // Indicadores a calcular para la variable  aguas residuales tratadas
	formato=verifica_capturado("variable4110");
	y43 = y43.replace(/,/g, "");
	y43=Number(y43);
	if (y43 && y43>=0){
		cpi_mod[4].subdimension[1].indicador[1].variable[0].valor=y43;
		cpi_mod[4].subdimension[1].indicador[1].variable[0].x=formato;
		tratamiento_aguas(4,2);
	}
	
	y44=document.getElementById("variable4111").value; // Indicadores a calcular para la variable aguas residuales producidas
	formato=verifica_capturado("variable4111");
	y44 = y44.replace(/,/g, "");
	y44=Number(y44);
	if (y44 && y44>0){
		cpi_mod[4].subdimension[1].indicador[1].variable[1].valor=y44;
		cpi_mod[4].subdimension[1].indicador[1].variable[1].x=formato;
		tratamiento_aguas(4,2);
	}
	
	y45=document.getElementById("variable4200").value; // Indicadores a calcular para la variable electricidad producida por fuentes renovables
	formato=verifica_capturado("variable4200");
	y45 = y45.replace(/,/g, "");
	y45=Number(y45);
	if (y45 && y45>=0){
		cpi_mod[4].subdimension[2].indicador[0].variable[0].valor=y45;
		cpi_mod[4].subdimension[2].indicador[0].variable[0].x=formato;
		energia_renovable(4,2);
	}
	
	y46=document.getElementById("variable4201").value; // Indicadores a calcular para la variable electricidad producida
	formato=verifica_capturado("variable4201");
	y46 = y46.replace(/,/g, "");
	y46=Number(y46);
	if (y46 && y46>0){
		cpi_mod[4].subdimension[2].indicador[0].variable[1].valor=y46;
		cpi_mod[4].subdimension[2].indicador[0].variable[1].x=formato;
		energia_renovable(4,2);
	}
	
	y47=document.getElementById("variable5000").value; // Indicadores a calcular para la variable personas con capacidad para votar que votaron
	formato=verifica_capturado("variable5000");
	y47 = y47.replace(/,/g, "");
	y47=Number(y47);
	if (y47>y)
	{ y47=y;
	  document.getElementById("variable5000").value=y;
	  cambiar_formato2("variable5000");}
	if (y47 && y47>=0){
		cpi_mod[5].subdimension[0].indicador[0].variable[0].valor=y47;
		cpi_mod[5].subdimension[0].indicador[0].variable[0].x=formato;
		particip_electo(5,2);
	}
	
	y48=document.getElementById("variable5001").value; // Indicadores a calcular para la variable personas con capacidad para votar lista nominal
	formato=verifica_capturado("variable5001");
	y48 = y48.replace(/,/g, "");
	y48=Number(y48);
	if (y48>y)
	{ y48=y;
	  document.getElementById("variable5001").value=y;
	  cambiar_formato2("variable5001");}
	if (y48 && y48>0){
		cpi_mod[5].subdimension[0].indicador[0].variable[1].valor=y48;
		cpi_mod[5].subdimension[0].indicador[0].variable[1].x=formato;
		particip_electo(5,2);
	}
	
	y49=document.getElementById("variable5100").value; // Indicadores a calcular para la variable gasto real de los gobiernos municipales egresos brutos
	formato=verifica_capturado("variable5100");
	y49 = y49.replace(/,/g, "");
	y49=Number(y49);
	if (y49 && y49>0){
		cpi_mod[5].subdimension[1].indicador[0].variable[0].valor=y49;
		cpi_mod[5].subdimension[1].indicador[0].variable[0].x=formato;
		eficiencia_gasto(5,2);
	}
	
	y50=document.getElementById("variable5101").value; // Indicadores a calcular para la variable gasto estimado presupuesto municipal
	formato=verifica_capturado("variable5101");
	y50 = y50.replace(/,/g, "");
	y50=Number(y50);
	if (y50 && y50>=0){
		cpi_mod[5].subdimension[1].indicador[0].variable[1].valor=y50;
		cpi_mod[5].subdimension[1].indicador[0].variable[1].x=formato;
		eficiencia_gasto(5,2);
	}
	
	y51=document.getElementById("variable5110").value; // Indicadores a calcular para la variable ingresos propios del municipio
	formato=verifica_capturado("variable5110");
	y51 = y51.replace(/,/g, "");
	y51=Number(y51);
	if (y51 && y51>=0){
		cpi_mod[5].subdimension[1].indicador[1].variable[0].valor=y51;
		cpi_mod[5].subdimension[1].indicador[1].variable[0].x=formato;
		recauda_propios(5,2);
	}
	
	y52=document.getElementById("variable5111").value; // Indicadores a calcular para la variable ingresos totales del municipio
	formato=verifica_capturado("variable5111");
	y52 = y52.replace(/,/g, "");
	y52=Number(y52);
	if (y52 && y52>0){
		cpi_mod[5].subdimension[1].indicador[1].variable[1].valor=y52;
		cpi_mod[5].subdimension[1].indicador[1].variable[1].x=formato;
		recauda_propios(5,2);
		cpi_mod[5].subdimension[1].indicador[2].variable[1].valor=y52;
		cpi_mod[5].subdimension[1].indicador[2].variable[1].x=formato;
		deuda_sub(5,2);
	}
	
	y53=document.getElementById("variable5120").value; // Indicadores a calcular para la variable deuda municipal 
	formato=verifica_capturado("variable5120");
	y53 = y53.replace(/,/g, "");
	y53=Number(y53);
	if (y53 && y53>=0){
		cpi_mod[5].subdimension[1].indicador[2].variable[0].valor=y53;
		cpi_mod[5].subdimension[1].indicador[2].variable[0].x=formato;
		deuda_sub(5,2);
	}
	
	y54=document.getElementById("variable5200").value; // Indicadores a calcular para la variable tasa anual de crecimiento del area urbana
	formato=verifica_capturado("variable5200");
	y54 = y54.replace(/,/g, "");
	y54=Number(y54);
	if (y54 && y54>=0){
		cpi_mod[5].subdimension[2].indicador[0].variable[0].valor=y54;
		cpi_mod[5].subdimension[2].indicador[0].variable[0].x=formato;
		expancion_urb(5,2);
	}
	
	y55=document.getElementById("variable5201").value; // Indicadores a calcular para la variable tasa anual de crecimiento de la población
	formato=verifica_capturado("variable5201");
	y55 = y55.replace(/,/g, "");
	y55=Number(y55);
	if (y55 && y55>0){
		cpi_mod[5].subdimension[2].indicador[0].variable[1].valor=y55;
		cpi_mod[5].subdimension[2].indicador[0].variable[1].x=formato;
		expancion_urb(5,2);
	}
	//********************************* fin de resuelve
		//elemento = document.getElementById("espere");
 		//elemento.style.display = "none";
		document.getElementById("bgventana").style.visibility="hidden";

 	
		}, delayInMilliseconds);

}
	
	

		




function verifica_capturado(v_capturado){
	//if (document.getElementById(v_capturado).style.fontWeight) {
	tipo=document.getElementById(v_capturado).style.fontWeight;//}
	if (document.getElementById(v_capturado).style.fontStyle){
	estilo=document.getElementById(v_capturado).style.fontStyle;}
	if (document.getElementById(v_capturado).style.textDecoration){
	subrayado= document.getElementById(v_capturado).style.textDecoration;}
	if (tipo=="bold" && estilo=="italic" && subrayado=="none"){		
		return "modificado";
	}
	else return 0;
}


function calcular_vp(valor_inicial, anio_inicial, anio_final, tcma){ //calcula el valor pronosticado para cada variable
	
	valor_final=valor_inicial*(Math.pow(((tcma/100)+1), (anio_final-anio_inicial)));
	return number_format(valor_final,2);
	
	//return  Math.round(valor_final*100)/100;
}


function cal_pronost(){ //llena la tabla con todos los valores pronosticados para las variables segun el año seleccionado
	
	anio_prono=parseInt(document.getElementById("a_pronos").options[ document.getElementById("a_pronos").selectedIndex ].value);
	if (anio_prono>=2016) // si no seleciona año limpiar variables
	{
	
	for (v=0; v<6; v++){  		
	  for(n=0; n<variables[v].subdimension.length; n++)  {
		  for(i=0; i<variables[v].subdimension[n].indicador.length; i++)  {
			  for(j=0; j<variables[v].subdimension[n].indicador[i].variable.length-1; j++)  {
				  
				  tcma=calcular_tcma(variables[v].subdimension[n].indicador[i].variable[j].valor,variables[v].subdimension[n].indicador[i].variable[j].valor_hist,variables[v].subdimension[n].indicador[i].variable[j].anio,variables[v].subdimension[n].indicador[i].variable[j].anio_hist);
				  pronostico=calcular_vp(variables[v].subdimension[n].indicador[i].variable[j].valor,variables[v].subdimension[n].indicador[i].variable[j].anio,anio_prono,tcma);
				 document.getElementById("variable"+v+n+i+j).value =pronostico;
				 document.getElementById("variable"+v+n+i+j).style.fontWeight = "normal";
				 document.getElementById("variable"+v+n+i+j).style.fontStyle = "normal"; 
				 document.getElementById("variable"+v+n+i+j).style.textDecoration = "none";
				
				 
				 
				
				  
			  }
		  }
	  }
	}
	
	}
}
