/*EJERCICIOS DE ES6
Iteracion 1: Arrows*/

/*-------------------------------------------------------------------------
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros
---------------------------------------------------------------------------*/

const functionArrowExercise = (a = 10, b = 5) => a + b

const functionArrowNoParam = functionArrowExercise()
console.log("🚀 ~ functionArrowNoParam:", functionArrowNoParam);

/*const functionArrowOneParam = functionArrowExercise(a,2)
console.log("🚀 ~ functionArrowOneParam:", functionArrowOneParam);

const functionArrowTwoParam = functionArrowExercise(a,b)
console.log("🚀 ~ functionArrowTwoParam:", functionArrowTwoParam);*/

//EJERCICIO PENDIENTE (Da error con solo un parámetro)

/*EJERCICIOS DE ES6
Iteracion 2.1: Destructuring (Primer ejercicio)*/

/*-------------------------------------------------------------------------
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
---------------------------------------------------------------------------*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const gameProperties = {title, gender, year}=game;
console.log("🚀 ~ gameProperties:", gameProperties);
