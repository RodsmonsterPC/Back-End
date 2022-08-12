
/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

const pastel = {
    recetaLeida: false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const recetaLeida = (recetaAprendida) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recetaAprendida.recetaLeida = true;

            if (!recetaAprendida.recetaLeida) {
                reject("No se pudo aprender la receta");
            }

            
            resolve(recetaAprendida);
        }, 3000);
    });
};

const ingredientesConseguidos = (ingredientesObtenidos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesObtenidos.ingredientesConseguidos = true;

            if (!ingredientesObtenidos.ingredientesConseguidos) {
                reject("No se alcanzo para los ingredientes");
            }

            
            resolve(ingredientesObtenidos);
        }, 1000);
    });
};

const masaPreparada = (masaPreparada) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaPreparada.masaPreparada = true;

            if (!masaPreparada.masaPreparada) {
                reject("Chale, estropie la masa");
            }

            
            resolve(masaPreparada);
        }, 2000);
    });
};

const pastelHorneado = (prepararHorno) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            prepararHorno.pastelHorneado = true;

            if (!prepararHorno.pastelHorneado) {
                reject("Se quemo la cocina");
            }

            
            resolve(prepararHorno);
        }, 5000);
    });
};

const pastelDecorado = (prepararMerengue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            prepararMerengue.pastelDecorado = true;

            if (!prepararMerengue.pastelDecorado) {
                reject("No soy el mejor para esto ya no hay pan");
            }

            
            resolve(prepararMerengue);
        }, 3000);
    });
};


const chefcito = recetaLeida({ ...pastel });
chefcito
    .then((chefcito) => {
        console.log(chefcito);

        
        ingredientesConseguidos({ ...chefcito })
            .then((ingredientesListos) => {
                console.log("ingredientes Listos", ingredientesListos);

                masaPreparada({ ...ingredientesListos })
                    .then((masaLista) => {
                        console.log("Masa a masada y preparada", masaLista);

                        pastelHorneado({ ...masaLista })
                            .then((pastelAdorado) => {
                                console.log("Pastel casi hecho", pastelAdorado);

                                pastelDecorado({...pastelAdorado})
                                .then((pastelListo) =>{
                                    console.log("Pastel gurmet listo para comer", pastelListo)
                                })
                                .catch((error)=>{
                                    console.log("error", error)
                                })
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            .catch((error) => {
                console.log("error", error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });
