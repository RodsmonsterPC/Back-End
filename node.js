
const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

/**
 * Construir una funcion que separe los nombres largos de los cortos 
 * un nombre largo es aquel que supera los 4 caracteres de longitud.
 * 
 * 
 * Input: ["Rodolfo" ...]
 * Destructurando
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto
 */

// let nombresSeparados = []
// let nombresCortos = []
// let nombresLargos = []

// const separador = (nombre) =>{

//     nombre.forEach(nombre => {

//          nombresCortos= nombres.filter(nombre => nombre.length < 4)
//          nombresLargos= nombres.filter(nombre => nombre.length > 4)
        
//     });
    
//     return[nombresCortos, nombresLargos]
    
// }

// const [NombresCortos, NombresLargos] = separador(nombres)

// console.log("Nombres cortos:", NombresCortos)
// console.log("Nombres largos:", NombresLargos)


// Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
// Input: ["Ale", "Mariana", "Adrian"]...
// Output:
// {
// 	0: {
// 		name: "Ale", -> string
// 		length: 3, -> numero
// 		isGreaterThanFour: true -> booleano
// 	}
// }


const transformaNombres = (nombre) =>{
  
  let resultados = {}
  
 nombre.reduce((acc, cv, index) =>{

  return resultados[index] = {

      name : cv,
      length : cv.length,
      isGreaterThanFour : `${cv.length > 3 ? true : false}`
  }
    
}, "")
   return resultados
}
// console.log(transformaNombres(nombres))

const transformedNames = transformaNombres(nombres)
console.log("transformedNames", transformedNames)

//  `${index}: {
    //    		name: ${cv}, -> string
    //    		length: ${cv.length}, -> numero
    //   		isGreaterThanFour: ${cv.length > 3 ? true : false } -> booleano
    //    	}`

    //  return  {[index] : {

//       name : cv,
//       length : cv.length,
//       isGreaterThanFour : `${cv.length > 3 ? true : false}`
//   }, 
//  }