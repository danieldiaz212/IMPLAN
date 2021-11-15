function desplegar(_valor,titulo,def){ //función que despliega una ventana con la definición de cada dimensión e indicador

    var time = new Date();
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

	console.log('desplegar: antes de setear valor   '+ document.getElementById("bgventana").style.visibility);
	document.getElementById("bgventana").style.visibility=_valor;
	console.log('desplegar: despues de setear valor   '+ document.getElementById("bgventana").style.visibility);
    //$("#bgventana").addClass("bgventana_hid");

	vtit=document.getElementById("tit");
	vtit.innerHTML=titulo;
	vdef=document.getElementById("definicion");
	vdef.innerHTML=def;
	
}

function desplegar_tabla(_valor,fuen, an, va_his, an_his, tcma){ // funcion que despliega una ventana con los datos mas importantes de cada variable (fuente, año, valor base, año base y tcma)
	
	document.getElementById("bgventana2").style.visibility=_valor;
	vfuente=document.getElementById("fuen");
	vfuente.innerHTML=fuen;
	vanio_fuente=document.getElementById("anio_f");
	vanio_fuente.innerHTML=an;
	vhist=document.getElementById("val_hist");
	vhist.innerHTML=va_his;
	vanio_hist=document.getElementById("anio_hist");
	vanio_hist.innerHTML=an_his;
	vtcma=document.getElementById("tasa_cre");
	vtcma.innerHTML=tcma;
	
	
}


function cambiar_formato2(id_celda){ // funcion que cambia el formato al valor de las  variables si este fue ajustado por el sistema
	//document.getElementById(id_celda).style.fontStyle = "italic";
	document.getElementById(id_celda).style.textDecoration = "underline";
}