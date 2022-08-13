

const http = require("http")

const server = http.createServer((request,response)=>{
    
    const { url, method } = request

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


    const endpoints ={

        "GET":{
            "/":"Bienvenidos Get en Home",
            "/profile":"Bienvenido estas en tu perfil",
        },
        "POST":{
            "/":"Bienvenidos Post en Home",
            "/user":"Bienvenido estas en tu perfil",
        },
        "PATCH":{
            "/":"Bienvenidos Patch en Home",
            "/profile":"Bienvenido estas en tu perfil",
        },
        "PUT":{
            "/":"Bienvenidos Put en Home",
            "/profile":"Bienvenido estas en tu perfil",
        },
        "DELETE":{
            "/":"Bienvenidos Delete en Home",
            "/profile":"Bienvenido estas en tu perfil",
        },
    }
      
    response.write(endpoints[method][url])
    response.end()
})

server.listen(8080, ()=>{
    console.log("Server listening....")
})