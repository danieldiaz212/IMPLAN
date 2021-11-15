// JavaScript Document
//var index;
//var index2;
 src="jquery-3.2.1.js"
var bandera_tcma=0;
var cadena_sub = [];
var bandera_graficar=0;
var bandera_usuario=0;
//var cpi_mod[index].subdimension[index2].indicador[index3].variable[n].valor=0;

function number_format(amount, decimals) {  // funcion que le da formato a los numeros de las veriables.

    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0; // por si la variable no fue fue pasada

    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);

    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

    return amount_parts.join('.');
}

function cambiar_formato(id_celda){ // funcion que cambia el formato al valor de las  variables si este fue modificado por el usuario
	document.getElementById(id_celda).style.fontWeight = "bold";
	document.getElementById(id_celda).style.fontStyle = "italic";
	document.getElementById(id_celda).style.textDecoration = "none";
	bandera_usuario=1;
}

function actualiza_ventanas(){
	document.getElementById("sub0").selectedIndex = "0";
	indicadores(0);
	document.getElementById("sub1").selectedIndex = "0";
	indicadores(1);
	document.getElementById("sub2").selectedIndex = "0";
	indicadores(2);
	document.getElementById("sub3").selectedIndex = "0";
	indicadores(3);
	document.getElementById("sub4").selectedIndex = "0";
	indicadores(4);
	document.getElementById("sub5").selectedIndex = "0";
	indicadores(5);
}


function ejecutar(dime){
	bandera_graficar=1;
	index=dime;/*document.getElementById("dime").selectedIndex;*/
	index2=document.getElementById("sub"+dime).selectedIndex;
	index3=document.getElementById("indica"+dime).selectedIndex;
	if (index== 0){
		if (index2==0){
		producto_urb_per_capita(dime,1);
		return;
		}
	
	if (index2==1){
		relacion_dep_3_edad(dime,1);
		}
	
	if (index2==2){
		densidad_economica(dime,1);
		}
	
	if (index2==3){
		
		if (index3==0){
			tasa_desempleo(dime,1);
			}
		
		if (index3==1){
			rel_emple_pobla(dime,1);
			}
		}
	
	}
	
	
	if (index== 1){
		
		if (index2==0){
			
			if  (index3==0){
				vivienda_durable(dime,1);
			}
			
			if  (index3==1){
				agua_mejorada(dime,1);
			}
			
			if  (index3==2){
				espacio_habitable(dime,1);
			}
			
			if  (index3==3){
				densidad_poblacional(dime,1);
			}
		}
		
		if (index2==1){
			if  (index3==0){
				Densidad_Medicos(dime,1);
			}
		}
		
		
		if (index2==2){
			if  (index3==1){
		velocidad_banda_an(dime,0);
			}
			
			if  (index3==0){
				acceso_a_internet(dime,1);
					}
		}
		
		
			if (index2==3){
				if  (index3==0){
					transporte_mas(dime,1);
				}
				
				if  (index3==1){
					fatalidades_transito(dime,1);
				}
			}
			
			if (index2==4){
				if  (index3==0){
					densidad_inter_vial(dime,1);
				}
				
				if  (index3==1){
					densidad_vial(dime,1);
				}
				
				if  (index3==2){
					super_des_vias(dime,1);
				}
				
			
			}
				
	}
	
	
	if (index== 2){
		if (index2==0){
			if  (index3==0){
		esperanza_vida(dime,1);
			}
			
			if  (index3==1){
				tasa_mortalidad(dime,1);
					
				}
			
		}
			

			
			
			
			if (index2==1){
				
				if  (index3==0){
					tasa_alfa(dime,1);
						}

				
				if  (index3==1){
			anios_escolar(dime,1);
				}
			}
			
			
			if (index2==2){
				if  (index3==0){
			tasa_homicidios(dime,1);
				}
			}
				
			if (index2==3){
				if  (index3==0){
			acce_espa_pub(dime,1);
						}
				if  (index3==1){
			areas_verdes_per(dime,1);
				}
			}
			
	}
	

	if (index== 3){
		if (index2==0){
			if  (index3==0){
				coefieciente_gini(dime, 1);
			}
			
			if  (index3==1){
				tasa_pobreza(dime,1);
			}
		}
		
		if (index2==1){
			if  (index3==0){
				viviendas_tug(dime,1);
			}
			if  (index3==1){
				desempleojuvenil(dime,1);
			}
		}
		
		
		if (index2==2){
			if  (index3==0){
				inscrip_equitativa(dime,1);
			}
		}
	}	
		
	if (index== 4){
		if (index2==0){
			if (index3==0){
				estaciones_monito(dime, 1);
				}
			if (index3==1){
				concentraciones_pm(dime, 1);
				}
			if (index3==2){
				concentraciones_co2(dime, 1);
				}
			
			}
		
		if (index2==1){
			if (index3==0){
				rec_residuos(dime,1);
				}
			
			if (index3==1){
				tratamiento_aguas(dime,1);
				}
						
			}
		if (index2==2){
			if (index3==0){
				energia_renovable(dime,1);
				}
						
			}
		
	}
	
	if (index== 5){
		if (index2==0){
			if (index3==0){
				particip_electo(dime,1);
				}
		}
		
		
		if (index2==1){
			if (index3==0){
				eficiencia_gasto(dime,1);
				}
			if (index3==1){
				recauda_propios(dime,1);
				}
			
			if (index3==2){
				deuda_sub(dime,1);
				}
		}
		
		if (index2==2){
			if (index3==0){
				expancion_urb(dime,1);
				}
		}
	}	
	
}



function imprime(muestra) {
	
	var ficha=document.getElementById(muestra);
	var ventimp=window.open(' ','_blank');
	ventimp.document.write(ficha.innerHTML);
	ventimp.document.close();
	  var css = ventimp.document.createElement("link");
	  css.setAttribute("href", "main.css");
	  css.setAttribute("rel", "stylesheet");
	  css.setAttribute("type", "text/css");
	  ventimp.document.head.appendChild(css);
	ventimp.print();
	ventimp.close();
	
}


function iniciarr(){ // función principal para inicial la pagina
		
	subDimensiones(0);
	ver_valor_cpi(0);
	subDimensiones(1);
	subDimensiones(2);
	subDimensiones(3);
	subDimensiones(4);
	subDimensiones(5);
	tabla();
	$("#carga").hide();

	//procesando("esconde");
	
	//grafica_dimensiones();

	
}



function ver_valor_cpi(dime4){// Presenta los valores originales del CPI.
	limpiar("valor_CPI");
	var yy;
	var xx;
	var fooo;
	var zz;

	aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
	yy = document.createElement("div");
	yy.setAttribute("class","encabezado");
	yy.innerHTML = "";



	xx= document.createElement("div");
	xx.setAttribute("class","encabezado");
	xx.innerHTML = "Inicial";

	zz = document.createElement("div");
	zz.setAttribute("class","encabezado");
	zz.innerHTML = "Pron&oacute;stico";

	b = document.createElement("div");
	b.setAttribute("class","encabezado");
	b.innerHTML = "";
	
	b1 = document.createElement("div");
	b1.setAttribute("class","encabezado");
	b1.innerHTML = "";
	
	bb1 = document.createElement("div");
	bb1.setAttribute("class","encabezado");
	bb1.innerHTML = "";

	
	fooo = document.getElementById("valor_CPI");
	fooo.appendChild(aa);	
	fooo.appendChild(yy);

	fooo.appendChild(xx);
	fooo.appendChild(zz);
	fooo.appendChild(b);
	fooo.appendChild(b1);
	fooo.appendChild(bb1);

	aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
	
	
	
	fooo = document.getElementById("valor_CPI");
		yy = document.createElement("div");
		yy.setAttribute("class","columna1");
		yy.innerHTML ="CPI: ";

		
		xx = document.createElement("div");
		xx.setAttribute("class","columna2");
		xx.setAttribute("id","cpi_ori"+cpi[dime4].clave);
		//xx.innerHTML = ((cpi[0].valor+cpi[1].valor+cpi[2].valor+cpi[3].valor+cpi[4].valor+cpi[5].valor)/6).toFixed(2);
		xx.innerHTML = number_format(((cpi[0].valor+cpi[1].valor+cpi[2].valor+cpi[3].valor+cpi[4].valor+cpi[5].valor)/6),1);
		
		zz = document.createElement("div");
		zz.setAttribute("class","columna2");
		zz.setAttribute("id","cpi_mod"+cpi[dime4].clave);
		//zz.innerHTML = ((cpi[0].valor+cpi[1].valor+cpi[2].valor+cpi[3].valor+cpi[4].valor+cpi[5].valor)/6).toFixed(2);
		zz.innerHTML = number_format(((cpi[0].valor+cpi[1].valor+cpi[2].valor+cpi[3].valor+cpi[4].valor+cpi[5].valor)/6),1);
		
		c1 = document.createElement("div");
	    c1.setAttribute("class","encabezado");
	    c1.innerHTML = "";
		
		c = document.createElement("div");
	    c.setAttribute("class","columna4");
	    c.innerHTML = '<i class="fa fa-question-circle" aria-hidden="true" onclick="Abrir_ayuda(\'ayuda.html\')"></i>';
		
		d1 = document.createElement("div");
	    d1.setAttribute("class","encabezado");
	    d1.innerHTML = "";
		
		d = document.createElement("div");
	    d.setAttribute("class","columna4");
	    d.innerHTML = '<a href="manual_del_usuario.pdf" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>';
		
		//fooo = document.getElementById("valor_CPI");
		fooo.appendChild(aa);	
		fooo.appendChild(yy);
		fooo.appendChild(xx);
	    fooo.appendChild(zz);
		fooo.appendChild(c1);
		fooo.appendChild(c);
		fooo.appendChild(d);

	}



function ver_valores_dime(dime1){// Presenta los valores originales de las dimensiones.
	valor2="valo2"+dime1;
	valor3="columna1"+dime1;
limpiar(valor2);
index=dime1; /*document.getElementById("dime").selectedIndex;*/
var yy;
var xx;
var fooo;
var zz;

aa=document.createElement("div");
aa.setAttribute("class","contenidos");
yy = document.createElement("div");
yy.setAttribute("class","encabezado");
yy.innerHTML = "";



xx= document.createElement("div");
xx.setAttribute("class","encabezado");
xx.innerHTML = "Inicial";

zz = document.createElement("div");
zz.setAttribute("class","encabezado");
zz.innerHTML = "Pron&oacute;stico";

fooo = document.getElementById(valor2);
fooo.appendChild(aa);	
fooo.appendChild(yy);
fooo.appendChild(xx);
fooo.appendChild(zz);

aa=document.createElement("div");
aa.setAttribute("class","contenidos");
	yy = document.createElement("div");
	yy.setAttribute("class","columna1 liga");
	yy.setAttribute("id","columna1"+dime1);
	yy.setAttribute('onClick',"javascript:desplegar('visible','"+cpi[index].dimension+"','"+cpi[index].definicion+"')" );
	yy.innerHTML = cpi[index].dimension+":  ";

	
	
	xx = document.createElement("div");
	xx.setAttribute("class","columna2");
	xx.setAttribute("id","dim_ori"+dime1);
	xx.innerHTML = number_format(cpi[index].valor,1);
	
	zz = document.createElement("div");
	zz.setAttribute("class","columna2");
	zz.setAttribute("id","dim_mod"+dime1);
	zz.innerHTML = number_format(cpi_mod[index].valor,1);


	

	fooo.appendChild(aa);	
	fooo.appendChild(yy);
	fooo.appendChild(yy);
	pp=document.getElementById(valor3);
	fooo.appendChild(xx);
    fooo.appendChild(zz);
	
}



function ver_valores_sub(dime2){// Presenta los valores originales de las sub dimensiones.
limpiar("valo3"+dime2);
index=dime2; /*document.getElementById("dime").selectedIndex;*/
var yy2;
var xx2;
var fooo2;
var zz2;
var br;
var aa;



aa=document.createElement("div");
aa.setAttribute("class","contenidos");
yy = document.createElement("div");
yy.setAttribute("class","encabezado");
yy.innerHTML = "";



xx= document.createElement("div");
xx.setAttribute("class","encabezado");
xx.innerHTML = "Inicial";

zz = document.createElement("div");
zz.setAttribute("class","encabezado");
zz.innerHTML = "Pron&oacute;stico";

fooo2 = document.getElementById("valo3"+dime2);
fooo2.appendChild(aa);	
fooo2.appendChild(yy);
fooo2.appendChild(xx);
fooo2.appendChild(zz);




  for(j=0; j<cpi[index].subdimension.length; j++)  
  {
    aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
	
	
  	yy2 = document.createElement("div");
	yy2.setAttribute("class","columna1");
	yy2.innerHTML = cpi[index].subdimension[j].txt+": ";
	xx2 = document.createElement("div");
	xx2.setAttribute("class","columna2");
  	xx2.setAttribute("size", 5);
	xx2.setAttribute("id","sub_dim_org"+j);

	xx2.innerHTML=number_format(cpi[index].subdimension[j].valor,1);
	
	zz2 = document.createElement("div");
	zz2.setAttribute("class","columna2");
    zz2.setAttribute("size", 5);
	zz2.setAttribute("id","sudimod"+j+dime2);

	zz2.innerHTML=number_format(cpi_mod[index].subdimension[j].valor,1);

	
	
	fooo2.appendChild(aa);	
	fooo2.appendChild(yy2);
	fooo2.appendChild(xx2);
    fooo2.appendChild(zz2);

   }
}

function ver_valores_indicador(dime3){// Presenta los valores originales de los indicadores.
limpiar("valo4"+dime3);
index=dime3; /*document.getElementById("dime").selectedIndex;*/
index2=document.getElementById("sub"+dime3).selectedIndex;
var yy3;
var xx3;
var fooo3;
var br;
var zz3;

  fooo3 = document.getElementById("valo4"+dime3);
  for(k=0; k<cpi[index].subdimension[index2].indicador.length; k++)  
  {
	aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
  

  	yy3 = document.createElement("div");
	yy3.setAttribute("class","columna1 liga");
	yy3.setAttribute('onClick',"javascript:desplegar('visible','"+cpi[index].subdimension[index2].indicador[k].txt+"','"+cpi[index].subdimension[index2].indicador[k].definicion+"')" );
	yy3.innerHTML = cpi[index].subdimension[index2].indicador[k].txt+": ";
	
	xx3 = document.createElement("div");
	xx3.setAttribute("id","indica_org"+k+dime3);
	xx3.setAttribute("class","columna2");
	xx3.innerHTML=number_format(cpi[index].subdimension[index2].indicador[k].valor,1);
	//xx3.addEventListener("mouseup",function(event){desplegar("visible","esta es la defXX3", "hola")});
	
		
	zz3 = document.createElement("div");
	zz3.setAttribute("id","indica_mod"+k+dime3);
	
	if(cpi[index].subdimension[index2].indicador[k].valor==cpi_mod[index].subdimension[index2].indicador[k].valor){
	zz3.setAttribute("class","columna2");
	}else{
	zz3.setAttribute("class","columna3");	
	}
	zz3.innerHTML=number_format(cpi_mod[index].subdimension[index2].indicador[k].valor,1);
	
	fooo3.appendChild(aa);	
	fooo3.appendChild(yy3);
	fooo3.appendChild(xx3);
	fooo3.appendChild(zz3);

   }
  
  
}

function ver_valores_variables(dim){ //funcion que muestras los valores originales de las variables
  limpiar("valo5"+dim);
  index4=document.getElementById("vari"+dim).selectedIndex;
  index2=document.getElementById("sub"+dim).selectedIndex;
  index3=document.getElementById("indica"+dim).selectedIndex;
 index=dim;
  var cadena="";
  var x1;
  var y1;
  var z1;
  var br
  var foo1;
  
    for(n=0; n<cpi[index].subdimension[index2].indicador[index3].variable.length-1; n++)  {
	
	aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
	
	y1 = document.createElement("div");
	y1.setAttribute("class","columna1");
	y1.innerHTML = cpi[index].subdimension[index2].indicador[index3].variable[n].txt+": ";
	
		x1 = document.createElement("div");
		x1.setAttribute("class","columna2");
		x1.setAttribute("id","vari_original"+n+dim);
		x1.innerHTML= number_format(cpi[index].subdimension[index2].indicador[index3].variable[n].valor,1);
		
		z1 = document.createElement("div");
		if(cpi[index].subdimension[index2].indicador[index3].variable[n].valor==cpi_mod[index].subdimension[index2].indicador[index3].variable[n].valor){
		z1.setAttribute("class","columna2");
		}else{
			z1.setAttribute("class","columna3");	
		}
		z1.setAttribute("id","vari_mod"+n+dim);
		
		if (cpi_mod[index].subdimension[index2].indicador[index3].variable[n].x=="modificado"){
		z1.setAttribute("class","columna33");
		<!--bandera_graficar=1;-->
		}
		z1.innerHTML=number_format(cpi_mod[index].subdimension[index2].indicador[index3].variable[n].valor,1) ;
		foo1 = document.getElementById("valo5"+dim);
		foo1.appendChild(aa);
		foo1.appendChild(y1);
		foo1.appendChild(x1);
		foo1.appendChild(z1);

  	}	
    
    

}

function calcular_tcma(valor_final, valor_inicial, anio_final, anio_inicial){ // funcion que calcula la tasa de crecimiento media anual (tcma) para calcular el valor pronosticado de las variables
	bandera_tcma=0;
	if (valor_inicial > 0){
	
	tcma=100*(Math.pow((valor_final/valor_inicial), (1/(anio_final-anio_inicial)))-1);
	return Math.round(tcma*100)/100;
	}
	else{
	bandera_tcma=1;
	//if (document.getElementById("tcma_c").value>0){
	//return document.getElementById("tcma_c").value/100;}
	return 2.0;  // ***************** NOTA IMPORTANTE ************  si no existe un valor base para poder calcular la tasa de crecimiento esta sera del 2% 
	}
	}





function tabla(){ //funcion que muestras los valores originales de las variables en la tabla general
	  limpiar("valo7");
	  var cadena="";
	  var x1;
	  var y1;
	  var z1;
	  var br
	  var foo1;
	  var z;

	  
	  
	  
	  aa=document.createElement("div");
	  aa.setAttribute("class","contenidos");
	  yy = document.createElement("div");
	  yy.setAttribute("class","encabezado");
	  yy.innerHTML = "Variable";

	  ww= document.createElement("div");
	  ww.setAttribute("class","encabezado");
	  ww.innerHTML = "Dimensi&oacute;n impactada";

	  xx= document.createElement("div");
	  xx.setAttribute("class","encabezado");
	  xx.innerHTML = "Inicial";
	 
	  vv= document.createElement("div");
	  vv.setAttribute("class","encabezado");
	  vv.innerHTML = "Fuente";
	  


	  zz = document.createElement("div");
	  zz.setAttribute("class","encabezado");
	  zz.innerHTML = "Pron&oacute;stico";

	  foo1 = document.getElementById("valo7");
	  foo1.appendChild(aa);	
	  foo1.appendChild(yy);
	  foo1.appendChild(ww);
	  foo1.appendChild(xx);
	  foo1.appendChild(vv);
	  foo1.appendChild(zz);
	  
	  
	  
	 
	for (v=0; v<6; v++){  		
	  for(n=0; n<variables[v].subdimension.length; n++)  {
		  for(i=0; i<variables[v].subdimension[n].indicador.length; i++)  {
			  for(j=0; j<variables[v].subdimension[n].indicador[i].variable.length-1; j++)  {
				 
				  aa=document.createElement("div");
					aa.setAttribute("class","contenidos");
					
					y1 = document.createElement("div");
					y1.setAttribute("class","columna1");
					y1.innerHTML = variables[v].subdimension[n].indicador[i].variable[j].txt+": ";
					
					w1 = document.createElement("div");
					w1.setAttribute("class","columna2");
					w1.setAttribute("id","impacta"+n+index);
					w1.innerHTML=variables[v].subdimension[n].indicador[i].variable[j].impacta;
					
						x1 = document.createElement("div");
						x1.setAttribute("class","columna2");
						x1.setAttribute("id","vari_original"+n+index);
						x1.innerHTML= number_format(variables[v].subdimension[n].indicador[i].variable[j].valor,2);
						
						
						p=number_format(variables[v].subdimension[n].indicador[i].variable[j].valor_hist,2);
					  	v1 = document.createElement("div");
						v1.setAttribute("class","columna1 liga2");
						tcma=calcular_tcma(variables[v].subdimension[n].indicador[i].variable[j].valor,variables[v].subdimension[n].indicador[i].variable[j].valor_hist,variables[v].subdimension[n].indicador[i].variable[j].anio,variables[v].subdimension[n].indicador[i].variable[j].anio_hist);
						if (bandera_tcma==1){
						v1.setAttribute('onClick',"javascript:desplegar_tabla('visible','"+variables[v].subdimension[n].indicador[i].variable[j].fuente+"','"+"A&ntilde;o: "+variables[v].subdimension[n].indicador[i].variable[j].anio+"','"+"Valor base: "+p+"','"+"A&ntilde;o base: "+variables[v].subdimension[n].indicador[i].variable[j].anio_hist+"','"+"TCMA: "+tcma+"</br> <strong>Nota: </strong> Esta variable se le asign&oacute la TCMA del 2% por no existir valores previos para su c&aacutelculo "+"')" );
						}
						else{
						v1.setAttribute('onClick',"javascript:desplegar_tabla('visible','"+variables[v].subdimension[n].indicador[i].variable[j].fuente+"','"+"A&ntilde;o: "+variables[v].subdimension[n].indicador[i].variable[j].anio+"','"+"Valor base: "+p+"','"+"A&ntilde;o base: "+variables[v].subdimension[n].indicador[i].variable[j].anio_hist+"','"+"TCMA: "+tcma+"')" );}
						v1.innerHTML = "i";

						
						
						//v1 = document.createElement("div");
						//v1.setAttribute("class","columna2");
						//v1.setAttribute("id","fuente"+n+index);
						//v1.innerHTML= variables[v].subdimension[n].indicador[i].variable[j].fuente+". Año:"+variables[v].subdimension[n].indicador[i].variable[j].anio ;
						
						
						
						z1 = document.createElement("INPUT");
				    	z1.setAttribute("type", "text");
				      	z1.setAttribute("size", 15);
						z1.setAttribute("id","variable"+v+n+i+j);	
						//z1.style.backgroundColor = "red";
						//z1.setAttribute('onChange',"javascript:cambiar_formato('variable0000')" );
						pp="'variable"+v+""+n+""+i+""+j+"'";
				 		z1.setAttribute('onChange',"javascript:cambiar_formato('variable"+v+""+n+""+i+""+j+"')" );
						
						

						z = document.createElement("div");
						z.setAttribute("class","columna2");
						
						foo1 = document.getElementById("valo7");
						foo1.appendChild(aa);
						p=variables[v].subdimension[n].indicador[i].variable[j].valor_hist;
						if (variables[v].subdimension[n].indicador[i].variable[j].valor_hist == 0) {
							y1.setAttribute("class","columna22");
							y1.innerHTML ="*"+variables[v].subdimension[n].indicador[i].variable[j].txt+": ";
							foo1.appendChild(y1);
							
						}
						else
						{	foo1.setAttribute("class","columna1");
							foo1.appendChild(y1);}
						foo1.appendChild(w1);
						foo1.appendChild(x1);
						foo1.appendChild(v1);
						z.appendChild(z1);
						foo1.appendChild(z);
				  
				  
				  
			  }
		  }
				  
		}
	  
	  }		  
		
	    

	}


function dimensiones(){ //hace el listado de las 6 dimensiones
var cadena="";
  for(i=0; i<cpi.length; i++)  
  {
    cadena+="<option value="+cpi[i].clave+">"+cpi[i].dimension+"</option>";
   }
 document.getElementById("dime").innerHTML=cadena;

  ver_valores_dime();
  subDimensiones();

  graficar(0);
  } 
 
 
  function subDimensiones(dime){// hace el listado de las subdimensiones segun la dimension seleccionada

 
  index=dime; /*document.getElementById("dime").selectedIndex;*/
  var cadena="";
  cadena_sub.length=0;
  for(j=0; j<cpi[index].subdimension.length; j++)  
  {
    cadena+="<option value="+cpi[index].subdimension[j].clave+">"+cpi[index].subdimension[j].txt+"</option>";
	cadena_sub[j]=cpi[index].subdimension[j].txt+" "+cpi[index].subdimension[j].valor; //*****************************************************cadena_sub para graficar las sudDimensiones
   }
  sub="sub"+dime;
 document.getElementById(sub).innerHTML=cadena;
 ver_valores_dime(dime);
 ver_valores_sub(dime);
  indicadores(dime);
  graficar(dime);
  }
  

  function indicadores(dime){//hace el listado de los indicadores por cada subdimension
  index2=document.getElementById("sub"+dime).selectedIndex;
  var cadena="";
  for(k=0; k<cpi[dime].subdimension[index2].indicador.length; k++)  
  {
    cadena+="<option value="+cpi[dime].subdimension[index2].indicador[k].clave+">"+cpi[dime].subdimension[index2].indicador[k].txt+"</option>";
   }
 document.getElementById("indica"+dime).innerHTML=cadena;
 ver_valores_indicador(dime);
 variables_cpi(dime);
 ver_valores_variables(dime);
  }

 function variables_cpi(dim){ //hace el listado de las variables por cada indicador seleccionado
  index3=document.getElementById("indica"+dim).selectedIndex;
  var cadena="";
  for(l=0; l<cpi[dim].subdimension[index2].indicador[index3].variable.length-1; l++)  
  {
    cadena+="<option value="+cpi[dim].subdimension[index2].indicador[index3].variable[l].txt+">"+cpi[dim].subdimension[index2].indicador[index3].variable[l].txt+"</option>";
   }
 	document.getElementById("vari"+dim).innerHTML=cadena;
 	ver_valores_variables(dim);
  }
  
  function limpiar(campo) //funcion que limpia el div donde se muestran las variables
	{ 
   		document.getElementById(campo).innerHTML="";
	}


function valores(dim){ //funcion que muestra formulario para dar nuevo valor a las variables
  limpiar("valo"+dim);
  index2=document.getElementById("sub"+dim).selectedIndex;
  index3=document.getElementById("indica"+dim).selectedIndex;
  index4=document.getElementById("vari"+dim).selectedIndex;
  var cadena="";
  var x;
  var y;
  var z;
  var br
  var foo;
  
    for(m=0; m<cpi[dim].subdimension[index2].indicador[index3].variable.length-1; m++)  {
	
	aa=document.createElement("div");
	aa.setAttribute("class","contenidos");
	
	y = document.createElement("div");
	y.setAttribute("class","columna1");
	y.innerHTML = cpi[dim].subdimension[index2].indicador[index3].variable[m].txt+": " ;

	
	
		x = document.createElement("INPUT");
    	x.setAttribute("type", "text");
      	x.setAttribute("size", 10);
		x.setAttribute("id","variable"+m+dim);
		
		z = document.createElement("div");
		z.setAttribute("class","columna2");
	
		
		foo = document.getElementById("valo"+dim);
		foo.appendChild(aa);
		foo.appendChild(y);
		z.appendChild(x);
		foo.appendChild(z);
				
  	}	


  }


function graficar(dimex){ //funcion que grafica las subdimensiones para cada dimension


if (cpi[dimex].subdimension.length == 3 ){ 
var uno=parseFloat(document.getElementById("sudimod0"+dimex).innerHTML);
var dos=parseFloat(document.getElementById("sudimod1"+dimex).innerHTML);
var tres=parseFloat(document.getElementById("sudimod2"+dimex).innerHTML);

var primero=cpi[dimex].subdimension[0].valor;
var segundo=cpi[dimex].subdimension[1].valor;
var tercero=cpi[dimex].subdimension[2].valor;

 if (document.getElementById("a_pronos").value>=2016){
		 
		leyenda = " valores pronosticados al "+document.getElementById("a_pronos").value;
		 }
		 else  if (bandera_graficar==1 || bandera_usuario==1){
		 leyenda="valores capturados por el usuario";}
		 else{
		 leyenda=" valores de inicio";	 }
				 

  var myConfig = {
      "type": "radar",
	   options: {
      mobile: true
 	 },
      "plot": {
        "aspect": "area"
      },
	   "background-color": "white",
                "border-top": "3px solid #7e7e7e",
                "border-bottom": "3px solid #7e7e7e",
                "border-right": "3px solid #7e7e7e",
                "border-left": "3px solid #7e7e7e",
                "border-color": "black",
                "border-size": "5",
                "title": {
                    "text": cpi[dimex].dimension+"<br>"+leyenda, //"Productividad",
					"background-color": "none",
                    "font-color": "000",
                    "font-size": "20px"
                },
                "tooltip": {
					"text": "%t<br>%k Es %v",
					"shadow": 0,
                    "border-radius": 3
                },
	   "scale-k": {
                    "background-color": "none",
                    "values": [cpi[dimex].subdimension[0].tit+" "+number_format(cpi[dimex].subdimension[0].valor,1), 
							   cpi[dimex].subdimension[1].tit+" "+number_format(cpi[dimex].subdimension[1].valor,1),
							   cpi[dimex].subdimension[2].tit+" "+number_format(cpi[dimex].subdimension[2].valor,1)],
                    "item": {
                        "font-size": "14px",
                        "padding-left": "30px",
                        "padding-bottom": "15px"
                    },
                    "guide": {
                        "line-color": "#818181",
                        "line-style": "solid",
                        "line-width": "2px",
                        "items": [
                            {
                                "background-color": "#fff"
                            }
                        ]
                    },
                    "tick": {
                        "visible": false
                    }
                },
"series": [{
        "values": [parseFloat(number_format(primero,1)), parseFloat(number_format(segundo,1)), parseFloat(number_format(tercero,1))], "text": cpi[dimex].dimension
      },{
   	   "values": [uno, dos, tres], "text": cpi[dimex].dimension,
	      lineColor : '#f2372e',
		  lineStyle : "dotted",
	      backgroundColor : 'none'
}]
    };
}

if (cpi[dimex].subdimension.length == 4 ){
//var primero=parseFloat(document.getElementById("sub_dim0").value);
//var segundo=parseFloat(document.getElementById("sub_dim1").value);
//var tercero=parseFloat(document.getElementById("sub_dim2").value);
//var cuarto=parseFloat(document.getElementById("sub_dim3").value);
var primero=cpi[dimex].subdimension[0].valor;
var segundo=cpi[dimex].subdimension[1].valor;
var tercero=cpi[dimex].subdimension[2].valor;
var cuarto=cpi[dimex].subdimension[3].valor;

var uno=parseFloat(document.getElementById("sudimod0"+dimex).innerHTML);
var dos=parseFloat(document.getElementById("sudimod1"+dimex).innerHTML);
var tres=parseFloat(document.getElementById("sudimod2"+dimex).innerHTML);
var cuatro=parseFloat(document.getElementById("sudimod3"+dimex).innerHTML);

		 
		  if (document.getElementById("a_pronos").value>=2016){
		 
		leyenda = " valores pronosticados al "+document.getElementById("a_pronos").value;
		 }
		 else  if (bandera_graficar==1 || bandera_usuario==1){
		 leyenda="valores capturados por el usuario";}
		 else{
		 leyenda=" valores de inicio";	 }

  var myConfig = {
      "type": "radar",
	   options: {
      mobile: true
 	 },
      "plot": {
        "aspect": "area"
      },
	   "background-color": "white",
                "border-top": "3px solid #7e7e7e",
                "border-bottom": "3px solid #7e7e7e",
                "border-right": "3px solid #7e7e7e",
                "border-left": "3px solid #7e7e7e",
                "border-color": "black",
                "border-size": "5",
                "title": {
                    "text": cpi[dimex].dimension+"<br>"+leyenda, 
                    "background-color": "none",
                    "font-color": "000",
                    "font-size": "20px"
                },
                "tooltip": {
                    "text": "%t<br>%k Es %v",
                    "shadow": 0,
                    "border-radius": 3
                },
	   "scale-k": {
                    "background-color": "none",
                    "values": [cpi[dimex].subdimension[0].tit+" "+number_format(cpi[dimex].subdimension[0].valor, 1),
							   cpi[dimex].subdimension[1].tit+" "+number_format(cpi[dimex].subdimension[1].valor,1),
							   cpi[dimex].subdimension[2].tit+" "+number_format(cpi[dimex].subdimension[2].valor,1),
							   cpi[dimex].subdimension[3].tit+" "+number_format(cpi[dimex].subdimension[3].valor,1)],
                    "item": {
                        "font-size": "14px",
                        "padding-left": "30px",
                        "padding-bottom": "15px"
                    },
                    "guide": {
                        "line-color": "#818181",
                        "line-style": "solid",
                        "line-width": "2px",
                        "items": [
                            {
                                "background-color": "#fff"
                            }
                        ]
                    },
                    "tick": {
                        "visible": false
                    }
                },
"series": [{
        "values": [parseFloat(number_format(primero,1)), parseFloat(number_format(segundo,1)), parseFloat(number_format(tercero,1)),  parseFloat(number_format(cuarto,1))], "text": cpi[dimex].dimension
        	     
        	     

       },{
    	   "values": [uno, dos, tres, cuatro], "text": cpi[dimex].dimension,
    	      lineColor : '#f2372e',
		  	  lineStyle : "dotted",
	          backgroundColor : 'none'
       }]
    };
}

if (cpi[dimex].subdimension.length == 5 ) {
var uno=parseFloat(document.getElementById("sudimod0"+dimex).innerHTML);
var dos=parseFloat(document.getElementById("sudimod1"+dimex).innerHTML);
var tres=parseFloat(document.getElementById("sudimod2"+dimex).innerHTML);
var cuatro=parseFloat(document.getElementById("sudimod3"+dimex).innerHTML);
var cinco=parseFloat(document.getElementById("sudimod4"+dimex).innerHTML);



var primero=cpi[dimex].subdimension[0].valor;
var segundo=cpi[dimex].subdimension[1].valor;
var tercero=cpi[dimex].subdimension[2].valor;
var cuarto=cpi[dimex].subdimension[3].valor;
var quinto=cpi[dimex].subdimension[4].valor;
  if (document.getElementById("a_pronos").value>=2016){
		 
		leyenda = " valores pronosticados al "+document.getElementById("a_pronos").value;
		 }
		 else  if (bandera_graficar==1 || bandera_usuario==1){
		 leyenda="valores capturados por el usuario";}
		 else{
		 leyenda=" valores de inicio";	 }

  var myConfig = {
      "type": "radar",
	   options: {
      mobile: true
 	 },
      "plot": {
        "aspect": "area"
      },
	   "background-color": "white",
                "border-top": "3px solid #7e7e7e",
                "border-bottom": "3px solid #7e7e7e",
                "border-right": "3px solid #7e7e7e",
                "border-left": "3px solid #7e7e7e",
                "border-color": "black",
                "border-size": "5",
                "title": {
                    "text": cpi[dimex].dimension+"<br>"+leyenda, //"Productividad",
                    "background-color": "none",
                    "font-color": "000",
                    "font-size": "20px"
                },
                "tooltip": {
					"text": "%t<br>%k Es %v",
                    "shadow": 0,
                    "border-radius": 3
                },
	   "scale-k": {
                    "background-color": "none",
                    "values": [cpi[dimex].subdimension[0].tit+" "+number_format(cpi[dimex].subdimension[0].valor,1), 
							   cpi[dimex].subdimension[1].tit+" "+number_format(cpi[dimex].subdimension[1].valor,1),
							   cpi[dimex].subdimension[2].tit+" "+number_format(cpi[dimex].subdimension[2].valor,1),
							   cpi[dimex].subdimension[3].tit+" "+number_format(cpi[dimex].subdimension[3].valor,1),
							   cpi[dimex].subdimension[4].tit+" "+number_format(cpi[dimex].subdimension[4].valor,1),],
                    "item": {
                        "font-size": "14px",
                        "padding-left": "30px",
                        "padding-bottom": "15px"
                    },
                    "guide": {
                        "line-color": "#818181",
                        "line-style": "solid",
                        "line-width": "2px",
                        "items": [
                            {
                                "background-color": "#fff"
                            }
                        ]
                    },
                    "tick": {
                        "visible": false
                    }
                },
"series": [{
        "values": [parseFloat(number_format(primero,1)), parseFloat(number_format(segundo,1)), parseFloat(number_format(tercero,1)), parseFloat(number_format(cuarto,1)), parseFloat(number_format(quinto,1))], "text": cpi[dimex].dimension
      },{
   	   "values": [uno, dos, tres, cuatro, cinco], "text": cpi[dimex].dimension,
			lineColor : '#f2372e',
			lineStyle : "dotted",
	    	backgroundColor : 'none'
		  }]
    };	
}

	 zingchart.render({
      id: 'myChart'+dimex,
      data: myConfig,
      //height: '99%',
      width: '99%'
    });
	 grafica_dimensiones();
}


function grafica_dimensiones(){ ////funcion que grafica las sub dimensiones del CPI


		  
		 var uno=parseFloat(cpi_mod[0].valor);
		 uno=parseFloat(number_format(uno,1));
		 var dos=parseFloat(cpi_mod[1].valor);
		 var tres=parseFloat(cpi_mod[2].valor);
		 var cuatro=parseFloat(cpi_mod[3].valor);
		 var cinco=parseFloat(cpi_mod[4].valor);
		 var seis=parseFloat(cpi_mod[5].valor);

		 var primera=cpi[0].valor;
		 var segunda=cpi[1].valor;
		 var tercera=cpi[2].valor;
		 var cuarta=cpi[3].valor;
		 var quinta=cpi[4].valor;
		 var sexta=cpi[5].valor;
		  if (document.getElementById("a_pronos").value>=2016){
		 
		leyenda = " valores pronosticados al "+document.getElementById("a_pronos").value;
		 }
		 else  if (bandera_graficar==1 || bandera_usuario==1){
		 leyenda="valores capturados por el usuario";}
		 else{
		 leyenda=" valores de inicio";	 }

		   var myConfig = {
		       "type": "radar",
		 	   options: {
		       mobile: true
		  	 },
		       "plot": {
		         "aspect": "area"
		       },
		 	   "background-color": "white",
		                 "border-top": "3px solid #7e7e7e",
		                 "border-bottom": "3px solid #7e7e7e",
		                 "border-right": "3px solid #7e7e7e",
		                 "border-left": "3px solid #7e7e7e",
		                 "border-color": "black",
		                 "border-size": "5",
		                 "title": {
		                     "text": "Resumen de resultados"+"<br>"+ leyenda, //"Productividad",
		                     "background-color": "none",
		                     "font-color": "000",
		                     "font-size": "20px"
		                 },
		                 "tooltip": {
		                     "text": "%t<br>%k Es %v",
		                     "shadow": 0,
		                     "border-radius": 3
		                 },
		 	   "scale-k": {
		                     "background-color": "none",
		                     "values": [cpi[0].dimension+" "+number_format(cpi[0].valor,1),
		                    	 		cpi[1].dimension+" "+number_format(cpi[1].valor,1),
		                    	 		cpi[2].dimension+" "+number_format(cpi[2].valor,1), 
		                    	 		cpi[3].dimension+" "+number_format(cpi[3].valor,1), 
		                    	 		cpi[4].dimension+" "+number_format(cpi[4].valor,1), 
		                    	 		cpi[5].dimension+" "+number_format(cpi[5].valor,1), 
		 							],
		                     "item": {
		                         "font-size": "12px",
		                         "padding-left": "30px",
		                         "padding-bottom": "15px"
		                     },
		                     "guide": {
		                         "line-color": "#818181",
		                         "line-style": "solid",
		                         "line-width": "2px",
		                         "items": [
		                             {
		                                 "background-color": "#fff"
		                             }
		                         ]
		                     },
		                     "tick": {
		                         "visible": false
		                     }
		                 },
		 "series": [{
		         "values": [parseFloat(number_format(primera,1)), parseFloat(number_format(segunda,1)), parseFloat(number_format(tercera,1)), parseFloat(number_format(cuarta, 1)), parseFloat(number_format(quinta,1)), parseFloat(number_format(sexta,1))], "text": "Valor Original"
		       },{
		    	   "values": [uno, dos, tres, cuatro, cinco, seis], "text": "Valor modificado",
					lineColor : '#f2372e',
		  			lineStyle : "dotted",
	      			backgroundColor : 'none'
		 }]
		     };
		 

		
		 

		 	 zingchart.render({
		       id: 'myChart6',
		       data: myConfig,
		      // height: '99%',
		       width: '99%'
		     });
			 grafica_sub();
	
}

 function grafica_sub(){ ////funcion que grafica todas las sub dimensiones para el CPI


		  
		 var uno=parseFloat(cpi_mod[0].valor);
		 var dos=parseFloat(cpi_mod[1].valor);
		 var tres=parseFloat(cpi_mod[2].valor);
		 var cuatro=parseFloat(cpi_mod[3].valor);
		 var cinco=parseFloat(cpi_mod[4].valor);
		 var seis=parseFloat(cpi_mod[5].valor);

		 var primera=number_format(cpi_mod[0].subdimension[0].valor,1);
		 var segunda=number_format(cpi_mod[0].subdimension[1].valor,1);
		 var tercera=number_format(cpi_mod[0].subdimension[2].valor,1);
		 var cuarta=number_format(cpi_mod[0].subdimension[3].valor,1);
		 var quinta=number_format(cpi_mod[1].subdimension[0].valor,1);
		 var sexta=number_format(cpi_mod[1].subdimension[1].valor,1);
		 var septima=number_format(cpi_mod[1].subdimension[2].valor,1);
		 var octava=number_format(cpi_mod[1].subdimension[3].valor,1);
		 var novena=number_format(cpi_mod[1].subdimension[4].valor,1);
		  var diez=number_format(cpi_mod[2].subdimension[0].valor,1);
		 var once=number_format(cpi_mod[2].subdimension[1].valor,1);
		 var doce=number_format(cpi_mod[2].subdimension[2].valor,1);
		 var trece=number_format(cpi_mod[2].subdimension[3].valor,1);
		 var catorce=number_format(cpi_mod[3].subdimension[0].valor,1);
		 var quince=number_format(cpi_mod[3].subdimension[1].valor,1);
		 var diesciseis=number_format(cpi_mod[3].subdimension[2].valor,1);
		  var diescisiete=number_format(cpi_mod[4].subdimension[0].valor,1);
		 var diesciocho=number_format(cpi_mod[4].subdimension[1].valor,1);
		 var diescinueve=number_format(cpi_mod[4].subdimension[2].valor,1);
		 var veinte=number_format(cpi_mod[5].subdimension[0].valor,1);
		 var veintiuno=number_format(cpi_mod[5].subdimension[1].valor,1);
		 var veintidos=number_format(cpi_mod[5].subdimension[2].valor,1);
		 var valor_cpi;
		
		
		 valor_cpi=(parseFloat(cpi_mod[0].valor)+parseFloat(cpi_mod[1].valor)+parseFloat(cpi_mod[2].valor)+parseFloat(cpi_mod[3].valor)+parseFloat(cpi_mod[4].valor)+parseFloat(cpi_mod[5].valor))/6;
		 primera=parseFloat(primera);
		 segunda=parseFloat(segunda);
		 tercera=parseFloat(tercera);
		 cuarta=parseFloat(cuarta);
		 
		 quinta=parseFloat(quinta);
		 sexta=parseFloat(sexta);
		 septima=parseFloat(septima);
		 octava=parseFloat(octava);
		novena=parseFloat(novena);
		
		 diez=parseFloat(diez);
		 once=parseFloat(once);
		 doce=parseFloat(doce);
		 trece=parseFloat(trece);
		 
		  catorce=parseFloat(catorce);
		 quince=parseFloat(quince);
		 diesciseis=parseFloat(diesciseis);
		 
		 diescisiete=parseFloat(diescisiete);
		 diesciocho=parseFloat(diesciocho);
		 diescinueve=parseFloat(diescinueve);
		 
		  veinte=parseFloat(veinte);
		 veintiuno=parseFloat(veintiuno);
		 veintidos=parseFloat(veintidos);
		 
		  if (document.getElementById("a_pronos").value>=2016){
		 
		leyenda = " valores pronosticados al "+document.getElementById("a_pronos").value;
		 }
		 else  if (bandera_graficar==1 || bandera_usuario==1){
		 leyenda="valores capturados por el usuario";}
		 else{
		 leyenda=" valores de inicio";	 }
		 
		 
	var myConfig = 	 
		
 {
  "type": "bar",
  "title": {
    "text": "Resultados por sub dimension del CPI"+"<br>"+leyenda
  },
  "plot": {
    "value-box": {
      "text": "%v"
    },
    "tooltip": {
      "text": "%v"
    }
	
  
  
  },

  
 
  
  "scale-x": {
	        "line-color":"#0079C4",
            "tick":{
                "line-color":"#0079C4"
            },
            "guide":{
                "line-width":0,
                "items":[
                    {
                        "background-color":"#ebebeb"
                        
                    },
                    {
                        "background-color":"#fbfbfb"
                    }
                    ]
            },
            "item":{
                "angle":18,
                "font-size":12
            },
            "max-items":900,
            "items-overlap":true,
			
    "values": [
			   cpi_mod[0].subdimension[0].txt,
			  cpi_mod[0].subdimension[1].txt,
			  cpi_mod[0].subdimension[2].txt,
			  cpi_mod[0].subdimension[3].txt,
			  cpi_mod[1].subdimension[0].txt,
			  cpi_mod[1].subdimension[1].txt,
			  cpi_mod[1].subdimension[2].txt,
			  cpi_mod[1].subdimension[3].txt,
			  cpi_mod[1].subdimension[4].txt,
			  cpi_mod[2].subdimension[0].txt,
			  cpi_mod[2].subdimension[1].txt,
			  cpi_mod[2].subdimension[2].txt,
			  cpi_mod[2].subdimension[3].txt,
			  cpi_mod[3].subdimension[0].txt,
			  cpi_mod[3].subdimension[1].txt,
			  cpi_mod[3].subdimension[2].txt,
			  cpi_mod[4].subdimension[0].txt,
			  cpi_mod[4].subdimension[1].txt,
			  cpi_mod[4].subdimension[2].txt,
			  cpi_mod[5].subdimension[0].txt,
			  cpi_mod[5].subdimension[1].txt,
			  cpi_mod[5].subdimension[2].txt
			  //cpi_mod[5].subdimension[2].txt
		
    ],
	
	  
	
	 "label":{
        "text":"sub dimensiones"
		//"angle":-90
    }
  },
  
   "scale-y": {
    "markers": [
      {
        "type": "line",
		"line-style":"dashed",
        "range": [valor_cpi],
        "line-width": 2,
        "line-color": "black",
        "text": "valor CPI",
        "placement": "top",
        "label-placement": "opposite",
        "label-alignment": "normal"
      }
    ]
  },
  
   "crosshair-x":{
            "line-color":"none",
            "marker":{
                "visible":false
            },
            "plot-label":{
                "visible":false
            }
           
        },
  "series": [
    {
      "values": [primera, segunda, tercera, cuarta, quinta, sexta, septima, octava, novena, diez, once, doce, trece, catorce, quince, diesciseis, diescisiete, diesciocho, diescinueve, veinte, veintiuno, veintidos],
	  "styles": ["#ca4023", "#ca4023", "#ca4023", "#ca4023", "#6e3480", "#6e3480", "#6e3480", "#6e3480", "#6e3480", "#145980", "#145980", "#145980", "#145980", "#f59b67", "#f59b67", "#f59b67", "#b4d16f", "#b4d16f","#b4d16f", "#73f6ff", "#73f6ff", "#73f6ff"]
     // "text": [cpi_mod[0].dimension],
	  // "text": [cpi_mod[1].dimension]
    }
  ]
};

		  

		
		 

		 	 zingchart.render({
		       id: 'myChart7',
		       data: myConfig,
		      // height: '99%',
		       width: '99%'
		     });
	
}

function Abrir_ayuda (pagina) {
var opciones="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=900, height=630, top=100, left=100";
window.open(pagina,"",opciones);
}

