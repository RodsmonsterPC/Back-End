//create file
// const fs = require("fs")

// console.log("fs wirte", fs.writeFile)

// fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) => {
//   // Logica negativa
//   if(err) {
//     console.log("err", err)
//     return //Salte
//   }

//   // Si no, todo lo demas
//   console.log("El archivo fue creado exito")
// })


//read file

// const fs = require("fs")

// fs.readFile("./color.js", "utf8", (err, data) =>{
//     if(err) {
//             console.log("err", err)
//             return //Salte
//           }
//     console.log(data)
// })

//append file - Patch actualizar

const fs = require("fs")

// fs.appendFile("text1.txt", "Esto es Nuevo", "utf8", (err) =>{

//   if (err) {
//     console.log("error", err)
//     return
//   }

//   console.log("Tu archivo fue actulizado correctamente")
// } )

//borrar
// fs.unlink("text1.txt", (err) => {
//   if (!err) {
//     console.log('El archivo fue borrado');
//   }
  
//   else{
//     console.log(err)
//   }
// });

//Leer directorio

// fs.readdir("directorio", "utf8", (err, files)=>{
     
//   if(err) throw err

//   console.log("files", files)
// })

// const files = fs.readdirSync("directorio", "utf8")
// console.log("files", files)

// * Ejercicio 2
//  * Con callbacks
//  * 1 - Leer los archivos de un directorio y eliminarlos.
//  * - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
//  */


fs.readdir("directorio", "utf8", (err, files)=>{
  if(err) throw err
  
  if (files.length === 0){
    console.log("No hay nada que borrar")
    return
  }
  

  files.forEach(cv =>{
    
    fs.unlink(`directorio/${cv}`, (err) => {
      if (!err) {
        console.log('El archivo fue borrado');
      }
      else {
        console.log(err)
      }
  })
  
  });
})


/**
 * Hacer una carpeta dentro de otra
 * Y eliminar el contenido de toda la carpeta de adentro
 * En pseudo-codigo
 * readdir -> leer directorio
 * rmdir -> eliminar directoio
 * unlink -> eliminar un archivo
 * fs.statSync(path[, options]) -> para ver los stats de un archivo o directorio 
 * (tip: para ver si algo es directorio)
 */
