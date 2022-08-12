
//Calbacks
/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

// const pastel = {
//     recetaLeida: false,
//     ingredientesConseguidos: false,
//     masaPreparada: false,
//     pastelHorneado: false,
//     pastelDecorado: false
// }

// const recetaLeida = (recetaAprendida, callback) => {

//     let error = null;

//     setTimeout(() => {

//         recetaAprendida.recetaLeida = true;

//         if (!recetaAprendida.recetaLeida) {
//             error = "No se aprendio la receta";
//         }
//         callback(error, recetaAprendida)

//     }, 2000);

// };

// const ingredientesConseguidos = (tenemosIngredientes, callback) => {

//     let error = null;

//     setTimeout(() => {

//         tenemosIngredientes.ingredientesConseguidos = true;

//         if (!tenemosIngredientes.ingredientesConseguidos) {
//             error = "No alcanzo para lo basico";
//         }
//         callback(error, tenemosIngredientes)

//     }, 3000);

// };

// const masaLista = (masa, callback) => {

//     let error = null;

//     setTimeout(() => {

//         masa.masaPreparada = true;

//         if (!masa.masaPreparada) {
//             error = "Hechamos a perder la masa T.T";
//         }
//         callback(error, masa)

//     }, 5000);

// };

// const pastelHorneado = (panHorneado, callback) => {

//     let error = null;

//     setTimeout(() => {

//         panHorneado.pastelHorneado = true;

//         if (!panHorneado.pastelHorneado) {
//             error = "Se quema la cocina";
//         }
//         callback(error, panHorneado)

//     }, 2000);

// };

// const pastelDecorado = (pastelBonito, callback) => {

//     let error = null;

//     setTimeout(() => {

//         pastelBonito.pastelDecorado = true;

//         if (!pastelBonito.pastelDecorado) {
//             error = "Hay mas merengue que pan";
//         }
//         callback(error, pastelBonito)

//     }, 1000);

// };






// recetaLeida({ ...pastel }, (error, tenerReceta) => {

//     if (error) {
//         console.log("error:", error);
//         return;
//     }


//     ingredientesConseguidos({ ...tenerReceta }, (error, tenerIngredientes) => {
//         if (error) {
//             console.log("error", error);
//             return;
//         }


//         masaLista({ ...tenerIngredientes }, (error, tenermasa) => {
//             if (error) {
//                 console.log("error", error);
//                 return;
//             }


//             pastelHorneado({ ...tenermasa }, (error, iniciarHorneado) => {
//                 if (error) {
//                     console.log("error", error)
//                     return
//                 }


//                 pastelDecorado({ ...iniciarHorneado }, (error, finalizarDecoracion) => {

//                     if (error) {
//                         console.log("error", error)
//                         return
//                     }

//                     console.log("Exito hora de comer pastel", finalizarDecoracion)
//                 });

//             });
//         });
//     });
// });

//Promesas

