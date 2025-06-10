


const primerosTres = ["diciembre", "enero", "febrero" ]

const segundoTres = ["marzo", "abril", "mayo"]

const terceroTres = ["junio", "julio", "agosto"]





const verano = (mes) => {
   return primerosTres.includes(mes.toLowerCase())  
      
  }


const otonio = (mes) => {

  return segundoTres.includes(mes.toLowerCase())
 
}


const invierno = (mes) => {
return terceroTres.includes(mes.toLowerCase())
}


const primavera = (mes) => {
  switch (mes){

    case "septiembre":
      return true
    
    case "octubre" :
      return true

    case "noviembre" :
      return true

    default :
    return false
  }

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
