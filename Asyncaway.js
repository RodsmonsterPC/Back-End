
/**
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * 
 * Sintaxis:
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
  
            // Si se resuelve
            resolve(recetaAprendida);
        }, 1000);
    });
  };

  const ingredientesConseguidos = (ingredientesObtenidos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesObtenidos.ingredientesConseguidos = false;
  
            if (!ingredientesObtenidos.ingredientesConseguidos) {
                reject("No alcanzo para los ingredientes");
            }
  
            // Si se resuelve
            resolve(ingredientesObtenidos);
        }, 2000);
    });
  };

  const masaPreparada = (masaLista) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaLista.masaPreparada = true;
  
            if (!masaLista.masaPreparada) {
                reject("Estropie la masa");
            }
  
            // Si se resuelve
            resolve(masaLista);
        }, 3000);
    });
  };

  const pastelHorneado = (pastelCaliente) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelCaliente.pastelHorneado = true;
  
            if (!pastelCaliente.pastelHorneado) {
                reject("Se quema la cocina");
            }
  
            // Si se resuelve
            resolve(pastelCaliente);
        }, 5000);
    });
  };

  const pastelDecorado = (pastelListo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelListo.pastelDecorado = true;
  
            if (!pastelListo.pastelDecorado) {
                reject("No soy el mejor en esto");
            }
  
            // Si se resuelve
            resolve(pastelListo);
        }, 2000);
    });
  };

  
  const recetaObtenida = async () => {
    try{
        const recetaPreparada = await recetaLeida({...pastel})
        console.log("Receta Lista", recetaPreparada)

        const IngredientesListos = await ingredientesConseguidos({...recetaPreparada})
        console.log("Ingredientes Listos", IngredientesListos)

        const masaLista = await masaPreparada({...IngredientesListos})
        console.log("Masa Lista", masaLista)
    
        const pastelcaliente = await pastelHorneado({...masaLista}) 
        console.log("Pastel Horneado", pastelcaliente)

        const pastelExitoso = await pastelDecorado({...pastelcaliente})
        console.log("Hora de comer pastel", pastelExitoso)

    } catch (reject){
        console.log(reject)
    }
             
}


recetaObtenida();
