let time = -1; // horas validas van de 0 a 23
let greeting;

// if (time < 12) {
//     greeting = "Good morning"
// }

// if (time > 12) {
//     greeting = "Good afternoon"
// }

// if (time >= 19) {
//     greeting = "good evening"
// }

// if (time >= 0 && time < 12) {
//     greeting = "Good morning"
// } else if (time >= 12 && time < 19) {
//     greeting = "good afternoon"
// } else if (time >= 19 && time <= 23) {
//     greeting = "good evening"
// } else {
//     greeting = "Hora desconocida"
// }

// console.log('saludos', greeting)
// console.log('time', time)

// let day = 5;
// let text;

// switch (day) {
//     case 0:
//         text = 'Domingo'
//         break;
//     case 1:
//         text = 'Lunes'
//         break;
//     case 2:
//         text = 'Martes'
//         break;
//     case 3:
//         text = 'Miércoles'
//         break;
//     case 4:
//         text = 'Jueves'
//         break;
//     case 5:
//         text = 'Viernes'
//         break;
//     case 6:
//         text = 'Sabado'
//         break;

//     default:
//         text = 'Error'
//         break;
// }


// console.log('Dia de la semana: ', text)

// let speed = 90;
// let message;

// // if (speed > 100) {
// // 	message = "You're going too fast!";
// // } else {
// // 	message = "Under the limit";
// // }

// message = speed > 100 ? "You're going too fast!" : "Under the limit"

// console.log(message);	// You're going too fast!
// console.log(speed)

// let objeto = '';

// if (objeto) {
// 	mensaje = "You're going too fast!";
// } else {
// 	mensaje = "Under the limit";
// }

// // console.log(mensaje)
// let tareas = [
//     'hacer la tarea',
//     'ir por huevo',
//     'bailar un rato',
//     'dormirme'
// ];
// let cuenta = 10

// for (let index = 0; index < tareas.length; index++) {

//     console.log(tareas[index])

// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

for (let contador = 0; contador <= 10; contador++) {
    let esPrimo = true;

    for(let i = 2; i <= contador; i++) {
        if (contador % i === 0 && i !== contador) {
            esPrimo = false
        }
    }

    if (esPrimo) {
        console.log('El número ' + contador + ' es primo')
    }
}

