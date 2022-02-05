// let time = -1; // horas validas van de 0 a 23
// let greeting;

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

// console.log(mensaje)
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

// for (let contador = 0; contador <= 10; contador++) {
//     let esPrimo = true;

//     for(let i = 2; i <= contador; i++) {
//         if (contador % i === 0 && i !== contador) {
//             esPrimo = false
//         }
//     }

//     if (esPrimo) {
//         console.log('El número ' + contador + ' es primo')
//     }
// }

// SESION 2 - TEMA 3

// function ejemplo(numero) {

//     console.log('hola mundo, soy una funcion!', numero);
// }

// for (let index = 0; index < 10; index++) {
//     ejemplo(index);
// }

// let index;
// for (index = 0; index < 10; index++) {
//   console.log(index)
// }

// for(let cuentaAtras = 5; cuentaAtras >= 0; cuentaAtras--){
//     console.log(cuentaAtras)
// }

// console.log('terminado')
// for (let index = 0; index < 10; index += 2) {
//     ejemplo(index);
// }

// function calcularEdad(birthYear) {
//     let age = 2022 - birthYear;
//     return age;
// }

// function yearsUntilRetirement(year, name) {
//     let age = calcularEdad(year);
//     let retiro = 65 - age;
//     console.log(name + ' retires in ' + retiro + ' years')
// }

// yearsUntilRetirement(1969, 'Pepe');

// base = 3, exponent = 2
// function power(base, exponent) {
//     let resultado = 1;
//     // asumiendo que el exponente es positivo siempre
//     for(let i = 0; i < exponent; i++){
//         // i = 0, resultado = 1 ====> resultado = 3
//         // i = 1, resultado = 3 ====> resultado = 9
//         // i = 2, salimos del loop ======> resultado = 9
//         resultado = resultado * base
//     }

//     return resultado;
// }

// // // OPtra posible solucion
// // function potencia(base, exponente){
// //     let resultado = 1;
// //     if (exponente > 0 ){
// //         resultado = base
// //         for (let i=1; i<exponente; i++){
// //             resultado = resultado * base;
// //         }
// //     return resultado;
// //     }
// // }

// console.log(power(4,2));

// let queHacesTu = function(trabajo, nombre) {
//     switch(trabajo) {
//         case 'developer':
//             return nombre + ' develops cool apps.';

//         case 'designer':
//             return nombre + ' designs awesome websites.';

//         default:
//             return nombre + ' does something else.';
//     }
// }

// console.log(queHacesTu('developer', 'Santiago'))
// console.log(queHacesTu('designer', 'Lupe'))
// console.log(queHacesTu('abogado', 'Ruben'))

// let nombres = ['Santiagpo', 'Lupe', 'Ruben']
// let trabajos = ['developer', 'designer', 'abogado']

// for()

// let factorial = function fac(number) {
//     return number < 2 ? 1 : number * fac(number - 1)
// }

// console.log(factorial(2));

// (function logName(name) {
//     console.log(name, 'Doe')
// })('John');

// function getLargerInt(number1, number2) {
//     return number1 > number2 ? number1 : number2;
//     // if (number1 > number2) {
//     //     return number1
//     // } else {
//     //     return number2
//     // }
// }

// console.log(getLargerInt(11,10));

// function fibonacci(num) {
//     if (num === 0) return 0;
//     if (num <= 1) return 1;

//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function secuencia(limit) {
//     if (limit < 1) return console.log('Limit debe ser mayor que 0');

//     for(let i = 0; i < limit; i++) {
//         console.log(fibonacci(i))
//     }
// }

// secuencia(8);

// alert('este es un mensajd de alerta')
// isNaN(8)

// Sesion 2 - TEMA 2

// [1, 3, 4, 7, 2, 1, 9, 0]  // Arreglo inicial

// [2, 6, 8, 14, 4, 2, 18, 0]  // Resultado esperado

// function porDos(numbers) {
//     let multipliedNumbers = [];

//     for(let i = 0; i < numbers.length; i++) {
//         multipliedNumbers.push(numbers[i] * 2)
//         console.log('multipliedNumbers', multipliedNumbers)
//     }

//     return multipliedNumbers;
// }

// let input = [1, 3, 4, 7, 2, 1, 9, 0];

// let output = porDos(input)

// console.log('input', input)
// console.log('output', output)

// let calificaciones = [10, 8, 7, 6, 10, 9, 9, 7, 8, 8]

// let promedio = 0;
// calificaciones.forEach((element, index) => {
// 	promedio = (promedio + element)
//     if (index + 1 >= calificaciones.length) {
//         promedio /= calificaciones.length;
//     }
// })

// console.log('funcional', promedio)

// function prom(califs){
//     let subtotal = 0;

//     for(i = 0; i < califs.length; i++){
//         subtotal += califs[i];
//     }

//     return subtotal/califs.length;
// }

// console.log('imperativa', prom(calificaciones));

// let vaso = {
//     color: 'red',
//     material: 'plastic',
//     altura: 15,
//     volumen: 300,
//     sucio: true,
//     vaciarse: function() {
//         console.log('estoy vacipandome')
//     }
// }

// let car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }

//   [['model', 'Versa'], ['year', 2020]]  // Resultado esperado

// car.brand // 'Nissan'
// car['brand'] // 'Nissan'

// function keyValuePairs(obj) {
//     let keys = Object.keys(obj); // array/arreglo/lista de las propiedades del objeto
//     let pairs = [];

//     for(let i = 0; i < keys.length; i++) {
//         pairs.push([keys[i], obj[keys[i]]])
//     }

//     return pairs;
// }

// function arrayToObject(arr) {
//     let obj = {};

//     for(let i = 0; i < arr.length; i++) {
//         obj[arr[i][0]] = arr[i][1]
//     }

//     return obj
// }

// // Otra forma de hacerlo
// // futureObject = keyValuePairs(car);

// // function makeObject(futureObj) {
// //     let newCar = Object.create(car);
// //     for(i = 0; i < futureObj.length; i++){
// //         newCar[futureObj[ 0, i]] =  futureObj[ i, 1];
// //     }
// //     return newCar;
// // }

// // console.log(makeObject(car))

// let nuevoObjeto = arrayToObject(keyValuePairs(car))

// console.log(nuevoObjeto)

// let singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//     let values = [];

//     for(let i = 0; i < list.length; i++) {
//         console.log('objeto por objeto', list[i].name)

//         values.push(list[i][propertyName]);
//     }

//     return values
// }

// let resultados = pluck(singers, 'name')
// console.log( resultados );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]


// TERCERA SESION, TEMA 1

// let john = {
// 	name: 'John',
// 	birthYear: 1990,
// 	job: 'Developer'
// }

// let Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// let john = new Person('John', 1990, 'Developer');
// let mark = new Person('Mark', 1970, 'Teacher');
// let jane = new Person('Jane', 1996, 'Designer');

// console.log('Objeto,', john, mark, jane);

// let Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
// }

// let vec1 = new Vec(1, 2);
// let vec2 = new Vec(2, 3); // vec2 = {x: 2, y: 3}

// let vec3 = new Vec(4, 2);

// // vec2 = {x: 2, y: 3}
// // vec1.plus(vec2)
// Vec.prototype.plus = function(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
// }

// Vec.prototype.minus = function(other) {
//     return new Vec(this.x - other.x, this.y - other.y)
// }

// Vec.prototype.length = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y)
// }


// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }


// console.log(vec2.plus(vec1))
// console.log(vec1.plus(vec3))
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length(vec1)); // 2.23606797749979

// let Person = function(nombre) {
//     this.nombre = nombre;
// }

// let john = new Person('John') // john = {name: 'John'}

// let Developer = function(nombre, skills, yearOfExperience) {
//     Person.call(this, nombre);

//     this.skills = skills;
//     this.yearOfExperience = yearOfExperience;
// }

// let jane = new Developer('Jane', 'FrontEnd', 10)

// console.log(jane)


// let Group = function() {
//     this.members = []
// }

// Group.prototype.add = function(value) {
//     if(!this.has(value)) this.members.push(value);
// }

// Group.prototype.has = function(value) {
//     return this.members.includes(value);
// }

// Group.from = function(collection) {
//     let group = new Group();
//     console.log('grupo', group)
//     for(let i = 0; i < collection.length; i++) {
//         group.add(collection[i])
//     }

//     return group
// }

// let arrayInicial = [1, 2, 3, 4, 5]
// let group = Group.from(arrayInicial);

// console.log(group)
// console.log(group.has(6)) // false
// group.add(10)
// console.log(group.has(10)) // true
// console.log(group)

// console.log(arrayInicial)

// let Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     let today = new Date();
//     let year = today.getFullYear();

//     console.log(year - this.birthYear);
// }

// let john = new Person('John', 1990, 'DEveloper');
// let mark = new Person('Mark', 1970, 'Teacher');
// let jane = new Person('Jane', 1994, 'DEsigner');

// console.log(john)

// SESION 3, TEMA 2

// let numbers = [1, 2, 3, 4, 5];
// let doubles = [];

// for(let i = 0; i < numbers.length; i++) {
// 	doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// let numbers = [1, 2, undefined, 4, 5];

// let doubles = numbers.map(function(number) {
//     return number * 2;
// })

// let triplets = doubles.map((number) => number * 3)



// console.log(numbers)
// console.log(doubles)
// console.log(triplets)

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3))
// console.log(add(2, 3))

// function randomNum() {
//     return Math.floor(Math.random() * 100);
// }

// console.log(randomNum())
// console.log(randomNum())

// function addColor(car, color) {
//     let newCar = Object.assign({}, car, {
//         color: color
//     })

//     return newCar;
// }

// let sentra = {
//     nombre: 'Sentra'
// }

// let golf = {
//     nombre: 'Golf'
// }
// console.log(golf)
// console.log(addColor(golf, 'blue'));
// console.log(addColor(golf, 'blue'));
// console.log(addColor(sentra, 'red'));
// FUNCIONES PURAS E IMPURA
// let cart = [{nombre: 'carrito'}]

// function addItemToCart(item, quantity) {
//     cart.push({
//         item: item,
//         quantity: quantity
//     })
// }

// addItemToCart('bolsa1', 1)

// console.log(cart)

// addItemToCart('bolsa2', 1)

// console.log(cart)

// let cuadrado = function(number) {
//     return number * number;
// }

// let cuadradoDeCuatro = cuadrado(4)

// console.log(cuadradoDeCuatro)

// HO functions

// let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map(function(number) {
// 	return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// let numerosPares = numbers.filter(function(number) {
//     return number % 2 !== 0;
// })

// console.log(numerosPares)

// let sum = numbers.reduce(function(acum, valorActual) {
//     return acum + valorActual;
// }, 0)

// console.log(sum)

// let gatos =[
//     {nombre: 'zephir', color: 'blanco', price: '420' },
//     {nombre: 'luna', color: 'negro', price: '140' },
//     {nombre: 'yasmin', color: 'cafe', price: '60' },
//     {nombre: 'Charls', color: 'Gold', price: '120' }
// ]

// // let precioTotal = gatos.reduce(function(totalPrecios, elem) {
// //     return totalPrecios + Number(elem.price)
// // }, 0)

// // console.log(precioTotal)

// let gatoNoNegro = gatos.filter(function(elem) {
//     return elem.color !== 'negro'
// })

// let precioGatosNoNegro = gatoNoNegro.reduce(function(totalPrecios, elem) {
//     return totalPrecios + Number(elem.price)
// }, 0)


// let precioGatosSinGatoNegro = gatos
//     .filter(function(elem) {
//         return elem.color !== 'negro'
//     }) // array sin los gatos negros
//     .reduce(function(totalPrecios, elem) {
//         return totalPrecios + Number(elem.price)
//     }, 0) // dinero que voya ganar por los gatos, sin incluir al gato negro

// console.log('precio sin gato negro', precioGatosSinGatoNegro)

// Numero de entrada 12345 suma de sus dígitos es 15

// let number = prompt('que numero vas a sumar');

// // let string = number.toString(); // '12345'

// // let array = string.split('') 

// let array = number.toString().split('');

// console.log(array)

// // let arrayOfNumbers = array.map(function(number) {
// //     return Number(number);
// // })

// let arrayOfNumbers = array.map(Number)

// console.log(arrayOfNumbers)

// // let suma = arrayOfNumbers.reduce(function(total, num) {
// //     return total + num;
// // }, 0)

// let suma = function(numero) {
//     numero
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function(total, num) {
//             return total + num;
//         }, 0)
// }

// console.log(suma)


// function flatten(arrays) {
//     return arrays.reduce( function (arrayFlaten, elem) {
//         return arrayFlaten.concat(elem)
//     }, [])
// }

// var arrays = [[1, 2, 3], [4, 5], [6], [8, 9, 10]];
// var array = flatten(arrays);
// console.log('string' + 1)
// console.log(array); // [1, 2, 3, 4, 5, 6, 8, 9, 10]


// function compact(array) {
//     return array.filter(function(elem) {
//         return !!elem
//     })
// }

//   var array = [0, 1, false, 2, '', 3];
//   var compactedArray = compact(array);

//   console.log(compactedArray); // [1, 2, 3]

