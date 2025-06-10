


const mesesDeVerano = ["diciembre", "enero", "febrero" ]

const mesesDeOtonio = ["marzo", "abril", "mayo"]

const mesesDeInvierno = ["junio", "julio", "agosto"]

const mesesdePrimavera = ["septiembre", "octubre","noviembre"]



const verano = (mes) => {
   return mesesDeVerano.includes(mes.toLowerCase())  
      
  }


const otonio = (mes) => {

  return mesesDeOtonio.includes(mes.toLowerCase())
 
}


const invierno = (mes) => {
return mesesDeInvierno.includes(mes.toLowerCase())
}


const primavera = (mes) => {
return mesesdePrimavera.includes(mes.toLowerCase())

}



const determinarEstacion = (mes) => {
  if (verano(mes)){
    return "verano"
  } else if (otonio(mes)){
    return "otoño"
  } else if (invierno(mes)){
    return "invierno"
  } else if (primavera(mes)){
    return "primavera"
  } else {
    return "El mes ingresado es inexistente"
  }
 

  
}

condicion = true  

while(condicion ){
  let mes = prompt("Ingresa el Mes y sabras a que Estacion pertenece !!!!")
  const estacion = determinarEstacion(mes)
   console.log("Tu estacion para el mes " + mes + " es: " + estacion )

  const respuesta = prompt("Necesitas otra consulta si o no ? !!!!").toLowerCase()

  if(respuesta == "no" ){
    condicion =false
     alert("Gracias por usar Nuestra Aplicacion")
     
  }  
}
