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

const functionArrowOneParam = functionArrowExercise(2)
console.log("🚀 ~ functionArrowOneParam:", functionArrowOneParam);

const functionArrowTwoParam = functionArrowExercise(2,2)
console.log("🚀 ~ functionArrowTwoParam:", functionArrowTwoParam);


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

/*EJERCICIOS DE ES6
Iteracion 2.2: Destructuring (Segundo ejercicio)*/

/*-------------------------------------------------------------------------
2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];
---------------------------------------------------------------------------*/

const fruits = ['Banana', 'Strawberry', 'Orange'];
const fruitsSplit = [fruit1, fruit2, fruit3] = fruits;
console.log("🚀 ~ fruit1:", fruit1)
console.log("🚀 ~ fruit2:", fruit2)
console.log("🚀 ~ fruit3:", fruit3);

/*EJERCICIOS DE ES6
Iteracion 2.3: Destructuring (Tercer ejercicio)*/

/*-------------------------------------------------------------------------
2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
---------------------------------------------------------------------------*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let bengalTiger = {name: 'Bengal Tiger', race: 'Tiger'}

const animalFunctionDestructuring = animalFunction(bengalTiger)
console.log("🚀 ~ animalFunctionDestructuring:", animalFunctionDestructuring);

/*EJERCICIOS DE ES6
Iteracion 2.4: Destructuring (Cuarto ejercicio)*/

/*-------------------------------------------------------------------------
2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
---------------------------------------------------------------------------*/

const car = {carname: 'Mazda 6', itv: [2015, 2011, 2020] }

const carProperties = {carname, itv}=car;
console.log("🚀 ~ carProperties:", carProperties);
const itvYears = [itvYear1, itvYear2, itvYear3]=itv;
console.log("🚀 ~ itvYears:", itvYears);
