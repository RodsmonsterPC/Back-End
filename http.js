
const express = require("express")
const app = express()
// const http = require("http")

app.get("/", (request,response) =>{

    response.write("hola bienvenido al get home")
    response.end()
})

app.get("/profile", (request,response) =>{

    response.write("hola bienvenido al perfil")
    response.end()
})

app.post("/", (request,response) =>{

    response.write("hola bienvenido al post")
    response.end()
})

app.patch("/", (request,response) =>{

    response.write("hola bienvenido al patch")
    response.end()
})

app.put("/", (request,response) =>{

    response.write("hola bienvenido al put")
    response.end()
})

app.delete("/", (request,response) =>{

    response.write("hola bienvenido al delete")
    response.end()
})

app.listen("8080", ()=>{

    console.log("servidor Escuchando")
})
// const server = http.createServer((request,response)=>{
    
//     const { url, method } = request

    // if(method === "GET" && url === "/") {
    //     response.write("Bienvenido estas en el get, en home estas leyendo")
    //   } else if(method === "POST" && url === "/") {
    //     response.write("Bienvenido estas en el POST en la ruta /")
    //   } else if (method === "PATCH" && url === "/") {
    //     response.write("Bienvenido estas en el PATCH en la ruta /")
    //   } else if (method === "PUT" && url === "/") {
    //     response.write("Bienvenido estas en el PUT en la ruta /")
    //   } else if (method === "DELETE" && url === "/") {
    //     response.write("Bienvenido estas en el DELETE en la ruta /")
    //   } else if(method === "GET" && url === "/profile") {
    //     response.write("Bienvenido estas en el GET en la ruta /profile")
    //   }
    //   else {
    //     response.write("Esta ruta no existe")
    //   }
    
    //   response.end()


//     const endpoints ={

//         "GET":{
//             "/":"Bienvenidos Get en Home",
//             "/profile":"Bienvenido estas en tu perfil",
//         },
//         "POST":{
//             "/":"Bienvenidos Post en Home",
//             "/user":"Bienvenido estas en tu perfil",
//         },
//         "PATCH":{
//             "/":"Bienvenidos Patch en Home",
//             "/profile":"Bienvenido estas en tu perfil",
//         },
//         "PUT":{
//             "/":"Bienvenidos Put en Home",
//             "/profile":"Bienvenido estas en tu perfil",
//         },
//         "DELETE":{
//             "/":"Bienvenidos Delete en Home",
//             "/profile":"Bienvenido estas en tu perfil",
//         },
//     }
      
//     response.write(endpoints[method][url])
//     response.end()
// })

// server.listen(8080, ()=>{
//     console.log("Server listening....")
// })