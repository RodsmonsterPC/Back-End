
/**
 * Crear una funcion que reciba un nombre del proceso.
 * Y en esa misma funcion imprimirla con color arcoiris.
 * Utilizar el paquete colors
 */
 
 var colors = require('colors');

 const nombre = process.argv[2]

 const printName = (nombre) => {
   if(nombre) { 
     console.log(nombre.rainbow)
     return // Salte
   }
   console.log("Afuera de aqui")
 }
 
 printName(nombre)